import { Injectable } from "@nestjs/common";
import { MessageProvider } from "../models/MessageProvider.interface";
import { ProviderMessagePayload } from "../models/ProviderMessagePayload";
import { PubsubMessage } from "@google-cloud/pubsub/build/src/publisher";
import { ProviderMessageResponse } from "../models/MessageProviderResponse.interface";

@Injectable()
export class SinchProvider implements MessageProvider {
  async sendMessage(
    message: ProviderMessagePayload
  ): Promise<ProviderMessageResponse> {
    throw new Error("sample error");
  }
}
