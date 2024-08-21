import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type PracticeInfoLinkWhereInput = {
  category?: StringFilter;
  createdAt?: DateTimeFilter;
  displayName?: StringFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  practice?: PracticeWhereUniqueInput;
  updatedAt?: DateTimeFilter;
  url?: StringNullableFilter;
};
