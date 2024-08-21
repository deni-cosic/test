import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type LeadWhereInput = {
  contacted?: BooleanFilter;
  convertedClientId?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  dateOfBirth?: DateTimeFilter;
  email?: StringFilter;
  emailConsented?: BooleanNullableFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  interests?: JsonFilter;
  lastName?: StringFilter;
  marketingConsented?: BooleanFilter;
  meetingDate?: DateTimeNullableFilter;
  mobileNumber?: StringFilter;
  onlyInterestsConsented?: BooleanNullableFilter;
  otherFields?: JsonFilter;
  platformSource?: StringFilter;
  practice?: PracticeWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
