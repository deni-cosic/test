import { ConfigService } from "@nestjs/config";
import { MessageProvider } from "./models/MessageProvider.interface";
import { SinchProvider } from "./providers/sinch.provider";
import { TwilioProvider } from "./providers/twilio.provider";
import { MessagesBaseService } from "./base/message.service";

export function getMessageProvider(
  configService: ConfigService,
  messageService: MessagesBaseService,
  providerTypeEnvVar: string
): MessageProvider {
  const providerType = configService.get<string>(providerTypeEnvVar);
  switch (providerType) {
    case "sinch":
      return new SinchProvider();
    case "twilio":
      return new TwilioProvider(configService);
    default:
      throw new Error(`Unsupported provider type: ${providerType}`);
  }
}
