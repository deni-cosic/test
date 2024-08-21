import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowTemplateStepModuleBase } from "./base/workflowTemplateStep.module.base";
import { WorkflowTemplateStepService } from "./workflowTemplateStep.service";
import { WorkflowTemplateStepController } from "./workflowTemplateStep.controller";

@Module({
  imports: [WorkflowTemplateStepModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkflowTemplateStepController],
  providers: [WorkflowTemplateStepService],
  exports: [WorkflowTemplateStepService],
})
export class WorkflowTemplateStepModule {}
