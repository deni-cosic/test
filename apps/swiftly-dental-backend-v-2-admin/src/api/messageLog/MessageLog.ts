import { Message } from "../message/Message";

export type MessageLog = {
  content: string;
  id: string;
  message?: Message;
  mobileNumber: string;
  senderId: string | null;
  sentOn: Date | null;
};
