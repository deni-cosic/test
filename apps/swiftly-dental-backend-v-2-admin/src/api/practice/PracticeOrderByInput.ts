import { SortOrder } from "../../util/SortOrder";

export type PracticeOrderByInput = {
  addressLine1?: SortOrder;
  addressLine2?: SortOrder;
  addressLine3?: SortOrder;
  createdAt?: SortOrder;
  featurePermissionId?: SortOrder;
  googlePlaceId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  nhsReviewUrl?: SortOrder;
  odsCode?: SortOrder;
  phoneNumber?: SortOrder;
  postcode?: SortOrder;
  remindAfter?: SortOrder;
  remindedAt?: SortOrder;
  remindEvery?: SortOrder;
  sector?: SortOrder;
  senderId?: SortOrder;
  stripeConnectedAccountId?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
