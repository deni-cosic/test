import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FormSubmissionService } from "./formSubmission.service";
import { FormSubmissionControllerBase } from "./base/formSubmission.controller.base";
import { FormSubmission } from "./base/FormSubmission";
import { FormSubmissionCreateInput } from "./base/FormSubmissionCreateInput";
import * as errors from "../errors";
import { Public } from "src/decorators/public.decorator";
import { FileInterceptor } from "@nestjs/platform-express";
import { FormSubmissionFindManyArgs } from "./base/FormSubmissionFindManyArgs";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { plainToClass } from "class-transformer";
import { Request } from "express";
import { FormSubmissionFindForPatientArgs } from "./models/FormSubmissionFindForPatientArgs";
import { JwtService } from "@nestjs/jwt";
import { PatientService } from "src/patient/patient.service";

@swagger.ApiTags("form-submissions")
@common.Controller("form-submissions")
export class FormSubmissionController extends FormSubmissionControllerBase {
  constructor(
    protected readonly service: FormSubmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly patientService: PatientService
  ) {
    super(service, rolesBuilder);
  }
  @Public()
  @common.UseInterceptors(FileInterceptor("file"))
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FormSubmission })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FormSubmissionCreateInput,
  })
  async createFormSubmission(
    @common.Body() data: FormSubmissionCreateInput
  ): Promise<FormSubmission> {
    if (data.rawRequest) {
      const submission: any = {
        formTitle: data.formTitle,
        requestSentId: data.requestSentId,
        requestedBy: data.requestedBy,
      };

      const rawRequest = JSON.parse(data.rawRequest);
      const patientKey = Object.keys(rawRequest).find((key) =>
        key.endsWith("_p")
      );
      const practiceKey = Object.keys(rawRequest).find((key) =>
        key.endsWith("_o")
      );
      const requestSentKey = Object.keys(rawRequest).find((key) =>
        key.endsWith("_r")
      );

      if (patientKey) {
        submission.patientId = rawRequest[patientKey];
      }
      if (practiceKey) {
        submission.practiceId = rawRequest[practiceKey];
      }
      if (requestSentKey) {
        submission.requestSentId = rawRequest[requestSentKey];
      }

      const submissionResult = (
        await this.service.formSubmissions({
          where: {
            requestSentId: submission.requestSentId,
          },
        })
      )[0];

      // We would expect that form needs to be requested to be submitter
      // however, this handles cases where some forms have been sent before
      // this feature is implemented
      if (!submissionResult) {
        submission.submissionId = data.submissionID;
        submission.formId = data.formID;
        return this.service.createFormSubmission(submission);
      }

      const existingSubmission = submissionResult;
      existingSubmission.submissionId = data.submissionID!;
      existingSubmission.formId = data.formID!;

      return await this.service.updateFormSubmission({
        where: { id: existingSubmission.id },
        data: existingSubmission,
      });
    }
    return await this.service.createFormSubmission({
      data: {
        ...data,

        patient: data.patient
          ? {
              connect: data.patient,
            }
          : undefined,

        practice: {
          connect: data.practice,
        },
      },
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
        requestedBy: true,
        requestSentId: true,
        seen: true,
        submissionId: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("count")
  @swagger.ApiOkResponse({ type: [Number] })
  @ApiNestedQuery(FormSubmissionFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async formSubmissionCount(@common.Req() request: Request): Promise<number> {
    const args = plainToClass(FormSubmissionFindManyArgs, request.query);
    return this.service.count({
      ...args,
    });
  }

  @common.Get("findForPatient")
  @Public()
  @swagger.ApiOkResponse({ type: [Number] })
  @ApiNestedQuery(FormSubmissionFindForPatientArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findForPatient(
    @common.Req() request: Request,
    @common.Headers() headers: any
  ) {
    const args = plainToClass(FormSubmissionFindForPatientArgs, request.query);
    const patient = await this.patientService.me(headers);
    return this.service.findForPatient({
      practiceId: args.practiceId,
      patientId: patient?.id,
    });
  }
}
