import { Injectable } from "@nestjs/common";
import { MessageProvider } from "../models/MessageProvider.interface";
import twilio, { Twilio } from "twilio";
import { ConfigService } from "@nestjs/config";
import { ProviderMessagePayload } from "../models/ProviderMessagePayload";
import { ProviderMessageResponse } from "../models/MessageProviderResponse.interface";

const TWILIO_ACCOUNT_SID = "TWILIO_ACCOUNT_SID";
const TWILIO_AUTH_TOKEN = "TWILIO_AUTH_TOKEN";
@Injectable()
export class TwilioProvider implements MessageProvider {
  client: Twilio;
  constructor(private readonly configService: ConfigService) {
    const accountSid = this.configService.get(TWILIO_ACCOUNT_SID);
    const authToken = this.configService.get(TWILIO_AUTH_TOKEN);

    this.client = twilio(accountSid, authToken);
  }
  async sendMessage(
    message: ProviderMessagePayload
  ): Promise<ProviderMessageResponse> {
    const { content, from, to } = message;

    const response = await this.client.messages.create({
      body: content,
      from,
      to,
    });

    return { id: response.sid, provider: "twilio" };
  }
}
