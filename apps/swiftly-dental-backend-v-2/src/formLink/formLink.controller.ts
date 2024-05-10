import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FormLinkService } from "./formLink.service";
import { FormLinkControllerBase } from "./base/formLink.controller.base";
import { FormLink } from "./base/FormLink";
import { Request } from "express";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { FormLinkFindManyArgs } from "./models/FormLinkFindManyArgs";
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FormLink] })
  @ApiNestedQuery(FormLinkFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FormLink",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async formLinks(
    @common.Req() request: Request
  ): Promise<(FormLink & { isPending?: boolean })[]> {
    const { patientId, practiceId, ...otherQueryParams } = plainToClass(
      FormLinkFindManyArgs,
      request.query
    );

    const formLinks = (await this.service.formLinks({
      where: otherQueryParams,
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
  // const { patientId, practiceOdsCode, ...otherQueryParams } = ctx.query;
  // const formLinks = await strapi.services['form-link'].find(otherQueryParams);

  // if (patientId && practiceOdsCode) {
  //   await Promise.all(
  //     formLinks.map(async (formLink) => {
  //       const submissionResult = await strapi.query('form-submission').find({
  //         submissionId: { $exists: false },
  //         patientRelation: patientId,
  //         practiceRelation: practiceOdsCode,
  //         formTitle: formLink.displayName,
  //       });
  //       if (submissionResult.length > 0) {
  //         const submission = submissionResult[0];
  //         formLink.isPending = dayjs(submission.createdAt).isAfter(dayjs().subtract(10, 'day'));
  //       }
  //     })
  //   );
  // }

  // return formLinks.map((entity) => sanitizeEntity(entity, { model: strapi.models['form-link'] }));
}
