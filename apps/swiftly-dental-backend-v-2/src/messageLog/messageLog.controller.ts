import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MessageLogService } from "./messageLog.service";
import { MessageLogControllerBase } from "./base/messageLog.controller.base";

@swagger.ApiTags("messageLogs")
@common.Controller("messageLogs")
export class MessageLogController extends MessageLogControllerBase {
  constructor(
    protected readonly service: MessageLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
