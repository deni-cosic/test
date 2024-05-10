/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FormSubmission } from "./FormSubmission";
import { FormSubmissionCountArgs } from "./FormSubmissionCountArgs";
import { FormSubmissionFindManyArgs } from "./FormSubmissionFindManyArgs";
import { FormSubmissionFindUniqueArgs } from "./FormSubmissionFindUniqueArgs";
import { CreateFormSubmissionArgs } from "./CreateFormSubmissionArgs";
import { UpdateFormSubmissionArgs } from "./UpdateFormSubmissionArgs";
import { DeleteFormSubmissionArgs } from "./DeleteFormSubmissionArgs";
import { Patient } from "../../patient/base/Patient";
import { Practice } from "../../practice/base/Practice";
import { FormSubmissionService } from "../formSubmission.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FormSubmission)
export class FormSubmissionResolverBase {
  constructor(
    protected readonly service: FormSubmissionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "read",
    possession: "any",
  })
  async _formSubmissionsMeta(
    @graphql.Args() args: FormSubmissionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FormSubmission])
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "read",
    possession: "any",
  })
  async formSubmissions(
    @graphql.Args() args: FormSubmissionFindManyArgs
  ): Promise<FormSubmission[]> {
    return this.service.formSubmissions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FormSubmission, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "read",
    possession: "own",
  })
  async formSubmission(
    @graphql.Args() args: FormSubmissionFindUniqueArgs
  ): Promise<FormSubmission | null> {
    const result = await this.service.formSubmission(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => FormSubmission)
  async createFormSubmission(
    @graphql.Args() args: CreateFormSubmissionArgs
  ): Promise<FormSubmission> {
    return await this.service.createFormSubmission({
      ...args,
      data: {
        ...args.data,

        patient: args.data.patient
          ? {
              connect: args.data.patient,
            }
          : undefined,

        practice: {
          connect: args.data.practice,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FormSubmission)
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "update",
    possession: "any",
  })
  async updateFormSubmission(
    @graphql.Args() args: UpdateFormSubmissionArgs
  ): Promise<FormSubmission | null> {
    try {
      return await this.service.updateFormSubmission({
        ...args,
        data: {
          ...args.data,

          patient: args.data.patient
            ? {
                connect: args.data.patient,
              }
            : undefined,

          practice: {
            connect: args.data.practice,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FormSubmission)
  @nestAccessControl.UseRoles({
    resource: "FormSubmission",
    action: "delete",
    possession: "any",
  })
  async deleteFormSubmission(
    @graphql.Args() args: DeleteFormSubmissionArgs
  ): Promise<FormSubmission | null> {
    try {
      return await this.service.deleteFormSubmission(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Patient, {
    nullable: true,
    name: "patient",
  })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async getPatient(
    @graphql.Parent() parent: FormSubmission
  ): Promise<Patient | null> {
    const result = await this.service.getPatient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Practice, {
    nullable: true,
    name: "practice",
  })
  @nestAccessControl.UseRoles({
    resource: "Practice",
    action: "read",
    possession: "any",
  })
  async getPractice(
    @graphql.Parent() parent: FormSubmission
  ): Promise<Practice | null> {
    const result = await this.service.getPractice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
