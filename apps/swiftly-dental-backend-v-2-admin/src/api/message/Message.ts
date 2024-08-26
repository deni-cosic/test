import { MessageLog } from "../messageLog/MessageLog";
import { Patient } from "../patient/Patient";
import { Practice } from "../practice/Practice";
import { User } from "../user/User";

export type Message = {
  content: string;
  createdAt: Date;
  id: string;
  messageLog?: Array<MessageLog>;
  messageType?: "Instant" | "Delayed";
  patient?: Patient;
  practice?: Practice;
  provider: string | null;
  providerId: string | null;
  queueItemId: string | null;
  sentBy?: User | null;
  sentOn: Date | null;
  smsCount: number;
  status?: "Pending" | "Delivered" | "Failed" | null;
  updatedAt: Date;
};
