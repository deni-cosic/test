import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";

export type SubscriptionPlansStripeProduct = {
  id: string;
  name: string;
  priceAmount: string;
  priceId: string;
  quantity: number;
  subscriptionPlan?: SubscriptionPlan;
};
