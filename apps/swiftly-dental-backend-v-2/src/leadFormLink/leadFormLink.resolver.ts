import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LeadFormLinkResolverBase } from "./base/leadFormLink.resolver.base";
import { LeadFormLink } from "./base/LeadFormLink";
import { LeadFormLinkService } from "./leadFormLink.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeadFormLink)
export class LeadFormLinkResolver extends LeadFormLinkResolverBase {
  constructor(
    protected readonly service: LeadFormLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
