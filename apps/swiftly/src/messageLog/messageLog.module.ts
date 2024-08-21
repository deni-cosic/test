import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MessageLogModuleBase } from "./base/messageLog.module.base";
import { MessageLogService } from "./messageLog.service";
import { MessageLogController } from "./messageLog.controller";

@Module({
  imports: [MessageLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [MessageLogController],
  providers: [MessageLogService],
  exports: [MessageLogService],
})
export class MessageLogModule {}
