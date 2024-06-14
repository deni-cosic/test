import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FormLinkService } from "./formLink.service";
import { FormLinkControllerBase } from "./base/formLink.controller.base";
import { FormLink } from "./base/FormLink";
import { Request } from "express";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { FormLinkFindManyArgs } from "./models/FormLinkFindManyArgs";
import { FormLinkFindManyArgs as BaseFormLinkFindManyArgs } from "./base/FormLinkFindManyArgs";
import * as errors from "../errors";
import { ApiNestedQuery } from "../decorators/api-nested-query.decorator";
import { plainToClass } from "class-transformer";
import { FormSubmissionService } from "src/formSubmission/formSubmission.service";
import dayjs from "dayjs";
@swagger.ApiTags("form-links")
@common.Controller("form-links")
export class FormLinkController extends FormLinkControllerBase {
  constructor(
    protected readonly service: FormLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly formSubmissionService: FormSubmissionService
  ) {
    super(service, rolesBuilder);
  }

  @common.Get("/find-for-patient")
  @swagger.ApiOkResponse({ type: [FormLink] })
  @ApiNestedQuery(FormLinkFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async formLinksForPatient(
    @common.Req() request: Request
  ): Promise<(FormLink & { isPending?: boolean })[]> {
    const { patientId, practiceId, ...otherQueryParams } = plainToClass(
      FormLinkFindManyArgs,
      request.query
    );

    const formLinks = (await this.service.formLinks({
      where: { ...otherQueryParams, practiceId },
    })) as (FormLink & { isPending?: boolean })[];

    if (patientId && practiceId) {
      await Promise.all(
        formLinks.map(async (formLink) => {
          const submissionResult =
            await this.formSubmissionService.formSubmissions({
              where: {
                submissionId: {
                  not: null,
                },
                patientId,
                practiceId,
                formTitle: formLink.displayName,
              },
            });
          if (submissionResult.length > 0) {
            const submission = submissionResult[0];
            formLink.isPending = dayjs(submission.createdAt).isAfter(
              dayjs().subtract(10, "day")
            );
          }
        })
      );
    }

    return formLinks;
  }

  @common.Get("/count")
  @swagger.ApiOkResponse({ type: [FormLink] })
  @ApiNestedQuery(BaseFormLinkFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async formLinksCount(@common.Req() request: Request): Promise<number> {
    const args = plainToClass(BaseFormLinkFindManyArgs, request.query);

    return this.service.count(args);
  }
}
