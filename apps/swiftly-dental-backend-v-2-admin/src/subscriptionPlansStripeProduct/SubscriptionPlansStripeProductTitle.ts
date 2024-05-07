import { SubscriptionPlansStripeProduct as TSubscriptionPlansStripeProduct } from "../api/subscriptionPlansStripeProduct/SubscriptionPlansStripeProduct";

export const SUBSCRIPTIONPLANSSTRIPEPRODUCT_TITLE_FIELD = "name";

export const SubscriptionPlansStripeProductTitle = (
  record: TSubscriptionPlansStripeProduct
): string => {
  return record.name?.toString() || String(record.id);
};
