import { ProviderMessageResponse } from "./MessageProviderResponse.interface";
import { ProviderMessagePayload } from "./ProviderMessagePayload";

export interface MessageProvider {
  sendMessage(
    message: ProviderMessagePayload
  ): Promise<ProviderMessageResponse>;
}
