import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubscriptionPlansStripeProductModuleBase } from "./base/subscriptionPlansStripeProduct.module.base";
import { SubscriptionPlansStripeProductService } from "./subscriptionPlansStripeProduct.service";
import { SubscriptionPlansStripeProductController } from "./subscriptionPlansStripeProduct.controller";
import { SubscriptionPlansStripeProductResolver } from "./subscriptionPlansStripeProduct.resolver";

@Module({
  imports: [
    SubscriptionPlansStripeProductModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [SubscriptionPlansStripeProductController],
  providers: [
    SubscriptionPlansStripeProductService,
    SubscriptionPlansStripeProductResolver,
  ],
  exports: [SubscriptionPlansStripeProductService],
})
export class SubscriptionPlansStripeProductModule {}
