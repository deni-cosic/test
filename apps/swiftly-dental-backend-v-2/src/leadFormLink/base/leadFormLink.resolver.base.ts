/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { LeadFormLink } from "./LeadFormLink";
import { LeadFormLinkCountArgs } from "./LeadFormLinkCountArgs";
import { LeadFormLinkFindManyArgs } from "./LeadFormLinkFindManyArgs";
import { LeadFormLinkFindUniqueArgs } from "./LeadFormLinkFindUniqueArgs";
import { CreateLeadFormLinkArgs } from "./CreateLeadFormLinkArgs";
import { UpdateLeadFormLinkArgs } from "./UpdateLeadFormLinkArgs";
import { DeleteLeadFormLinkArgs } from "./DeleteLeadFormLinkArgs";
import { LeadFormLinkService } from "../leadFormLink.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeadFormLink)
export class LeadFormLinkResolverBase {
  constructor(
    protected readonly service: LeadFormLinkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "read",
    possession: "any",
  })
  async _leadFormLinksMeta(
    @graphql.Args() args: LeadFormLinkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LeadFormLink])
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "read",
    possession: "any",
  })
  async leadFormLinks(
    @graphql.Args() args: LeadFormLinkFindManyArgs
  ): Promise<LeadFormLink[]> {
    return this.service.leadFormLinks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LeadFormLink, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "read",
    possession: "own",
  })
  async leadFormLink(
    @graphql.Args() args: LeadFormLinkFindUniqueArgs
  ): Promise<LeadFormLink | null> {
    const result = await this.service.leadFormLink(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LeadFormLink)
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "create",
    possession: "any",
  })
  async createLeadFormLink(
    @graphql.Args() args: CreateLeadFormLinkArgs
  ): Promise<LeadFormLink> {
    return await this.service.createLeadFormLink({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LeadFormLink)
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "update",
    possession: "any",
  })
  async updateLeadFormLink(
    @graphql.Args() args: UpdateLeadFormLinkArgs
  ): Promise<LeadFormLink | null> {
    try {
      return await this.service.updateLeadFormLink({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LeadFormLink)
  @nestAccessControl.UseRoles({
    resource: "LeadFormLink",
    action: "delete",
    possession: "any",
  })
  async deleteLeadFormLink(
    @graphql.Args() args: DeleteLeadFormLinkArgs
  ): Promise<LeadFormLink | null> {
    try {
      return await this.service.deleteLeadFormLink(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
