import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkflowTemplateService } from "./workflowTemplate.service";
import { WorkflowTemplateControllerBase } from "./base/workflowTemplate.controller.base";

@swagger.ApiTags("workflowTemplates")
@common.Controller("workflowTemplates")
export class WorkflowTemplateController extends WorkflowTemplateControllerBase {
  constructor(protected readonly service: WorkflowTemplateService) {
    super(service);
  }
}
