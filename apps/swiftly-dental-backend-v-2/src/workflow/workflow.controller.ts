import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as errors from "../errors";
import { WorkflowService } from "./workflow.service";
import { WorkflowControllerBase } from "./base/workflow.controller.base";
import { Workflow } from "./base/Workflow";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { WorkflowWhereUniqueInput } from "./base/WorkflowWhereUniqueInput";
import { isRecordNotFoundError } from "src/prisma.util";
import { WorkflowCreateInput } from "./models/WorkflowCreateInput";
import { WorkflowCreateInput as BaseWorkflowCreateInput } from "./base/WorkflowCreateInput";
import dayjs from "dayjs";
import { PracticeService } from "src/practice/practice.service";
import axios from "axios";
import { JwtService } from "@nestjs/jwt";
import { WorkflowStepService } from "src/workflowStep/workflowStep.service";
import { Public } from "src/decorators/public.decorator";
import { MessageController } from "src/sms/message.controller";

@swagger.ApiTags("workflows")
@common.Controller("workflows")
export class WorkflowController extends WorkflowControllerBase {
  constructor(
    protected readonly service: WorkflowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly practiceService: PracticeService,
    protected readonly jwtService: JwtService,
    protected readonly workflowStepService: WorkflowStepService,
    protected readonly messageController: MessageController
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Workflow })
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WorkflowCreateInput,
  })
  override async createWorkflow(
    @common.Body() data: BaseWorkflowCreateInput | WorkflowCreateInput
  ): Promise<Workflow> {
    if (data instanceof BaseWorkflowCreateInput) {
      return super.createWorkflow(data);
    }

    const { name, patientId, steps, anchorDate } = data;

    return await this.service.createWorkflow({
      data: {
        name,
        patientId,
        anchorDate,
        steps: {
          create: steps,
        },
      },
    });
  }

  @Public()
  @common.Post("send-messages")
  async sendMessages() {
    const tempJwt = this.jwtService.sign(
      {
        sub: "ca6dd2be-253f-4f8b-94b9-8d619cb3caf9",
        email: "admin@swiftly.agency",
      },
      { expiresIn: "10m" }
    );
    const workflows: Workflow[] = await this.service.workflows({
      select: {
        name: true,
        steps: true,
        patient: {
          select: {
            id: true,
            mobileNumber: true,
            practice: true,
          },
        },
      },
    });

    const allSmsPromises = workflows.map(async (workflow) => {
      const workflowStepMessagesToSend = workflow.steps?.filter((step) => {
        const isReadyForExecution = dayjs().isSame(
          dayjs(step.executionDate),
          "hour"
        );
        return isReadyForExecution;
      });

      if (workflowStepMessagesToSend?.length === 0) {
        return {
          status: "NOT_SENT",
          message: `Workflow '${workflow.name}' Step messages not sent`,
        };
      }

      const { patient } = workflow;
      if (!patient || !patient.mobileNumber) {
        return {
          patient,
          status: "ERROR",
          message: "No patient",
        };
      }

      const practice = await this.practiceService.practice({
        where: { id: patient.practice?.id },
      });

      const sendingSmsPromises =
        workflowStepMessagesToSend?.map(async (step) => {
          if (step.executedOn) {
            return {
              status: "ALREADY_EXECUTED",
              executedOn: step.executedOn,
            };
          }

          // let endpoint = "https://sls-api.swiftly.agency/enqueueSmsDental";

          try {
            // const axiosResponse = await axios.post(
            //   endpoint,
            //   {
            //     odsCode: practice!.odsCode,
            //     username: "CRON",
            //     message: step.message,
            //     deliveryType: "",
            //     phoneNumber: patient.mobileNumber,
            //     senderId: practice!.senderId,
            //   },
            //   {
            //     headers: {
            //       authorization: `Bearer ${tempJwt}`,
            //     },
            //   }
            // );

            const axiosResponse = await this.messageController.enqueueMessage(
              {},
              {
                content: step.message,
                practiceId: practice?.id!,
                patientId: patient.id,
                messageType: "Instant",
              }
            );
            const { workflow, ...updateStep } = step;
            updateStep.executedOn = new Date();
            await this.workflowStepService.updateWorkflowStep({
              where: { id: step.id },
              data: updateStep,
            });

            return axiosResponse.data;
          } catch (error: any) {
            return {
              patient,
              status: "ERROR",
              message: error.message,
            };
          }
        }) || [];

      const sendingSmsStatuses = await Promise.all(sendingSmsPromises);
      return {
        sendingSmsStatuses,
      };
    });

    return await Promise.all(allSmsPromises);
  }
}
