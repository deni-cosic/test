import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FeaturePermissionResolverBase } from "./base/featurePermission.resolver.base";
import { FeaturePermission } from "./base/FeaturePermission";
import { FeaturePermissionService } from "./featurePermission.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FeaturePermission)
export class FeaturePermissionResolver extends FeaturePermissionResolverBase {
  constructor(
    protected readonly service: FeaturePermissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
