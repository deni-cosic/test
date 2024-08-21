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
import { WorkflowService } from "../workflow.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WorkflowCreateInput } from "./WorkflowCreateInput";
import { Workflow } from "./Workflow";
import { WorkflowFindManyArgs } from "./WorkflowFindManyArgs";
import { WorkflowWhereUniqueInput } from "./WorkflowWhereUniqueInput";
import { WorkflowUpdateInput } from "./WorkflowUpdateInput";
import { WorkflowStepFindManyArgs } from "../../workflowStep/base/WorkflowStepFindManyArgs";
import { WorkflowStep } from "../../workflowStep/base/WorkflowStep";
import { WorkflowStepWhereUniqueInput } from "../../workflowStep/base/WorkflowStepWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WorkflowControllerBase {
  constructor(
    protected readonly service: WorkflowService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Workflow })
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WorkflowCreateInput,
  })
  async createWorkflow(
    @common.Body() data: WorkflowCreateInput
  ): Promise<Workflow> {
    return await this.service.createWorkflow({
      data: {
        ...data,

        patient: {
          connect: data.patient,
        },
      },
      select: {
        anchorDate: true,
        createdAt: true,
        id: true,
        name: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Workflow] })
  @ApiNestedQuery(WorkflowFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workflows(@common.Req() request: Request): Promise<Workflow[]> {
    const args = plainToClass(WorkflowFindManyArgs, request.query);
    return this.service.workflows({
      ...args,
      select: {
        anchorDate: true,
        createdAt: true,
        id: true,
        name: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Workflow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async workflow(
    @common.Param() params: WorkflowWhereUniqueInput
  ): Promise<Workflow | null> {
    const result = await this.service.workflow({
      where: params,
      select: {
        anchorDate: true,
        createdAt: true,
        id: true,
        name: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Workflow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: WorkflowUpdateInput,
  })
  async updateWorkflow(
    @common.Param() params: WorkflowWhereUniqueInput,
    @common.Body() data: WorkflowUpdateInput
  ): Promise<Workflow | null> {
    try {
      return await this.service.updateWorkflow({
        where: params,
        data: {
          ...data,

          patient: {
            connect: data.patient,
          },
        },
        select: {
          anchorDate: true,
          createdAt: true,
          id: true,
          name: true,

          patient: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Workflow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteWorkflow(
    @common.Param() params: WorkflowWhereUniqueInput
  ): Promise<Workflow | null> {
    try {
      return await this.service.deleteWorkflow({
        where: params,
        select: {
          anchorDate: true,
          createdAt: true,
          id: true,
          name: true,

          patient: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/steps")
  @ApiNestedQuery(WorkflowStepFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WorkflowStep",
    action: "read",
    possession: "any",
  })
  async findSteps(
    @common.Req() request: Request,
    @common.Param() params: WorkflowWhereUniqueInput
  ): Promise<WorkflowStep[]> {
    const query = plainToClass(WorkflowStepFindManyArgs, request.query);
    const results = await this.service.findSteps(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/steps")
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "update",
    possession: "any",
  })
  async connectSteps(
    @common.Param() params: WorkflowWhereUniqueInput,
    @common.Body() body: WorkflowStepWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      steps: {
        connect: body,
      },
    };
    await this.service.updateWorkflow({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/steps")
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "update",
    possession: "any",
  })
  async updateSteps(
    @common.Param() params: WorkflowWhereUniqueInput,
    @common.Body() body: WorkflowStepWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      steps: {
        set: body,
      },
    };
    await this.service.updateWorkflow({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/steps")
  @nestAccessControl.UseRoles({
    resource: "Workflow",
    action: "update",
    possession: "any",
  })
  async disconnectSteps(
    @common.Param() params: WorkflowWhereUniqueInput,
    @common.Body() body: WorkflowStepWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      steps: {
        disconnect: body,
      },
    };
    await this.service.updateWorkflow({
      where: params,
      data,
      select: { id: true },
    });
  }
}
