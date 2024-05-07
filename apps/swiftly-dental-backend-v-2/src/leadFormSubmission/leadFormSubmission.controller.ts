import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LeadFormSubmissionService } from "./leadFormSubmission.service";
import { LeadFormSubmissionControllerBase } from "./base/leadFormSubmission.controller.base";

@swagger.ApiTags("leadFormSubmissions")
@common.Controller("leadFormSubmissions")
export class LeadFormSubmissionController extends LeadFormSubmissionControllerBase {
  constructor(
    protected readonly service: LeadFormSubmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
