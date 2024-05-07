import { SubscriptionPlansStripeProductUpdateManyWithoutSubscriptionPlansInput } from "./SubscriptionPlansStripeProductUpdateManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanUpdateInput = {
  name?: string;
  practice?: string;
  stripeProducts?: SubscriptionPlansStripeProductUpdateManyWithoutSubscriptionPlansInput;
};
