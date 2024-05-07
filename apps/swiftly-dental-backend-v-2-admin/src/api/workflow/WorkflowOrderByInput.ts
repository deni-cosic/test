import { SortOrder } from "../../util/SortOrder";

export type WorkflowOrderByInput = {
  anchorDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
