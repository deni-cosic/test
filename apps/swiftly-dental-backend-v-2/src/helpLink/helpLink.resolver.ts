import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HelpLinkResolverBase } from "./base/helpLink.resolver.base";
import { HelpLink } from "./base/HelpLink";
import { HelpLinkService } from "./helpLink.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HelpLink)
export class HelpLinkResolver extends HelpLinkResolverBase {
  constructor(
    protected readonly service: HelpLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
