/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PatientService } from "../patient.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PatientCreateInput } from "./PatientCreateInput";
import { Patient } from "./Patient";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { FormSubmissionFindManyArgs } from "../../formSubmission/base/FormSubmissionFindManyArgs";
import { FormSubmission } from "../../formSubmission/base/FormSubmission";
import { FormSubmissionWhereUniqueInput } from "../../formSubmission/base/FormSubmissionWhereUniqueInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { WorkflowFindManyArgs } from "../../workflow/base/WorkflowFindManyArgs";
import { Workflow } from "../../workflow/base/Workflow";
import { WorkflowWhereUniqueInput } from "../../workflow/base/WorkflowWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PatientControllerBase {
  constructor(
    protected readonly service: PatientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PatientCreateInput,
  })
  async createPatient(
    @common.Body() data: PatientCreateInput
  ): Promise<Patient> {
    return await this.service.createPatient({
      data: {
        ...data,

        practice: data.practice
          ? {
              connect: data.practice,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateOfBirth: true,
        firstName: true,
        id: true,
        lastName: true,
        mobileNumber: true,
        nhsNumber: true,

        practice: {
          select: {
            id: true,
          },
        },

        stripeCustomerId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @ApiNestedQuery(PatientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async patients(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.patients({
      ...args,
      select: {
        createdAt: true,
        dateOfBirth: true,
        firstName: true,
        id: true,
        lastName: true,
        mobileNumber: true,
        nhsNumber: true,

        practice: {
          select: {
            id: true,
          },
        },

        stripeCustomerId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async patient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.patient({
      where: params,
      select: {
        createdAt: true,
        dateOfBirth: true,
        firstName: true,
        id: true,
        lastName: true,
        mobileNumber: true,
        nhsNumber: true,

        practice: {
          select: {
            id: true,
          },
        },

        stripeCustomerId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PatientUpdateInput,
  })
  async updatePatient(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.updatePatient({
        where: params,
        data: {
          ...data,

          practice: data.practice
            ? {
                connect: data.practice,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateOfBirth: true,
          firstName: true,
          id: true,
          lastName: true,
          mobileNumber: true,
          nhsNumber: true,

          practice: {
            select: {
              id: true,
            },
          },

          stripeCustomerId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePatient(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.deletePatient({
        where: params,
        select: {
          createdAt: true,
          dateOfBirth: true,
          firstName: true,
          id: true,
          lastName: true,
          mobileNumber: true,
          nhsNumber: true,

          practice: {
            select: {
              id: true,
            },
          },

          stripeCustomerId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/formSubmissions")
  @ApiNestedQuery(FormSubmissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "read",
    possession: "any",
  })
  async findFormSubmissions(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<FormSubmission[]> {
    const query = plainToClass(FormSubmissionFindManyArgs, request.query);
    const results = await this.service.findFormSubmissions(params.id, {
      ...query,
      select: {
        createdAt: true,
        formId: true,
        formTitle: true,
        id: true,

        patient: {
          select: {
            id: true,
          },
        },

        practice: {
          select: {
            id: true,
          },
        },

        receivedAt: true,
        requestSentId: true,
        requestedBy: true,
        seen: true,
        submissionId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/formSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async connectFormSubmissions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: FormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      formSubmissions: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/formSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async updateFormSubmissions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: FormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      formSubmissions: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/formSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async disconnectFormSubmissions(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: FormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      formSubmissions: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/message")
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async findMessage(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessage(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,
        messageType: true,

        patient: {
          select: {
            id: true,
          },
        },

        practice: {
          select: {
            id: true,
          },
        },

        provider: true,
        providerId: true,
        queueItemId: true,
        sentById: true,
        sentOn: true,
        smsCount: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/message")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async connectMessage(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      message: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/message")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async updateMessage(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      message: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/message")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async disconnectMessage(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      message: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/workflows")
  @ApiNestedQuery(WorkflowFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "read",
    possession: "any",
  })
  async findWorkflows(
    @common.Req() request: Request,
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Workflow[]> {
    const query = plainToClass(WorkflowFindManyArgs, request.query);
    const results = await this.service.findWorkflows(params.id, {
      ...query,
      select: {
        anchorDate: true,
        createdAt: true,
        id: true,
        name: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workflows")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async connectWorkflows(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        connect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflows")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async updateWorkflows(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        set: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflows")
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "update",
    possession: "any",
  })
  async disconnectWorkflows(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() body: WorkflowWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        disconnect: body,
      },
    };
    await this.service.updatePatient({
      where: params,
      data,
      select: { id: true },
    });
  }
}
