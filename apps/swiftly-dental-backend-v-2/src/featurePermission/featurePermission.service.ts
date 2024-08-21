import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeaturePermissionServiceBase } from "./base/featurePermission.service.base";

@Injectable()
export class FeaturePermissionService extends FeaturePermissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
