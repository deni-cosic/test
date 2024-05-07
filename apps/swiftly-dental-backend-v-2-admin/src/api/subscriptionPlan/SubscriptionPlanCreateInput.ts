import { SubscriptionPlansStripeProductCreateNestedManyWithoutSubscriptionPlansInput } from "./SubscriptionPlansStripeProductCreateNestedManyWithoutSubscriptionPlansInput";

export type SubscriptionPlanCreateInput = {
  name: string;
  practice: string;
  stripeProducts?: SubscriptionPlansStripeProductCreateNestedManyWithoutSubscriptionPlansInput;
};
