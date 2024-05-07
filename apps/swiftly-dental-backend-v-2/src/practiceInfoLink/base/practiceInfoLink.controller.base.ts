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
import { PracticeInfoLinkService } from "../practiceInfoLink.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PracticeInfoLinkCreateInput } from "./PracticeInfoLinkCreateInput";
import { PracticeInfoLink } from "./PracticeInfoLink";
import { PracticeInfoLinkFindManyArgs } from "./PracticeInfoLinkFindManyArgs";
import { PracticeInfoLinkWhereUniqueInput } from "./PracticeInfoLinkWhereUniqueInput";
import { PracticeInfoLinkUpdateInput } from "./PracticeInfoLinkUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PracticeInfoLinkControllerBase {
  constructor(
    protected readonly service: PracticeInfoLinkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PracticeInfoLink })
  @nestAccessControl.UseRoles({
    resource: "PracticeInfoLink",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPracticeInfoLink(
    @common.Body() data: PracticeInfoLinkCreateInput
  ): Promise<PracticeInfoLink> {
    return await this.service.createPracticeInfoLink({
      data: {
        ...data,

        practice: data.practice
          ? {
              connect: data.practice,
            }
          : undefined,
      },
      select: {
        category: true,
        createdAt: true,
        displayName: true,
        id: true,
        message: true,

        practice: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PracticeInfoLink] })
  @ApiNestedQuery(PracticeInfoLinkFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PracticeInfoLink",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async practiceInfoLinks(
    @common.Req() request: Request
  ): Promise<PracticeInfoLink[]> {
    const args = plainToClass(PracticeInfoLinkFindManyArgs, request.query);
    return this.service.practiceInfoLinks({
      ...args,
      select: {
        category: true,
        createdAt: true,
        displayName: true,
        id: true,
        message: true,

        practice: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PracticeInfoLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PracticeInfoLink",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async practiceInfoLink(
    @common.Param() params: PracticeInfoLinkWhereUniqueInput
  ): Promise<PracticeInfoLink | null> {
    const result = await this.service.practiceInfoLink({
      where: params,
      select: {
        category: true,
        createdAt: true,
        displayName: true,
        id: true,
        message: true,

        practice: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
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
  @swagger.ApiOkResponse({ type: PracticeInfoLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PracticeInfoLink",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePracticeInfoLink(
    @common.Param() params: PracticeInfoLinkWhereUniqueInput,
    @common.Body() data: PracticeInfoLinkUpdateInput
  ): Promise<PracticeInfoLink | null> {
    try {
      return await this.service.updatePracticeInfoLink({
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
          category: true,
          createdAt: true,
          displayName: true,
          id: true,
          message: true,

          practice: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
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
  @swagger.ApiOkResponse({ type: PracticeInfoLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PracticeInfoLink",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePracticeInfoLink(
    @common.Param() params: PracticeInfoLinkWhereUniqueInput
  ): Promise<PracticeInfoLink | null> {
    try {
      return await this.service.deletePracticeInfoLink({
        where: params,
        select: {
          category: true,
          createdAt: true,
          displayName: true,
          id: true,
          message: true,

          practice: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
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
