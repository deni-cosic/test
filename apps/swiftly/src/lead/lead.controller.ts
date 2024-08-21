import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadService } from "./lead.service";
import { LeadControllerBase } from "./base/lead.controller.base";

@swagger.ApiTags("leads")
@common.Controller("leads")
export class LeadController extends LeadControllerBase {
  constructor(protected readonly service: LeadService) {
    super(service);
  }
}
