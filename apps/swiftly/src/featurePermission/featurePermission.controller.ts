import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeaturePermissionService } from "./featurePermission.service";
import { FeaturePermissionControllerBase } from "./base/featurePermission.controller.base";

@swagger.ApiTags("featurePermissions")
@common.Controller("featurePermissions")
export class FeaturePermissionController extends FeaturePermissionControllerBase {
  constructor(protected readonly service: FeaturePermissionService) {
    super(service);
  }
}
