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
import { Practice } from "./Practice";
import { PracticeCountArgs } from "./PracticeCountArgs";
import { PracticeFindManyArgs } from "./PracticeFindManyArgs";
import { PracticeFindUniqueArgs } from "./PracticeFindUniqueArgs";
import { CreatePracticeArgs } from "./CreatePracticeArgs";
import { UpdatePracticeArgs } from "./UpdatePracticeArgs";
import { DeletePracticeArgs } from "./DeletePracticeArgs";
import { FormSubmissionFindManyArgs } from "../../formSubmission/base/FormSubmissionFindManyArgs";
import { FormSubmission } from "../../formSubmission/base/FormSubmission";
import { LeadFindManyArgs } from "../../lead/base/LeadFindManyArgs";
import { Lead } from "../../lead/base/Lead";
import { PatientFindManyArgs } from "../../patient/base/PatientFindManyArgs";
import { Patient } from "../../patient/base/Patient";
import { PracticeInfoLinkFindManyArgs } from "../../practiceInfoLink/base/PracticeInfoLinkFindManyArgs";
import { PracticeInfoLink } from "../../practiceInfoLink/base/PracticeInfoLink";
import { PracticeToUserFindManyArgs } from "../../practiceToUser/base/PracticeToUserFindManyArgs";
import { PracticeToUser } from "../../practiceToUser/base/PracticeToUser";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { WorkflowTemplateFindManyArgs } from "../../workflowTemplate/base/WorkflowTemplateFindManyArgs";
import { WorkflowTemplate } from "../../workflowTemplate/base/WorkflowTemplate";
import { FeaturePermission } from "../../featurePermission/base/FeaturePermission";
import { PracticeService } from "../practice.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Practice)
export class PracticeResolverBase {
  constructor(
    protected readonly service: PracticeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "read",
    possession: "any",
  })
  async _practicesMeta(
    @graphql.Args() args: PracticeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Practice])
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "read",
    possession: "any",
  })
  async practices(
    @graphql.Args() args: PracticeFindManyArgs
  ): Promise<Practice[]> {
    return this.service.practices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Practice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "read",
    possession: "own",
  })
  async practice(
    @graphql.Args() args: PracticeFindUniqueArgs
  ): Promise<Practice | null> {
    const result = await this.service.practice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Practice)
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "create",
    possession: "any",
  })
  async createPractice(
    @graphql.Args() args: CreatePracticeArgs
  ): Promise<Practice> {
    return await this.service.createPractice({
      ...args,
      data: {
        ...args.data,

        featurePermission: args.data.featurePermission
          ? {
              connect: args.data.featurePermission,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Practice)
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async updatePractice(
    @graphql.Args() args: UpdatePracticeArgs
  ): Promise<Practice | null> {
    try {
      return await this.service.updatePractice({
        ...args,
        data: {
          ...args.data,

          featurePermission: args.data.featurePermission
            ? {
                connect: args.data.featurePermission,
              }
            : undefined,
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

  @graphql.Mutation(() => Practice)
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "delete",
    possession: "any",
  })
  async deletePractice(
    @graphql.Args() args: DeletePracticeArgs
  ): Promise<Practice | null> {
    try {
      return await this.service.deletePractice(args);
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
  @graphql.ResolveField(() => [FormSubmission], { name: "formSubmissions" })
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "read",
    possession: "any",
  })
  async findFormSubmissions(
    @graphql.Parent() parent: Practice,
    @graphql.Args() args: FormSubmissionFindManyArgs
  ): Promise<FormSubmission[]> {
    const results = await this.service.findFormSubmissions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Lead], { name: "leads" })
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "read",
    possession: "any",
  })
  async findLeads(
    @graphql.Parent() parent: Practice,
    @graphql.Args() args: LeadFindManyArgs
  ): Promise<Lead[]> {
    const results = await this.service.findLeads(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Patient], { name: "patients" })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async findPatients(
    @graphql.Parent() parent: Practice,
    @graphql.Args() args: PatientFindManyArgs
  ): Promise<Patient[]> {
    const results = await this.service.findPatients(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PracticeInfoLink], { name: "practiceInfoLinks" })
  @nestAccessControl.UseRoles({
    resource: "PracticeInfoLink",
    action: "read",
    possession: "any",
  })
  async findPracticeInfoLinks(
    @graphql.Parent() parent: Practice,
    @graphql.Args() args: PracticeInfoLinkFindManyArgs
  ): Promise<PracticeInfoLink[]> {
    const results = await this.service.findPracticeInfoLinks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PracticeToUser], { name: "practiceToUsers" })
  @nestAccessControl.UseRoles({
    resource: "PracticeToUser",
    action: "read",
    possession: "any",
  })
  async findPracticeToUsers(
    @graphql.Parent() parent: Practice,
    @graphql.Args() args: PracticeToUserFindManyArgs
  ): Promise<PracticeToUser[]> {
    const results = await this.service.findPracticeToUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "users" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @graphql.Parent() parent: Practice,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [WorkflowTemplate], { name: "workflowTemplates" })
  @nestAccessControl.UseRoles({
    resource: "WorkflowTemplate",
    action: "read",
    possession: "any",
  })
  async findWorkflowTemplates(
    @graphql.Parent() parent: Practice,
    @graphql.Args() args: WorkflowTemplateFindManyArgs
  ): Promise<WorkflowTemplate[]> {
    const results = await this.service.findWorkflowTemplates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => FeaturePermission, {
    nullable: true,
    name: "featurePermission",
  })
  @nestAccessControl.UseRoles({
    resource: "FeaturePermission",
    action: "read",
    possession: "any",
  })
  async getFeaturePermission(
    @graphql.Parent() parent: Practice
  ): Promise<FeaturePermission | null> {
    const result = await this.service.getFeaturePermission(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
