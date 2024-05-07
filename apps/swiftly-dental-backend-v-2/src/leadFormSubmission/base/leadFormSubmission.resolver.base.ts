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
import { LeadFormSubmission } from "./LeadFormSubmission";
import { LeadFormSubmissionCountArgs } from "./LeadFormSubmissionCountArgs";
import { LeadFormSubmissionFindManyArgs } from "./LeadFormSubmissionFindManyArgs";
import { LeadFormSubmissionFindUniqueArgs } from "./LeadFormSubmissionFindUniqueArgs";
import { CreateLeadFormSubmissionArgs } from "./CreateLeadFormSubmissionArgs";
import { UpdateLeadFormSubmissionArgs } from "./UpdateLeadFormSubmissionArgs";
import { DeleteLeadFormSubmissionArgs } from "./DeleteLeadFormSubmissionArgs";
import { Practice } from "../../practice/base/Practice";
import { LeadFormSubmissionService } from "../leadFormSubmission.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeadFormSubmission)
export class LeadFormSubmissionResolverBase {
  constructor(
    protected readonly service: LeadFormSubmissionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LeadFormSubmission",
    action: "read",
    possession: "any",
  })
  async _leadFormSubmissionsMeta(
    @graphql.Args() args: LeadFormSubmissionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LeadFormSubmission])
  @nestAccessControl.UseRoles({
    resource: "LeadFormSubmission",
    action: "read",
    possession: "any",
  })
  async leadFormSubmissions(
    @graphql.Args() args: LeadFormSubmissionFindManyArgs
  ): Promise<LeadFormSubmission[]> {
    return this.service.leadFormSubmissions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LeadFormSubmission, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LeadFormSubmission",
    action: "read",
    possession: "own",
  })
  async leadFormSubmission(
    @graphql.Args() args: LeadFormSubmissionFindUniqueArgs
  ): Promise<LeadFormSubmission | null> {
    const result = await this.service.leadFormSubmission(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LeadFormSubmission)
  @nestAccessControl.UseRoles({
    resource: "LeadFormSubmission",
    action: "create",
    possession: "any",
  })
  async createLeadFormSubmission(
    @graphql.Args() args: CreateLeadFormSubmissionArgs
  ): Promise<LeadFormSubmission> {
    return await this.service.createLeadFormSubmission({
      ...args,
      data: {
        ...args.data,

        pracitice: {
          connect: args.data.pracitice,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LeadFormSubmission)
  @nestAccessControl.UseRoles({
    resource: "LeadFormSubmission",
    action: "update",
    possession: "any",
  })
  async updateLeadFormSubmission(
    @graphql.Args() args: UpdateLeadFormSubmissionArgs
  ): Promise<LeadFormSubmission | null> {
    try {
      return await this.service.updateLeadFormSubmission({
        ...args,
        data: {
          ...args.data,

          pracitice: {
            connect: args.data.pracitice,
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

  @graphql.Mutation(() => LeadFormSubmission)
  @nestAccessControl.UseRoles({
    resource: "LeadFormSubmission",
    action: "delete",
    possession: "any",
  })
  async deleteLeadFormSubmission(
    @graphql.Args() args: DeleteLeadFormSubmissionArgs
  ): Promise<LeadFormSubmission | null> {
    try {
      return await this.service.deleteLeadFormSubmission(args);
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
    name: "pracitice",
  })
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "read",
    possession: "any",
  })
  async getPracitice(
    @graphql.Parent() parent: LeadFormSubmission
  ): Promise<Practice | null> {
    const result = await this.service.getPracitice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
