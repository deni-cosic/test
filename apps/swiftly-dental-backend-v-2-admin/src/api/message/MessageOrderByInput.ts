import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  messageType?: SortOrder;
  patientId?: SortOrder;
  practiceId?: SortOrder;
  provider?: SortOrder;
  providerId?: SortOrder;
  queueItemId?: SortOrder;
  sentById?: SortOrder;
  sentOn?: SortOrder;
  smsCount?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
