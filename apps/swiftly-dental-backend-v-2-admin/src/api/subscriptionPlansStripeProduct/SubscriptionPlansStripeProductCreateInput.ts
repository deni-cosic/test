import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type SubscriptionPlansStripeProductCreateInput = {
  name: string;
  priceAmount: string;
  priceId: string;
  quantity: number;
  subscriptionPlan: SubscriptionPlanWhereUniqueInput;
};
