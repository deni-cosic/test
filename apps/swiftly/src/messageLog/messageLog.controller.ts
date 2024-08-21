import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MessageLogService } from "./messageLog.service";
import { MessageLogControllerBase } from "./base/messageLog.controller.base";

@swagger.ApiTags("messageLogs")
@common.Controller("messageLogs")
export class MessageLogController extends MessageLogControllerBase {
  constructor(protected readonly service: MessageLogService) {
    super(service);
  }
}
