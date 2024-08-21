import { SortOrder } from "../../util/SortOrder";

export type WorkflowTemplateStepOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  timeOffsetInSeconds?: SortOrder;
  updatedAt?: SortOrder;
  workflowTemplateId?: SortOrder;
};
