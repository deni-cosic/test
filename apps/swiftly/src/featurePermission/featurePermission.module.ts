import { Module } from "@nestjs/common";
import { FeaturePermissionModuleBase } from "./base/featurePermission.module.base";
import { FeaturePermissionService } from "./featurePermission.service";
import { FeaturePermissionController } from "./featurePermission.controller";

@Module({
  imports: [FeaturePermissionModuleBase],
  controllers: [FeaturePermissionController],
  providers: [FeaturePermissionService],
  exports: [FeaturePermissionService],
})
export class FeaturePermissionModule {}
