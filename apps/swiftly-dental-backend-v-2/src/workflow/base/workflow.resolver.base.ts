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
import { Workflow } from "./Workflow";
import { WorkflowCountArgs } from "./WorkflowCountArgs";
import { WorkflowFindManyArgs } from "./WorkflowFindManyArgs";
import { WorkflowFindUniqueArgs } from "./WorkflowFindUniqueArgs";
import { CreateWorkflowArgs } from "./CreateWorkflowArgs";
import { UpdateWorkflowArgs } from "./UpdateWorkflowArgs";
import { DeleteWorkflowArgs } from "./DeleteWorkflowArgs";
import { WorkflowStepFindManyArgs } from "../../workflowStep/base/WorkflowStepFindManyArgs";
import { WorkflowStep } from "../../workflowStep/base/WorkflowStep";
import { Patient } from "../../patient/base/Patient";
import { WorkflowService } from "../workflow.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Workflow)
export class WorkflowResolverBase {
  constructor(
    protected readonly service: WorkflowService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "read",
    possession: "any",
  })
  async _workflowsMeta(
    @graphql.Args() args: WorkflowCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Workflow])
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "read",
    possession: "any",
  })
  async workflows(
    @graphql.Args() args: WorkflowFindManyArgs
  ): Promise<Workflow[]> {
    return this.service.workflows(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Workflow, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "read",
    possession: "own",
  })
  async workflow(
    @graphql.Args() args: WorkflowFindUniqueArgs
  ): Promise<Workflow | null> {
    const result = await this.service.workflow(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Workflow)
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "create",
    possession: "any",
  })
  async createWorkflow(
    @graphql.Args() args: CreateWorkflowArgs
  ): Promise<Workflow> {
    return await this.service.createWorkflow({
      ...args,
      data: {
        ...args.data,

        patient: {
          connect: args.data.patient,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Workflow)
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "update",
    possession: "any",
  })
  async updateWorkflow(
    @graphql.Args() args: UpdateWorkflowArgs
  ): Promise<Workflow | null> {
    try {
      return await this.service.updateWorkflow({
        ...args,
        data: {
          ...args.data,

          patient: {
            connect: args.data.patient,
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

  @graphql.Mutation(() => Workflow)
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "delete",
    possession: "any",
  })
  async deleteWorkflow(
    @graphql.Args() args: DeleteWorkflowArgs
  ): Promise<Workflow | null> {
    try {
      return await this.service.deleteWorkflow(args);
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
  @graphql.ResolveField(() => [WorkflowStep], { name: "workflowSteps" })
  @nestAccessControl.UseRoles({
    resource: "WorkflowStep",
    action: "read",
    possession: "any",
  })
  async findWorkflowSteps(
    @graphql.Parent() parent: Workflow,
    @graphql.Args() args: WorkflowStepFindManyArgs
  ): Promise<WorkflowStep[]> {
    const results = await this.service.findWorkflowSteps(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Patient, {
    nullable: true,
    name: "patient",
  })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async getPatient(
    @graphql.Parent() parent: Workflow
  ): Promise<Patient | null> {
    const result = await this.service.getPatient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
