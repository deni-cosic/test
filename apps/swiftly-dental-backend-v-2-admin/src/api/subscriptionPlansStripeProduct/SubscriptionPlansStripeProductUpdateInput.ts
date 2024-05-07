import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type SubscriptionPlansStripeProductUpdateInput = {
  name?: string;
  priceAmount?: string;
  priceId?: string;
  quantity?: number;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput;
};
