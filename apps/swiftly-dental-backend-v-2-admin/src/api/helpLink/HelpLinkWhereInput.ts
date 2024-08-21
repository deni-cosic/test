import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type HelpLinkWhereInput = {
  category?: StringFilter;
  createdAt?: DateTimeFilter;
  displayName?: StringFilter;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
