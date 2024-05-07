import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type TemplateWhereInput = {
  category?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  displayName?: StringFilter;
  enabled?: BooleanFilter;
  id?: StringFilter;
  sector?: "Dental" | "GP";
  text?: StringFilter;
  updatedAt?: DateTimeFilter;
};
