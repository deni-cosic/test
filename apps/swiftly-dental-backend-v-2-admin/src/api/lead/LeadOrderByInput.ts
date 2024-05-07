import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  contacted?: SortOrder;
  convertedClientId?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  emailConsented?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  interests?: SortOrder;
  lastName?: SortOrder;
  marketingConsented?: SortOrder;
  meetingDate?: SortOrder;
  mobileNumber?: SortOrder;
  onlyInterestsConsented?: SortOrder;
  otherFields?: SortOrder;
  platformSource?: SortOrder;
  practiceId?: SortOrder;
  smsConsented?: SortOrder;
  updatedAt?: SortOrder;
};
