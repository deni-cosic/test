import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import * as errors from "../errors";
import { JwtAuthGuard } from "src/auth/jwt/jwtAuth.guard";
import { UserData } from "src/auth/userData.decorator";
import { MessagesBaseService } from "./base/message.service";
import { SendMessageInput } from "./models/SendMessageInput.interface";
import { count } from "sms-length";
import { PubSubService } from "src/pubsub/pubsub.service";
import { ProviderMessagePayload } from "./models/ProviderMessagePayload";
import { Message, Patient } from "@prisma/client";
import { Practice } from "src/practice/base/Practice";
import { Public } from "src/decorators/public.decorator";
import { MessageSenderService } from "./messageSender.service";

@swagger.ApiTags("messages")
@common.Controller("messages")
export class MessageController {
  constructor(
    private readonly messageService: MessagesBaseService,
    private readonly pubSubService: PubSubService,
    private readonly messageSenderService: MessageSenderService
  ) {}

  @common.UseGuards(JwtAuthGuard, nestAccessControl.ACGuard)
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Post("/enqueue")
  @swagger.ApiOkResponse({ type: Array })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userMe(
    @UserData() user: any,
    @common.Body() sendMessageInput: SendMessageInput
  ): Promise<any | null> {
    const message = (await this.messageService.create({
      data: {
        ...sendMessageInput,
        sentById: user.id,
        smsCount: count(sendMessageInput.content).messages,
        status: "Pending",
      },
      select: {
        id: true,
        patient: true,
        practice: true,
        content: true,
      },
    })) as Message & { practice: Practice; patient: Patient };

    const pubSubPayload = {
      content: message.content,
      from: message.practice.senderId,
      to: message.patient.mobileNumber,
      id: message.id,
    } as ProviderMessagePayload;

    const queueItemId = await this.pubSubService.publishToTopic(
      "message-main-topic--dev",
      pubSubPayload
    );

    return await this.messageService.update({
      where: {
        id: message.id,
      },
      data: {
        queueItemId,
      },
    });
  }

  @common.Post("/send-message")
  @Public()
  async sendMessage(@common.Body() data: ProviderMessagePayload) {
    console.log("\x1B[31m%s\x1B[0m", "message.controller - 84 - data", data);
    return this.messageSenderService.processMessage(data);
  }

  @common.Post("/send-message-dlq")
  @Public()
  async sendMessageDLQ(@common.Body() data: ProviderMessagePayload) {
    console.log("\x1B[31m%s\x1B[0m", "message.controller - 90 - data", data);
    return this.messageSenderService.processDeadLetterMessage(data);
  }
}
