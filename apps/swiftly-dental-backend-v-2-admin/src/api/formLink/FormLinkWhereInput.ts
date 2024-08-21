import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type FormLinkWhereInput = {
  createdAt?: DateTimeFilter;
  displayName?: StringFilter;
  enabled?: BooleanFilter;
  id?: StringFilter;
  message?: StringFilter;
  practice?: PracticeWhereUniqueInput;
  sector?: "Dental" | "GP";
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
