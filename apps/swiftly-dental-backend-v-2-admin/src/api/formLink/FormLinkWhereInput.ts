import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type FormLinkWhereInput = {
  createdAt?: DateTimeFilter;
  displayName?: StringFilter;
  enabled?: BooleanFilter;
  id?: StringFilter;
  message?: StringFilter;
  sector?: "Dental" | "GP";
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
