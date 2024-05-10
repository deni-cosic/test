import { Inject, Injectable } from "@nestjs/common";
import { ConfigService, ConfigType } from "@nestjs/config";
import { OnEvent } from "@nestjs/event-emitter";
import { SendEmailV3_1, LibraryResponse } from "node-mailjet";
import { MailjetService } from "../mailjet";
import { FORGOT_PASSWORD_EMAIL } from "./events/constants";
import { ForgotPasswordEmailEvent } from "./events/ForgotPasswordEmail.event";
import {
  CLIENT_URL,
  EMAIL_SENDER,
  FORGOT_PASSWORD_TEMPLATE_ID,
} from "./constants";

@Injectable()
export class MailerService {
  constructor(
    protected readonly configService: ConfigService,
    private mailjetService: MailjetService
  ) {}

  @OnEvent(FORGOT_PASSWORD_EMAIL, { async: true })
  sendForgotPasswordEmail({
    email,
    token,
  }: ForgotPasswordEmailEvent): Promise<
    LibraryResponse<SendEmailV3_1.Response>
  > {
    const link = `${this.configService.get(
      CLIENT_URL
    )}/reset-password?code=${token}`;

    return this.mailjetService.sendEmail({
      Messages: [
        {
          From: {
            Email: this.configService.get(EMAIL_SENDER)!,
          },
          To: [
            {
              Email: email,
            },
          ],
          TemplateID: Number(
            this.configService.get(FORGOT_PASSWORD_TEMPLATE_ID)
          ),
          TemplateLanguage: true,
          Subject: "Forgot password?",
          Variables: {
            link,
          },
        },
      ],
    });
  }
}
