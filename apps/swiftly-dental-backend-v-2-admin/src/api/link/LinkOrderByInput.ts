import { SortOrder } from "../../util/SortOrder";

export type LinkOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  displayName?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  sector?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
