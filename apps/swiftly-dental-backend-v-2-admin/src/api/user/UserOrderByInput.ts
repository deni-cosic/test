import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  blocked?: SortOrder;
  confirmed?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  provider?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
