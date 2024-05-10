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
import { FormSubmissionService } from "../formSubmission.service";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FormSubmissionCreateInput } from "./FormSubmissionCreateInput";
import { FormSubmission } from "./FormSubmission";
import { FormSubmissionFindManyArgs } from "./FormSubmissionFindManyArgs";
import { FormSubmissionWhereUniqueInput } from "./FormSubmissionWhereUniqueInput";
import { FormSubmissionUpdateInput } from "./FormSubmissionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FormSubmissionControllerBase {
  constructor(
    protected readonly service: FormSubmissionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @Public()
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FormSubmission] })
  @ApiNestedQuery(FormSubmissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async formSubmissions(
    @common.Req() request: Request
  ): Promise<FormSubmission[]> {
    const args = plainToClass(FormSubmissionFindManyArgs, request.query);
    return this.service.formSubmissions({
      ...args,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FormSubmission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async formSubmission(
    @common.Param() params: FormSubmissionWhereUniqueInput
  ): Promise<FormSubmission | null> {
    const result = await this.service.formSubmission({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FormSubmission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FormSubmissionUpdateInput,
  })
  async updateFormSubmission(
    @common.Param() params: FormSubmissionWhereUniqueInput,
    @common.Body() data: FormSubmissionUpdateInput
  ): Promise<FormSubmission | null> {
    try {
      return await this.service.updateFormSubmission({
        where: params,
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
  @swagger.ApiOkResponse({ type: FormSubmission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFormSubmission(
    @common.Param() params: FormSubmissionWhereUniqueInput
  ): Promise<FormSubmission | null> {
    try {
      return await this.service.deleteFormSubmission({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
