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
import { PatientLoginRequestArgs } from "./models/PatientLoginRequestArgs";
import { Practice } from "src/practice/base/Practice";
import { Public } from "src/decorators/public.decorator";
import { PatientLoginAuthArgs } from "./models/PatientLoginAuthArgs";

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

  @common.Post("loginRequestCode")
  @Public()
  @swagger.ApiOkResponse({ type: [Number] })
  @ApiNestedQuery(PatientLoginRequestArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async patientLoginRequestCode(
    @common.Req() request: Request
  ): Promise<Practice[]> {
    const args = plainToClass(PatientLoginRequestArgs, request.body);
    return this.service.loginRequestCode(args);
  }

  @common.Post("auth")
  @Public()
  @swagger.ApiOkResponse({ type: [Number] })
  @ApiNestedQuery(PatientLoginAuthArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async auth(@common.Req() request: Request) {
    const args = plainToClass(PatientLoginAuthArgs, request.body);

    return this.service.auth(args);
  }

  @common.Get("me")
  @Public()
  @swagger.ApiOkResponse({ type: [Number] })
  @ApiNestedQuery(PatientLoginAuthArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async me(@common.Headers() headers: any) {
    return this.service.me(headers);
  }
}
