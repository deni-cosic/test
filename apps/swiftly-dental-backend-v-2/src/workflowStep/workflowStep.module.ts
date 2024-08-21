import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowStepModuleBase } from "./base/workflowStep.module.base";
import { WorkflowStepService } from "./workflowStep.service";
import { WorkflowStepController } from "./workflowStep.controller";
import { WorkflowStepResolver } from "./workflowStep.resolver";

@Module({
  imports: [WorkflowStepModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkflowStepController],
  providers: [WorkflowStepService, WorkflowStepResolver],
  exports: [WorkflowStepService],
})
export class WorkflowStepModule {}
