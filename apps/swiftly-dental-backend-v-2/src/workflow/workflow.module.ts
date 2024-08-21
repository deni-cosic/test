import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowModuleBase } from "./base/workflow.module.base";
import { WorkflowService } from "./workflow.service";
import { WorkflowController } from "./workflow.controller";
import { WorkflowResolver } from "./workflow.resolver";

@Module({
  imports: [WorkflowModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkflowController],
  providers: [WorkflowService, WorkflowResolver],
  exports: [WorkflowService],
})
export class WorkflowModule {}
