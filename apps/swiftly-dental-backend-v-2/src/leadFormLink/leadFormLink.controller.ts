import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LeadFormLinkService } from "./leadFormLink.service";
import { LeadFormLinkControllerBase } from "./base/leadFormLink.controller.base";

@swagger.ApiTags("lead-form-links")
@common.Controller("lead-form-links")
export class LeadFormLinkController extends LeadFormLinkControllerBase {
  constructor(
    protected readonly service: LeadFormLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
