import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HelpLinkService } from "./helpLink.service";
import { HelpLinkControllerBase } from "./base/helpLink.controller.base";

@swagger.ApiTags("helpLinks")
@common.Controller("helpLinks")
export class HelpLinkController extends HelpLinkControllerBase {
  constructor(
    protected readonly service: HelpLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
