import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionPlansStripeProductListRelationFilter } from "../subscriptionPlansStripeProduct/SubscriptionPlansStripeProductListRelationFilter";

export type SubscriptionPlanWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  practice?: StringFilter;
  stripeProducts?: SubscriptionPlansStripeProductListRelationFilter;
  updatedAt?: DateTimeFilter;
};
