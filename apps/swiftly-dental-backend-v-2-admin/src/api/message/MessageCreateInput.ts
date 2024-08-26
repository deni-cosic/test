import { MessageLogCreateNestedManyWithoutMessagesInput } from "./MessageLogCreateNestedManyWithoutMessagesInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content: string;
  messageLog?: MessageLogCreateNestedManyWithoutMessagesInput;
  messageType: "Instant" | "Delayed";
  patient: PatientWhereUniqueInput;
  practice: PracticeWhereUniqueInput;
  provider?: string | null;
  providerId?: string | null;
  queueItemId?: string | null;
  sentBy?: UserWhereUniqueInput | null;
  sentOn?: Date | null;
  smsCount: number;
  status?: "Pending" | "Delivered" | "Failed" | null;
};
