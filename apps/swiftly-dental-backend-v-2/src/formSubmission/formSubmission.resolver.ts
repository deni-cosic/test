import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FormSubmissionResolverBase } from "./base/formSubmission.resolver.base";
import { FormSubmission } from "./base/FormSubmission";
import { FormSubmissionService } from "./formSubmission.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FormSubmission)
export class FormSubmissionResolver extends FormSubmissionResolverBase {
  constructor(
    protected readonly service: FormSubmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
