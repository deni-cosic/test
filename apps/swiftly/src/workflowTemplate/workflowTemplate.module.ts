import { Module } from "@nestjs/common";
import { WorkflowTemplateModuleBase } from "./base/workflowTemplate.module.base";
import { WorkflowTemplateService } from "./workflowTemplate.service";
import { WorkflowTemplateController } from "./workflowTemplate.controller";

@Module({
  imports: [WorkflowTemplateModuleBase],
  controllers: [WorkflowTemplateController],
  providers: [WorkflowTemplateService],
  exports: [WorkflowTemplateService],
})
export class WorkflowTemplateModule {}
