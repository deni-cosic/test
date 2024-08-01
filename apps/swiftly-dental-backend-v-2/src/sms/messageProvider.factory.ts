import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { getMessageProvider } from "./getMessageProvider.util";
import { MessagesBaseService } from "./base/message.service";

export const MainMessageProviderFactory: Provider = {
  provide: "MainMessageProvider",
  useFactory: (
    configService: ConfigService,
    messageService: MessagesBaseService
  ) =>
    getMessageProvider(configService, messageService, "MAIN_MESSAGE_PROVIDER"),
  inject: [ConfigService, MessagesBaseService],
};

export const DeadLetterMessageProviderFactory: Provider = {
  provide: "DeadLetterMessageProvider",
  useFactory: (
    configService: ConfigService,
    messageService: MessagesBaseService
  ) =>
    getMessageProvider(
      configService,
      messageService,
      "DEAD_LETTER_MESSAGE_PROVIDER"
    ),
  inject: [ConfigService, MessagesBaseService],
};
