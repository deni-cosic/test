import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { MessageLogListRelationFilter } from "../messageLog/MessageLogListRelationFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type MessageWhereInput = {
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  messageLog?: MessageLogListRelationFilter;
  messageType?: "Instant" | "Delayed";
  patient?: PatientWhereUniqueInput;
  practice?: PracticeWhereUniqueInput;
  provider?: StringNullableFilter;
  providerId?: StringNullableFilter;
  queueItemId?: StringNullableFilter;
  sentById?: StringNullableFilter;
  sentOn?: DateTimeNullableFilter;
  smsCount?: IntFilter;
  status?: "Pending" | "Delivered" | "Failed";
  updatedAt?: DateTimeFilter;
};
