import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as errors from "../errors";
import { PracticeService } from "./practice.service";
import { PracticeControllerBase } from "./base/practice.controller.base";
import { plainToClass } from "class-transformer";
import { PracticeFindManyArgs } from "./base/PracticeFindManyArgs";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { Request } from "express";

@swagger.ApiTags("practices")
@common.Controller("practices")
export class PracticeController extends PracticeControllerBase {
  constructor(
    protected readonly service: PracticeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.Get("/count")
  @swagger.ApiOkResponse({ type: [Number] })
  @ApiNestedQuery(PracticeFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async practiceCount(@common.Req() request: Request): Promise<Number> {
    const args = plainToClass(PracticeFindManyArgs, request.query);
    return this.service.count({
      ...args,
    });
  }
}
