import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PracticeInfoLinkResolverBase } from "./base/practiceInfoLink.resolver.base";
import { PracticeInfoLink } from "./base/PracticeInfoLink";
import { PracticeInfoLinkService } from "./practiceInfoLink.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PracticeInfoLink)
export class PracticeInfoLinkResolver extends PracticeInfoLinkResolverBase {
  constructor(
    protected readonly service: PracticeInfoLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
