import { SortOrder } from "../../util/SortOrder";

export type FormSubmissionOrderByInput = {
  createdAt?: SortOrder;
  formId?: SortOrder;
  formTitle?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  practiceId?: SortOrder;
  receivedAt?: SortOrder;
  requestedBy?: SortOrder;
  requestSentId?: SortOrder;
  seen?: SortOrder;
  submissionId?: SortOrder;
  updatedAt?: SortOrder;
};
