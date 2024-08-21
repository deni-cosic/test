import { Injectable, Inject, OnModuleInit } from "@nestjs/common";
import { MessageProvider } from "./models/MessageProvider.interface";
import { PubSubService } from "src/pubsub/pubsub.service";
import { ProviderMessagePayload } from "./models/ProviderMessagePayload";
import { ProviderMessageResponse } from "./models/MessageProviderResponse.interface";
import { MessagesBaseService } from "./base/message.service";
import { Practice, Patient, Message } from "@prisma/client";
import { MessageLogService } from "./base/messageLog.service";

@Injectable()
export class MessageSenderService {
  constructor(
    private readonly pubSubService: PubSubService,
    @Inject("MainMessageProvider")
    private readonly mainMessageProvider: MessageProvider,
    @Inject("DeadLetterMessageProvider")
    private readonly deadLetterMessageProvider: MessageProvider,
    private readonly messageService: MessagesBaseService,
    private readonly messageLogService: MessageLogService
  ) {}

  async handleMessageSuccess(
    message: ProviderMessagePayload,
    providerResponse: ProviderMessageResponse
  ) {
    const updatedMessage = (await this.messageService.update({
      where: {
        id: message.id,
      },
      data: {
        provider: providerResponse.provider,
        providerId: providerResponse.id,
        sentOn: new Date(),
      },
      select: {
        patient: true,
        practice: true,
        content: true,
        sentOn: true,
        id: true,
      },
    })) as Message & { practice: Practice; patient: Patient };

    await this.messageLogService.create({
      data: {
        mobileNumber: updatedMessage.patient.mobileNumber,
        content: updatedMessage.content,
        senderId: updatedMessage.practice.senderId,
        sentOn: updatedMessage.sentOn,
        messageId: updatedMessage.id,
      },
    });
  }

  async processMessage(message: ProviderMessagePayload): Promise<void> {
    // Set up models and modify data
    const res = await this.mainMessageProvider.sendMessage(message);
    return this.handleMessageSuccess(message, res);
  }

  async processDeadLetterMessage(
    message: ProviderMessagePayload
  ): Promise<void> {
    // Handle dead letter messages
    const res = await this.deadLetterMessageProvider.sendMessage(message);
    return this.handleMessageSuccess(message, res);
  }
}
