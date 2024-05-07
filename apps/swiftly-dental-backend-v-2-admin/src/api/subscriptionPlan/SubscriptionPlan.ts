import { SubscriptionPlansStripeProduct } from "../subscriptionPlansStripeProduct/SubscriptionPlansStripeProduct";

export type SubscriptionPlan = {
  createdAt: Date;
  id: string;
  name: string;
  practice: string;
  stripeProducts?: Array<SubscriptionPlansStripeProduct>;
  updatedAt: Date;
};
