import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type LinkWhereInput = {
  category?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  displayName?: StringFilter;
  enabled?: BooleanFilter;
  id?: StringFilter;
  sector?: "Dental" | "GP";
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
