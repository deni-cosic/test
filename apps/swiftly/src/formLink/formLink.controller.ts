import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormLinkService } from "./formLink.service";
import { FormLinkControllerBase } from "./base/formLink.controller.base";

@swagger.ApiTags("formLinks")
@common.Controller("formLinks")
export class FormLinkController extends FormLinkControllerBase {
  constructor(protected readonly service: FormLinkService) {
    super(service);
  }
}
