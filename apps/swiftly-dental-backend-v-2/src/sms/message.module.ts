import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import {
  MainMessageProviderFactory,
  DeadLetterMessageProviderFactory,
} from "./messageProvider.factory";
import { MessageSenderService } from "./messageSender.service";
import { PubSubModule } from "src/pubsub/pubusb.module";
import { MessagesBaseService } from "./base/message.service";
import { MessageController } from "./message.controller";
import { MessageLogService } from "./base/messageLog.service";

@Module({
  imports: [ConfigModule, PubSubModule],
  providers: [
    MessagesBaseService,
    MessageLogService,
    MainMessageProviderFactory,
    DeadLetterMessageProviderFactory,
    MessageSenderService,
  ],
  controllers: [MessageController],
  exports: [MessageSenderService],
})
export class MessageModule {}
