/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WorkflowStepService } from "../workflowStep.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WorkflowStepCreateInput } from "./WorkflowStepCreateInput";
import { WorkflowStep } from "./WorkflowStep";
import { WorkflowStepFindManyArgs } from "./WorkflowStepFindManyArgs";
import { WorkflowStepWhereUniqueInput } from "./WorkflowStepWhereUniqueInput";
import { WorkflowStepUpdateInput } from "./WorkflowStepUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WorkflowStepControllerBase {
  constructor(
    protected readonly service: WorkflowStepService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WorkflowStep })
  @nestAccessControl.UseRoles({
    resource: "WorkflowStep",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WorkflowStepCreateInput,
  })
  async createWorkflowStep(
    @common.Body() data: WorkflowStepCreateInput
  ): Promise<WorkflowStep> {
    return await this.service.createWorkflowStep({
      data: {
        ...data,

        workflow: {
          connect: data.workflow,
        },
      },
      select: {
        createdAt: true,
        executedOn: true,
        executionDate: true,
        id: true,
        message: true,
        updatedAt: true,

        workflow: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [WorkflowStep] })
  @ApiNestedQuery(WorkflowStepFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WorkflowStep",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workflowSteps(@common.Req() request: Request): Promise<WorkflowStep[]> {
    const args = plainToClass(WorkflowStepFindManyArgs, request.query);
    return this.service.workflowSteps({
      ...args,
      select: {
        createdAt: true,
        executedOn: true,
        executionDate: true,
        id: true,
        message: true,
        updatedAt: true,

        workflow: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WorkflowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkflowStep",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workflowStep(
    @common.Param() params: WorkflowStepWhereUniqueInput
  ): Promise<WorkflowStep | null> {
    const result = await this.service.workflowStep({
      where: params,
      select: {
        createdAt: true,
        executedOn: true,
        executionDate: true,
        id: true,
        message: true,
        updatedAt: true,

        workflow: {
          select: {
            id: true,
          },
        },
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
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WorkflowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkflowStep",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WorkflowStepUpdateInput,
  })
  async updateWorkflowStep(
    @common.Param() params: WorkflowStepWhereUniqueInput,
    @common.Body() data: WorkflowStepUpdateInput
  ): Promise<WorkflowStep | null> {
    try {
      return await this.service.updateWorkflowStep({
        where: params,
        data: {
          ...data,

          workflow: {
            connect: data.workflow,
          },
        },
        select: {
          createdAt: true,
          executedOn: true,
          executionDate: true,
          id: true,
          message: true,
          updatedAt: true,

          workflow: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WorkflowStep })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "WorkflowStep",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWorkflowStep(
    @common.Param() params: WorkflowStepWhereUniqueInput
  ): Promise<WorkflowStep | null> {
    try {
      return await this.service.deleteWorkflowStep({
        where: params,
        select: {
          createdAt: true,
          executedOn: true,
          executionDate: true,
          id: true,
          message: true,
          updatedAt: true,

          workflow: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
