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
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FormLink } from "./FormLink";
import { FormLinkCountArgs } from "./FormLinkCountArgs";
import { FormLinkFindManyArgs } from "./FormLinkFindManyArgs";
import { FormLinkFindUniqueArgs } from "./FormLinkFindUniqueArgs";
import { CreateFormLinkArgs } from "./CreateFormLinkArgs";
import { UpdateFormLinkArgs } from "./UpdateFormLinkArgs";
import { DeleteFormLinkArgs } from "./DeleteFormLinkArgs";
import { Practice } from "../../practice/base/Practice";
import { FormLinkService } from "../formLink.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FormLink)
export class FormLinkResolverBase {
  constructor(
    protected readonly service: FormLinkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FormLink",
    action: "read",
    possession: "any",
  })
  async _formLinksMeta(
    @graphql.Args() args: FormLinkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FormLink])
  @nestAccessControl.UseRoles({
    resource: "FormLink",
    action: "read",
    possession: "any",
  })
  async formLinks(
    @graphql.Args() args: FormLinkFindManyArgs
  ): Promise<FormLink[]> {
    return this.service.formLinks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FormLink, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FormLink",
    action: "read",
    possession: "own",
  })
  async formLink(
    @graphql.Args() args: FormLinkFindUniqueArgs
  ): Promise<FormLink | null> {
    const result = await this.service.formLink(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FormLink)
  @nestAccessControl.UseRoles({
    resource: "FormLink",
    action: "create",
    possession: "any",
  })
  async createFormLink(
    @graphql.Args() args: CreateFormLinkArgs
  ): Promise<FormLink> {
    return await this.service.createFormLink({
      ...args,
      data: {
        ...args.data,

        practice: args.data.practice
          ? {
              connect: args.data.practice,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FormLink)
  @nestAccessControl.UseRoles({
    resource: "FormLink",
    action: "update",
    possession: "any",
  })
  async updateFormLink(
    @graphql.Args() args: UpdateFormLinkArgs
  ): Promise<FormLink | null> {
    try {
      return await this.service.updateFormLink({
        ...args,
        data: {
          ...args.data,

          practice: args.data.practice
            ? {
                connect: args.data.practice,
              }
            : undefined,
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

  @graphql.Mutation(() => FormLink)
  @nestAccessControl.UseRoles({
    resource: "FormLink",
    action: "delete",
    possession: "any",
  })
  async deleteFormLink(
    @graphql.Args() args: DeleteFormLinkArgs
  ): Promise<FormLink | null> {
    try {
      return await this.service.deleteFormLink(args);
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
    @graphql.Parent() parent: FormLink
  ): Promise<Practice | null> {
    const result = await this.service.getPractice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
