import { SortOrder } from "../../util/SortOrder";

export type FormSubmissionOrderByInput = {
  createdAt?: SortOrder;
  formId?: SortOrder;
  formTitle?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  practiceId?: SortOrder;
  receivedAt?: SortOrder;
  requestSentId?: SortOrder;
  requestedBy?: SortOrder;
  seen?: SortOrder;
  submissionId?: SortOrder;
  updatedAt?: SortOrder;
};
