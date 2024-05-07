import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type LeadFormSubmissionWhereInput = {
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  emailConsented?: BooleanFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  interests?: JsonFilter;
  lastName?: StringFilter;
  marketingConsented?: BooleanFilter;
  mobileNumber?: StringFilter;
  onlyInterestsConsented?: BooleanFilter;
  pracitice?: PracticeWhereUniqueInput;
  smsConsented?: BooleanFilter;
  updatedAt?: DateTimeFilter;
};
