import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type MessageLogUpdateInput = {
  content?: string;
  message?: MessageWhereUniqueInput;
  mobileNumber?: string;
  senderId?: string | null;
  sentOn?: Date | null;
};
