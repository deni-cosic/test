import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PracticeService } from "./practice.service";
import { PracticeControllerBase } from "./base/practice.controller.base";

@swagger.ApiTags("practices")
@common.Controller("practices")
export class PracticeController extends PracticeControllerBase {
  constructor(protected readonly service: PracticeService) {
    super(service);
  }
}
