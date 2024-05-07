import { SubscriptionPlanWhereInput } from "./SubscriptionPlanWhereInput";
import { SubscriptionPlanOrderByInput } from "./SubscriptionPlanOrderByInput";

export type SubscriptionPlanFindManyArgs = {
  where?: SubscriptionPlanWhereInput;
  orderBy?: Array<SubscriptionPlanOrderByInput>;
  skip?: number;
  take?: number;
};
