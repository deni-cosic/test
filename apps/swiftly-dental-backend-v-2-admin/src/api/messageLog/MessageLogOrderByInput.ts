import { SortOrder } from "../../util/SortOrder";

export type MessageLogOrderByInput = {
  content?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  mobileNumber?: SortOrder;
  senderId?: SortOrder;
  sentOn?: SortOrder;
};
