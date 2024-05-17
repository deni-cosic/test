import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkflowTemplateStepService } from "./workflowTemplateStep.service";
import { WorkflowTemplateStepControllerBase } from "./base/workflowTemplateStep.controller.base";

@swagger.ApiTags("workflow-template-steps")
@common.Controller("workflow-template-steps")
export class WorkflowTemplateStepController extends WorkflowTemplateStepControllerBase {
  constructor(
    protected readonly service: WorkflowTemplateStepService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
