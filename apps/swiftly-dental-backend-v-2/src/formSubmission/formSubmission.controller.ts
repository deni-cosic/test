import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FormSubmissionService } from "./formSubmission.service";
import { FormSubmissionControllerBase } from "./base/formSubmission.controller.base";

@swagger.ApiTags("formSubmissions")
@common.Controller("formSubmissions")
export class FormSubmissionController extends FormSubmissionControllerBase {
  constructor(
    protected readonly service: FormSubmissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
