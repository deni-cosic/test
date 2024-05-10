import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { User } from "./base/User";
import * as errors from "../errors";
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";
import { UserInfo } from "src/auth/UserInfo";
import { JwtAuthGuard } from "src/auth/jwt/jwtAuth.guard";
import { UserData } from "src/auth/userData.decorator";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseGuards(JwtAuthGuard, nestAccessControl.ACGuard)
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/me")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(@UserData() user: any): Promise<any | null> {
    const result = await this.service.user({
      where: { id: user.id },
      select: {
        createdAt: true,
        email: true,
        name: true,
        id: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for logged in user`
      );
    }

    (result as any).role = (result.roles as any)[0];
    return result;
  }
}
