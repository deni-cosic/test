import { Global, Module } from "@nestjs/common";
import { MailerService } from "./mailer.service";
import {
  MailjetModule,
  MAILJET_API_KEY_PRIVATE,
  MAILJET_API_KEY_PUBLIC,
} from "../mailjet";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Global()
@Module({
  imports: [
    MailjetModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const publicKey = configService.get(MAILJET_API_KEY_PUBLIC);
        const privateKey = configService.get(MAILJET_API_KEY_PRIVATE);
        return {
          publicKey,
          privateKey,
        };
      },
    }),
  ],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}
