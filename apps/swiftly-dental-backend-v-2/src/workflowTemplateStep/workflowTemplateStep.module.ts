import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowTemplateStepModuleBase } from "./base/workflowTemplateStep.module.base";
import { WorkflowTemplateStepService } from "./workflowTemplateStep.service";
import { WorkflowTemplateStepController } from "./workflowTemplateStep.controller";
import { WorkflowTemplateStepResolver } from "./workflowTemplateStep.resolver";

@Module({
  imports: [WorkflowTemplateStepModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkflowTemplateStepController],
  providers: [WorkflowTemplateStepService, WorkflowTemplateStepResolver],
  exports: [WorkflowTemplateStepService],
})
export class WorkflowTemplateStepModule {}
