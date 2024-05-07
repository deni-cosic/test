import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubscriptionPlansStripeProductResolverBase } from "./base/subscriptionPlansStripeProduct.resolver.base";
import { SubscriptionPlansStripeProduct } from "./base/SubscriptionPlansStripeProduct";
import { SubscriptionPlansStripeProductService } from "./subscriptionPlansStripeProduct.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubscriptionPlansStripeProduct)
export class SubscriptionPlansStripeProductResolver extends SubscriptionPlansStripeProductResolverBase {
  constructor(
    protected readonly service: SubscriptionPlansStripeProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
