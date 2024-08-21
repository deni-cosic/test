import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageLogWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  mobileNumber?: StringFilter;
  senderId?: StringNullableFilter;
  sentOn?: DateTimeNullableFilter;
};
