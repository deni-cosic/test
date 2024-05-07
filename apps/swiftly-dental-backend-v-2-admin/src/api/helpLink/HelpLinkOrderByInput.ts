import { SortOrder } from "../../util/SortOrder";

export type HelpLinkOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  displayName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
