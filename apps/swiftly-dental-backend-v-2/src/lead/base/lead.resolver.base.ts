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
import { Lead } from "./Lead";
import { LeadCountArgs } from "./LeadCountArgs";
import { LeadFindManyArgs } from "./LeadFindManyArgs";
import { LeadFindUniqueArgs } from "./LeadFindUniqueArgs";
import { CreateLeadArgs } from "./CreateLeadArgs";
import { UpdateLeadArgs } from "./UpdateLeadArgs";
import { DeleteLeadArgs } from "./DeleteLeadArgs";
import { Practice } from "../../practice/base/Practice";
import { LeadService } from "../lead.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Lead)
export class LeadResolverBase {
  constructor(
    protected readonly service: LeadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "read",
    possession: "any",
  })
  async _leadsMeta(
    @graphql.Args() args: LeadCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Lead])
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "read",
    possession: "any",
  })
  async leads(@graphql.Args() args: LeadFindManyArgs): Promise<Lead[]> {
    return this.service.leads(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Lead, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "read",
    possession: "own",
  })
  async lead(@graphql.Args() args: LeadFindUniqueArgs): Promise<Lead | null> {
    const result = await this.service.lead(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Lead)
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "create",
    possession: "any",
  })
  async createLead(@graphql.Args() args: CreateLeadArgs): Promise<Lead> {
    return await this.service.createLead({
      ...args,
      data: {
        ...args.data,

        practice: {
          connect: args.data.practice,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Lead)
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "update",
    possession: "any",
  })
  async updateLead(@graphql.Args() args: UpdateLeadArgs): Promise<Lead | null> {
    try {
      return await this.service.updateLead({
        ...args,
        data: {
          ...args.data,

          practice: {
            connect: args.data.practice,
          },
        },
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

  @graphql.Mutation(() => Lead)
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "delete",
    possession: "any",
  })
  async deleteLead(@graphql.Args() args: DeleteLeadArgs): Promise<Lead | null> {
    try {
      return await this.service.deleteLead(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Practice, {
    nullable: true,
    name: "practice",
  })
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "read",
    possession: "any",
  })
  async getPractice(@graphql.Parent() parent: Lead): Promise<Practice | null> {
    const result = await this.service.getPractice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
