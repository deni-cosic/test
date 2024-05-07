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
import { LeadFormLinkService } from "../leadFormLink.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LeadFormLinkCreateInput } from "./LeadFormLinkCreateInput";
import { LeadFormLink } from "./LeadFormLink";
import { LeadFormLinkFindManyArgs } from "./LeadFormLinkFindManyArgs";
import { LeadFormLinkWhereUniqueInput } from "./LeadFormLinkWhereUniqueInput";
import { LeadFormLinkUpdateInput } from "./LeadFormLinkUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LeadFormLinkControllerBase {
  constructor(
    protected readonly service: LeadFormLinkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LeadFormLink })
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLeadFormLink(
    @common.Body() data: LeadFormLinkCreateInput
  ): Promise<LeadFormLink> {
    return await this.service.createLeadFormLink({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        sector: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LeadFormLink] })
  @ApiNestedQuery(LeadFormLinkFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async leadFormLinks(@common.Req() request: Request): Promise<LeadFormLink[]> {
    const args = plainToClass(LeadFormLinkFindManyArgs, request.query);
    return this.service.leadFormLinks({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        sector: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LeadFormLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async leadFormLink(
    @common.Param() params: LeadFormLinkWhereUniqueInput
  ): Promise<LeadFormLink | null> {
    const result = await this.service.leadFormLink({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        sector: true,
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
  @swagger.ApiOkResponse({ type: LeadFormLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLeadFormLink(
    @common.Param() params: LeadFormLinkWhereUniqueInput,
    @common.Body() data: LeadFormLinkUpdateInput
  ): Promise<LeadFormLink | null> {
    try {
      return await this.service.updateLeadFormLink({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          sector: true,
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
  @swagger.ApiOkResponse({ type: LeadFormLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLeadFormLink(
    @common.Param() params: LeadFormLinkWhereUniqueInput
  ): Promise<LeadFormLink | null> {
    try {
      return await this.service.deleteLeadFormLink({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          sector: true,
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
