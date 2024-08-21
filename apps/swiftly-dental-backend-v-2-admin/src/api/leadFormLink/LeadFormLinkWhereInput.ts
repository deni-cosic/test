import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type LeadFormLinkWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  practice?: PracticeWhereUniqueInput;
  sector?: "Dental" | "GP";
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
