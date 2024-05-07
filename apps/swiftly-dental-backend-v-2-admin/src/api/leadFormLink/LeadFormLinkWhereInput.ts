import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadFormLinkWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  sector?: "Dental" | "GP";
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
