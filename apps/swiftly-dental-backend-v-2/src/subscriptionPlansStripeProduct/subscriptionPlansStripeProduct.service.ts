import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriptionPlansStripeProductServiceBase } from "./base/subscriptionPlansStripeProduct.service.base";

@Injectable()
export class SubscriptionPlansStripeProductService extends SubscriptionPlansStripeProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
