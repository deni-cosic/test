import { SortOrder } from "../../util/SortOrder";

export type WorkflowTemplateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  practiceId?: SortOrder;
  sector?: SortOrder;
  updatedAt?: SortOrder;
};
