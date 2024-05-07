import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkflowTemplateResolverBase } from "./base/workflowTemplate.resolver.base";
import { WorkflowTemplate } from "./base/WorkflowTemplate";
import { WorkflowTemplateService } from "./workflowTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkflowTemplate)
export class WorkflowTemplateResolver extends WorkflowTemplateResolverBase {
  constructor(
    protected readonly service: WorkflowTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
