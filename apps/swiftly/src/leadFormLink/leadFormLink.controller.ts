import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadFormLinkService } from "./leadFormLink.service";
import { LeadFormLinkControllerBase } from "./base/leadFormLink.controller.base";

@swagger.ApiTags("leadFormLinks")
@common.Controller("leadFormLinks")
export class LeadFormLinkController extends LeadFormLinkControllerBase {
  constructor(protected readonly service: LeadFormLinkService) {
    super(service);
  }
}
