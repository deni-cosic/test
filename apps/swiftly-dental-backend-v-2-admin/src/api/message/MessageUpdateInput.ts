import { MessageLogUpdateManyWithoutMessagesInput } from "./MessageLogUpdateManyWithoutMessagesInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string;
  messageLog?: MessageLogUpdateManyWithoutMessagesInput;
  messageType?: "Instant" | "Delayed";
  patient?: PatientWhereUniqueInput;
  practice?: PracticeWhereUniqueInput;
  provider?: string | null;
  providerId?: string | null;
  queueItemId?: string | null;
  sentById?: string | null;
  sentOn?: Date | null;
  smsCount?: number;
  status?: "Pending" | "Delivered" | "Failed" | null;
};
