import { SortOrder } from "../../util/SortOrder";

export type WorkflowStepOrderByInput = {
  createdAt?: SortOrder;
  executedOn?: SortOrder;
  executionDate?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
  workflowId?: SortOrder;
};
