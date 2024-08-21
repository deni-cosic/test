import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkflowTemplateStepResolverBase } from "./base/workflowTemplateStep.resolver.base";
import { WorkflowTemplateStep } from "./base/WorkflowTemplateStep";
import { WorkflowTemplateStepService } from "./workflowTemplateStep.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkflowTemplateStep)
export class WorkflowTemplateStepResolver extends WorkflowTemplateStepResolverBase {
  constructor(
    protected readonly service: WorkflowTemplateStepService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
