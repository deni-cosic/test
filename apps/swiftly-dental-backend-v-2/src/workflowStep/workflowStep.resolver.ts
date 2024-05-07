import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkflowStepResolverBase } from "./base/workflowStep.resolver.base";
import { WorkflowStep } from "./base/WorkflowStep";
import { WorkflowStepService } from "./workflowStep.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkflowStep)
export class WorkflowStepResolver extends WorkflowStepResolverBase {
  constructor(
    protected readonly service: WorkflowStepService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
