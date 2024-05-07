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
import { PracticeService } from "../practice.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PracticeCreateInput } from "./PracticeCreateInput";
import { Practice } from "./Practice";
import { PracticeFindManyArgs } from "./PracticeFindManyArgs";
import { PracticeWhereUniqueInput } from "./PracticeWhereUniqueInput";
import { PracticeUpdateInput } from "./PracticeUpdateInput";
import { FormSubmissionFindManyArgs } from "../../formSubmission/base/FormSubmissionFindManyArgs";
import { FormSubmission } from "../../formSubmission/base/FormSubmission";
import { FormSubmissionWhereUniqueInput } from "../../formSubmission/base/FormSubmissionWhereUniqueInput";
import { LeadFormSubmissionFindManyArgs } from "../../leadFormSubmission/base/LeadFormSubmissionFindManyArgs";
import { LeadFormSubmission } from "../../leadFormSubmission/base/LeadFormSubmission";
import { LeadFormSubmissionWhereUniqueInput } from "../../leadFormSubmission/base/LeadFormSubmissionWhereUniqueInput";
import { LeadFindManyArgs } from "../../lead/base/LeadFindManyArgs";
import { Lead } from "../../lead/base/Lead";
import { LeadWhereUniqueInput } from "../../lead/base/LeadWhereUniqueInput";
import { PatientFindManyArgs } from "../../patient/base/PatientFindManyArgs";
import { Patient } from "../../patient/base/Patient";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { PracticeInfoLinkFindManyArgs } from "../../practiceInfoLink/base/PracticeInfoLinkFindManyArgs";
import { PracticeInfoLink } from "../../practiceInfoLink/base/PracticeInfoLink";
import { PracticeInfoLinkWhereUniqueInput } from "../../practiceInfoLink/base/PracticeInfoLinkWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { WorkflowTemplateFindManyArgs } from "../../workflowTemplate/base/WorkflowTemplateFindManyArgs";
import { WorkflowTemplate } from "../../workflowTemplate/base/WorkflowTemplate";
import { WorkflowTemplateWhereUniqueInput } from "../../workflowTemplate/base/WorkflowTemplateWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PracticeControllerBase {
  constructor(
    protected readonly service: PracticeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Practice })
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPractice(
    @common.Body() data: PracticeCreateInput
  ): Promise<Practice> {
    return await this.service.createPractice({
      data: {
        ...data,

        featurePermission: data.featurePermission
          ? {
              connect: data.featurePermission,
            }
          : undefined,
      },
      select: {
        addressLine1: true,
        addressLine2: true,
        addressLine3: true,
        createdAt: true,

        featurePermission: {
          select: {
            id: true,
          },
        },

        googlePlaceId: true,
        id: true,
        name: true,
        nhsReviewUrl: true,
        odsCode: true,
        phoneNumber: true,
        postcode: true,
        remindAfter: true,
        remindedAt: true,
        remindEvery: true,
        sector: true,
        senderId: true,
        stripeConnectedAccountId: true,
        updatedAt: true,
        website: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Practice] })
  @ApiNestedQuery(PracticeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async practices(@common.Req() request: Request): Promise<Practice[]> {
    const args = plainToClass(PracticeFindManyArgs, request.query);
    return this.service.practices({
      ...args,
      select: {
        addressLine1: true,
        addressLine2: true,
        addressLine3: true,
        createdAt: true,

        featurePermission: {
          select: {
            id: true,
          },
        },

        googlePlaceId: true,
        id: true,
        name: true,
        nhsReviewUrl: true,
        odsCode: true,
        phoneNumber: true,
        postcode: true,
        remindAfter: true,
        remindedAt: true,
        remindEvery: true,
        sector: true,
        senderId: true,
        stripeConnectedAccountId: true,
        updatedAt: true,
        website: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Practice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async practice(
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<Practice | null> {
    const result = await this.service.practice({
      where: params,
      select: {
        addressLine1: true,
        addressLine2: true,
        addressLine3: true,
        createdAt: true,

        featurePermission: {
          select: {
            id: true,
          },
        },

        googlePlaceId: true,
        id: true,
        name: true,
        nhsReviewUrl: true,
        odsCode: true,
        phoneNumber: true,
        postcode: true,
        remindAfter: true,
        remindedAt: true,
        remindEvery: true,
        sector: true,
        senderId: true,
        stripeConnectedAccountId: true,
        updatedAt: true,
        website: true,
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
  @swagger.ApiOkResponse({ type: Practice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePractice(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() data: PracticeUpdateInput
  ): Promise<Practice | null> {
    try {
      return await this.service.updatePractice({
        where: params,
        data: {
          ...data,

          featurePermission: data.featurePermission
            ? {
                connect: data.featurePermission,
              }
            : undefined,
        },
        select: {
          addressLine1: true,
          addressLine2: true,
          addressLine3: true,
          createdAt: true,

          featurePermission: {
            select: {
              id: true,
            },
          },

          googlePlaceId: true,
          id: true,
          name: true,
          nhsReviewUrl: true,
          odsCode: true,
          phoneNumber: true,
          postcode: true,
          remindAfter: true,
          remindedAt: true,
          remindEvery: true,
          sector: true,
          senderId: true,
          stripeConnectedAccountId: true,
          updatedAt: true,
          website: true,
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
  @swagger.ApiOkResponse({ type: Practice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePractice(
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<Practice | null> {
    try {
      return await this.service.deletePractice({
        where: params,
        select: {
          addressLine1: true,
          addressLine2: true,
          addressLine3: true,
          createdAt: true,

          featurePermission: {
            select: {
              id: true,
            },
          },

          googlePlaceId: true,
          id: true,
          name: true,
          nhsReviewUrl: true,
          odsCode: true,
          phoneNumber: true,
          postcode: true,
          remindAfter: true,
          remindedAt: true,
          remindEvery: true,
          sector: true,
          senderId: true,
          stripeConnectedAccountId: true,
          updatedAt: true,
          website: true,
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
  @common.Get("/:id/formSubmissions")
  @ApiNestedQuery(FormSubmissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "read",
    possession: "any",
  })
  async findFormSubmissions(
    @common.Req() request: Request,
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<FormSubmission[]> {
    const query = plainToClass(FormSubmissionFindManyArgs, request.query);
    const results = await this.service.findFormSubmissions(params.id, {
      ...query,
      select: {
        createdAt: true,
        formId: true,
        formTitle: true,
        id: true,

        patient: {
          select: {
            id: true,
          },
        },

        practice: {
          select: {
            id: true,
          },
        },

        receivedAt: true,
        requestedBy: true,
        requestSentId: true,
        seen: true,
        submissionId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/formSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async connectFormSubmissions(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: FormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      formSubmissions: {
        connect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/formSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async updateFormSubmissions(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: FormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      formSubmissions: {
        set: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/formSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async disconnectFormSubmissions(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: FormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      formSubmissions: {
        disconnect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/leadFormSubmissions")
  @ApiNestedQuery(LeadFormSubmissionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LeadFormSubmission",
    action: "read",
    possession: "any",
  })
  async findLeadFormSubmissions(
    @common.Req() request: Request,
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<LeadFormSubmission[]> {
    const query = plainToClass(LeadFormSubmissionFindManyArgs, request.query);
    const results = await this.service.findLeadFormSubmissions(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        emailConsented: true,
        firstName: true,
        id: true,
        interests: true,
        lastName: true,
        marketingConsented: true,
        mobileNumber: true,
        onlyInterestsConsented: true,

        pracitice: {
          select: {
            id: true,
          },
        },

        smsConsented: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/leadFormSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async connectLeadFormSubmissions(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: LeadFormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leadFormSubmissions: {
        connect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/leadFormSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async updateLeadFormSubmissions(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: LeadFormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leadFormSubmissions: {
        set: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/leadFormSubmissions")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async disconnectLeadFormSubmissions(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: LeadFormSubmissionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leadFormSubmissions: {
        disconnect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/leads")
  @ApiNestedQuery(LeadFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Lead",
    action: "read",
    possession: "any",
  })
  async findLeads(
    @common.Req() request: Request,
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<Lead[]> {
    const query = plainToClass(LeadFindManyArgs, request.query);
    const results = await this.service.findLeads(params.id, {
      ...query,
      select: {
        contacted: true,
        convertedClientId: true,
        createdAt: true,
        dateOfBirth: true,
        email: true,
        emailConsented: true,
        firstName: true,
        id: true,
        interests: true,
        lastName: true,
        marketingConsented: true,
        meetingDate: true,
        mobileNumber: true,
        onlyInterestsConsented: true,
        otherFields: true,
        platformSource: true,

        practice: {
          select: {
            id: true,
          },
        },

        smsConsented: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/leads")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async connectLeads(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: LeadWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leads: {
        connect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/leads")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async updateLeads(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: LeadWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leads: {
        set: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/leads")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async disconnectLeads(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: LeadWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leads: {
        disconnect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/patients")
  @ApiNestedQuery(PatientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async findPatients(
    @common.Req() request: Request,
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<Patient[]> {
    const query = plainToClass(PatientFindManyArgs, request.query);
    const results = await this.service.findPatients(params.id, {
      ...query,
      select: {
        createdAt: true,
        dateOfBirth: true,
        firstName: true,
        id: true,
        lastName: true,
        mobileNumber: true,
        nhsNumber: true,

        practice: {
          select: {
            id: true,
          },
        },

        stripeCustomerId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/patients")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async connectPatients(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
        connect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/patients")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async updatePatients(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
        set: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/patients")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async disconnectPatients(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
        disconnect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/practiceInfoLinks")
  @ApiNestedQuery(PracticeInfoLinkFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PracticeInfoLink",
    action: "read",
    possession: "any",
  })
  async findPracticeInfoLinks(
    @common.Req() request: Request,
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<PracticeInfoLink[]> {
    const query = plainToClass(PracticeInfoLinkFindManyArgs, request.query);
    const results = await this.service.findPracticeInfoLinks(params.id, {
      ...query,
      select: {
        category: true,
        createdAt: true,
        displayName: true,
        id: true,
        message: true,

        practice: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/practiceInfoLinks")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async connectPracticeInfoLinks(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: PracticeInfoLinkWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      practiceInfoLinks: {
        connect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/practiceInfoLinks")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async updatePracticeInfoLinks(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: PracticeInfoLinkWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      practiceInfoLinks: {
        set: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/practiceInfoLinks")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async disconnectPracticeInfoLinks(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: PracticeInfoLinkWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      practiceInfoLinks: {
        disconnect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/workflowTemplates")
  @ApiNestedQuery(WorkflowTemplateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "WorkflowTemplate",
    action: "read",
    possession: "any",
  })
  async findWorkflowTemplates(
    @common.Req() request: Request,
    @common.Param() params: PracticeWhereUniqueInput
  ): Promise<WorkflowTemplate[]> {
    const query = plainToClass(WorkflowTemplateFindManyArgs, request.query);
    const results = await this.service.findWorkflowTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,

        practice: {
          select: {
            id: true,
          },
        },

        sector: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/workflowTemplates")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async connectWorkflowTemplates(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: WorkflowTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowTemplates: {
        connect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflowTemplates")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async updateWorkflowTemplates(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: WorkflowTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowTemplates: {
        set: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflowTemplates")
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "update",
    possession: "any",
  })
  async disconnectWorkflowTemplates(
    @common.Param() params: PracticeWhereUniqueInput,
    @common.Body() body: WorkflowTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflowTemplates: {
        disconnect: body,
      },
    };
    await this.service.updatePractice({
      where: params,
      data,
      select: { id: true },
    });
  }
}
