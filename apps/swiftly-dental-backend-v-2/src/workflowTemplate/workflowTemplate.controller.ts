import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkflowTemplateService } from "./workflowTemplate.service";
import { WorkflowTemplateControllerBase } from "./base/workflowTemplate.controller.base";

@swagger.ApiTags("workflow-templates")
@common.Controller("workflow-templates")
export class WorkflowTemplateController extends WorkflowTemplateControllerBase {
  constructor(
    protected readonly service: WorkflowTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
