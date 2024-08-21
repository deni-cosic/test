import { Module } from "@nestjs/common";
import { WorkflowTemplateStepModuleBase } from "./base/workflowTemplateStep.module.base";
import { WorkflowTemplateStepService } from "./workflowTemplateStep.service";
import { WorkflowTemplateStepController } from "./workflowTemplateStep.controller";

@Module({
  imports: [WorkflowTemplateStepModuleBase],
  controllers: [WorkflowTemplateStepController],
  providers: [WorkflowTemplateStepService],
  exports: [WorkflowTemplateStepService],
})
export class WorkflowTemplateStepModule {}
