import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type SubscriptionPlansStripeProductWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  priceAmount?: StringFilter;
  priceId?: StringFilter;
  quantity?: IntFilter;
  subscriptionPlan?: SubscriptionPlanWhereUniqueInput;
};
