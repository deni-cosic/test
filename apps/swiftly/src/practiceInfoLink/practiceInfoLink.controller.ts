import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PracticeInfoLinkService } from "./practiceInfoLink.service";
import { PracticeInfoLinkControllerBase } from "./base/practiceInfoLink.controller.base";

@swagger.ApiTags("practiceInfoLinks")
@common.Controller("practiceInfoLinks")
export class PracticeInfoLinkController extends PracticeInfoLinkControllerBase {
  constructor(protected readonly service: PracticeInfoLinkService) {
    super(service);
  }
}
