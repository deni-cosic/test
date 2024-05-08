import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type TemplateWhereInput = {
  createdAt?: DateTimeFilter;
  displayName?: StringFilter;
  enabled?: BooleanFilter;
  id?: StringFilter;
  sector?: "Dental" | "GP";
  text?: StringFilter;
  updatedAt?: DateTimeFilter;
};
