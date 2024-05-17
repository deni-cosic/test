import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkflowStepService } from "./workflowStep.service";
import { WorkflowStepControllerBase } from "./base/workflowStep.controller.base";

@swagger.ApiTags("workflow-steps")
@common.Controller("workflow-steps")
export class WorkflowStepController extends WorkflowStepControllerBase {
  constructor(
    protected readonly service: WorkflowStepService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
