import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PracticeToUserService } from "./practiceToUser.service";
import { PracticeToUserControllerBase } from "./base/practiceToUser.controller.base";

@swagger.ApiTags("practiceToUsers")
@common.Controller("practiceToUsers")
export class PracticeToUserController extends PracticeToUserControllerBase {
  constructor(
    protected readonly service: PracticeToUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
