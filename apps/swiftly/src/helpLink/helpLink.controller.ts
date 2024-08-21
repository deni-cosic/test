import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HelpLinkService } from "./helpLink.service";
import { HelpLinkControllerBase } from "./base/helpLink.controller.base";

@swagger.ApiTags("helpLinks")
@common.Controller("helpLinks")
export class HelpLinkController extends HelpLinkControllerBase {
  constructor(protected readonly service: HelpLinkService) {
    super(service);
  }
}
