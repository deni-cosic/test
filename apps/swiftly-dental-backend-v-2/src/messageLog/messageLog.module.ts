import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MessageLogModuleBase } from "./base/messageLog.module.base";
import { MessageLogService } from "./messageLog.service";
import { MessageLogController } from "./messageLog.controller";
import { MessageLogResolver } from "./messageLog.resolver";

@Module({
  imports: [MessageLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [MessageLogController],
  providers: [MessageLogService, MessageLogResolver],
  exports: [MessageLogService],
})
export class MessageLogModule {}
