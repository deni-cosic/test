import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkflowTemplateService } from "./workflowTemplate.service";
import { WorkflowTemplateControllerBase } from "./base/workflowTemplate.controller.base";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { WorkflowTemplate } from "./base/WorkflowTemplate";
import { WorkflowTemplateFindManyArgs } from "./base/WorkflowTemplateFindManyArgs";
import * as errors from "../errors";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { Request } from "express";

@swagger.ApiTags("workflow-templates")
@common.Controller("workflow-templates")
export class WorkflowTemplateController extends WorkflowTemplateControllerBase {
  constructor(
    protected readonly service: WorkflowTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.Get("count")
  @swagger.ApiOkResponse({ type: [WorkflowTemplate] })
  @ApiNestedQuery(WorkflowTemplateFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async count(@common.Req() request: Request): Promise<Number> {
    const args = plainToClass(WorkflowTemplateFindManyArgs, request.query);

    if ((args.where as any)?.practiceId === "null") {
      (args.where as any).practiceId = { equals: null };
    }

    return this.service.count({
      ...args,
    });
  }
}
