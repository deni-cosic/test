import { SubscriptionPlan as TSubscriptionPlan } from "../api/subscriptionPlan/SubscriptionPlan";

export const SUBSCRIPTIONPLAN_TITLE_FIELD = "name";

export const SubscriptionPlanTitle = (record: TSubscriptionPlan): string => {
  return record.name?.toString() || String(record.id);
};
