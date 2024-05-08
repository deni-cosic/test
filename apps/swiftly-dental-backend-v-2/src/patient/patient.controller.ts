import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatientService } from "./patient.service";
import { PatientControllerBase } from "./base/patient.controller.base";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { PatientFindManyArgs } from "./base/PatientFindManyArgs";
import * as errors from "../errors";
import { plainToClass } from "class-transformer";
import { Request } from "express";

@swagger.ApiTags("patients")
@common.Controller("patients")
export class PatientController extends PatientControllerBase {
  constructor(
    protected readonly service: PatientService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.Get("count")
  @swagger.ApiOkResponse({ type: [Number] })
  @ApiNestedQuery(PatientFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async patientsCount(@common.Req() request: Request): Promise<number> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.count({
      ...args,
    });
  }
}
