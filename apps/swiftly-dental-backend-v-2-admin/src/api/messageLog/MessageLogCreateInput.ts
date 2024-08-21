import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type MessageLogCreateInput = {
  content: string;
  message: MessageWhereUniqueInput;
  mobileNumber: string;
  senderId?: string | null;
  sentOn?: Date | null;
};
