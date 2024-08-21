import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowTemplateModuleBase } from "./base/workflowTemplate.module.base";
import { WorkflowTemplateService } from "./workflowTemplate.service";
import { WorkflowTemplateController } from "./workflowTemplate.controller";

@Module({
  imports: [WorkflowTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkflowTemplateController],
  providers: [WorkflowTemplateService],
  exports: [WorkflowTemplateService],
})
export class WorkflowTemplateModule {}
