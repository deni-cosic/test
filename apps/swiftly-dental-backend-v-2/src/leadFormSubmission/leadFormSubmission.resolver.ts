import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LeadFormSubmissionResolverBase } from "./base/leadFormSubmission.resolver.base";
import { LeadFormSubmission } from "./base/LeadFormSubmission";
import { LeadFormSubmissionService } from "./leadFormSubmission.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeadFormSubmission)
export class LeadFormSubmissionResolver extends LeadFormSubmissionResolverBase {
  constructor(
    protected readonly service: LeadFormSubmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
