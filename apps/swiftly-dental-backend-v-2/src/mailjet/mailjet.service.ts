import { Inject, Injectable } from "@nestjs/common";
import { Client, SendEmailV3_1, LibraryResponse } from "node-mailjet";
import { MAILJET_CONFIG } from "./mailjet.constants";

import { MailjetConfig } from "./MailjetConfig";

@Injectable()
export class MailjetService {
  mailJet: Client;

  constructor(
    @Inject(MAILJET_CONFIG) private readonly mailjetConfig: MailjetConfig
  ) {
    const { publicKey, privateKey } = this.mailjetConfig;

    console.log({ apiKey: publicKey, apiSecret: privateKey });
    this.mailJet = new Client({
      apiKey: publicKey,
      apiSecret: privateKey,
    });
  }

  sendEmail(
    data: SendEmailV3_1.Body
  ): Promise<LibraryResponse<SendEmailV3_1.Response>> {
    return this.mailJet.post("send", { version: "v3.1" }).request(data);
  }
}
