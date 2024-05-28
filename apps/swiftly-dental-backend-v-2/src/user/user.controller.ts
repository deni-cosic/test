import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { User } from "./base/User";
import * as errors from "../errors";
import { JwtAuthGuard } from "src/auth/jwt/jwtAuth.guard";
import { UserData } from "src/auth/userData.decorator";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { UserCreateInput } from "./base/UserCreateInput";
import { AuthService } from "src/auth/auth.service";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { UserFindManyArgs } from "./base/UserFindManyArgs";
import { Request } from "express";
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    protected readonly authService: AuthService
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
  async userMe(@UserData() user: any): Promise<any | null> {
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
        practices: true,
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

  @common.Get("count")
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async usersCount(@common.Req() request: Request): Promise<number> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.count({
      ...args,
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
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
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        blocked: true,
        confirmed: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        provider: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserCreateInput,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    const user = await this.service.createUser({
      data: data,
      select: {
        blocked: true,
        confirmed: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        provider: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });

    await this.authService.forgotPassword(user.email!);

    return user;
  }
}
