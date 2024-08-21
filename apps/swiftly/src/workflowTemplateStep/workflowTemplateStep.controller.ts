import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkflowTemplateStepService } from "./workflowTemplateStep.service";
import { WorkflowTemplateStepControllerBase } from "./base/workflowTemplateStep.controller.base";

@swagger.ApiTags("workflowTemplateSteps")
@common.Controller("workflowTemplateSteps")
export class WorkflowTemplateStepController extends WorkflowTemplateStepControllerBase {
  constructor(protected readonly service: WorkflowTemplateStepService) {
    super(service);
  }
}
