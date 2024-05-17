import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeaturePermissionService } from "./featurePermission.service";
import { FeaturePermissionControllerBase } from "./base/featurePermission.controller.base";

@swagger.ApiTags("feature-permissions")
@common.Controller("feature-permissions")
export class FeaturePermissionController extends FeaturePermissionControllerBase {
  constructor(
    protected readonly service: FeaturePermissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
