import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  mobileNumber?: SortOrder;
  nhsNumber?: SortOrder;
  practiceId?: SortOrder;
  stripeCustomerId?: SortOrder;
  updatedAt?: SortOrder;
};
