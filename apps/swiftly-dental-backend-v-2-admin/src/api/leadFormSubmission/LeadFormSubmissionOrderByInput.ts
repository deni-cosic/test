import { SortOrder } from "../../util/SortOrder";

export type LeadFormSubmissionOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  emailConsented?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  interests?: SortOrder;
  lastName?: SortOrder;
  marketingConsented?: SortOrder;
  mobileNumber?: SortOrder;
  onlyInterestsConsented?: SortOrder;
  practiceId?: SortOrder;
  smsConsented?: SortOrder;
  updatedAt?: SortOrder;
};
