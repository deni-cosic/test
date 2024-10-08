import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeaturePermissionModuleBase } from "./base/featurePermission.module.base";
import { FeaturePermissionService } from "./featurePermission.service";
import { FeaturePermissionController } from "./featurePermission.controller";
import { FeaturePermissionResolver } from "./featurePermission.resolver";

@Module({
  imports: [FeaturePermissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [FeaturePermissionController],
  providers: [FeaturePermissionService, FeaturePermissionResolver],
  exports: [FeaturePermissionService],
})
export class FeaturePermissionModule {}
