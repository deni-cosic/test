import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubscriptionPlansStripeProductService } from "./subscriptionPlansStripeProduct.service";
import { SubscriptionPlansStripeProductControllerBase } from "./base/subscriptionPlansStripeProduct.controller.base";

@swagger.ApiTags("subscriptionPlansStripeProducts")
@common.Controller("subscriptionPlansStripeProducts")
export class SubscriptionPlansStripeProductController extends SubscriptionPlansStripeProductControllerBase {
  constructor(
    protected readonly service: SubscriptionPlansStripeProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
