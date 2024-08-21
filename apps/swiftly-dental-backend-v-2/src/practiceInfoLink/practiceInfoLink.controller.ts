import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PracticeInfoLinkService } from "./practiceInfoLink.service";
import { PracticeInfoLinkControllerBase } from "./base/practiceInfoLink.controller.base";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { PracticeInfoLink } from "./base/PracticeInfoLink";
import { PracticeInfoLinkFindManyArgs } from "./base/PracticeInfoLinkFindManyArgs";
import * as errors from "../errors";
import { Request } from "express";
import { PracticeWhereUniqueInput } from "src/practice/base/PracticeWhereUniqueInput";

@swagger.ApiTags("practice-info-links")
@common.Controller("practice-info-links")
export class PracticeInfoLinkController extends PracticeInfoLinkControllerBase {
  constructor(
    protected readonly service: PracticeInfoLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.Get("/categories")
  @swagger.ApiOkResponse({ type: [PracticeInfoLink] })
  @ApiNestedQuery(PracticeWhereUniqueInput)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async practiceInfoLinkCategories(
    @common.Req() request: Request
  ): Promise<string[]> {
    const args = plainToClass(PracticeWhereUniqueInput, request.query);
    const categories = await this.service.practiceInfoLinks({
      where: {
        practiceId: args.id,
      },
      select: {
        category: true,
      },
    });

    return categories.map(({ category }) => category);
  }

  @common.Get("/count")
  @swagger.ApiOkResponse({ type: [PracticeInfoLink] })
  @ApiNestedQuery(PracticeInfoLinkFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async practiceInfoLinkCount(@common.Req() request: Request): Promise<number> {
    const args = plainToClass(PracticeInfoLinkFindManyArgs, request.query);
    return this.service.count({
      where: args.where,
    });
  }
}
