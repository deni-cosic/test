import { Module } from "@nestjs/common";
import { MessageLogModuleBase } from "./base/messageLog.module.base";
import { MessageLogService } from "./messageLog.service";
import { MessageLogController } from "./messageLog.controller";

@Module({
  imports: [MessageLogModuleBase],
  controllers: [MessageLogController],
  providers: [MessageLogService],
  exports: [MessageLogService],
})
export class MessageLogModule {}
