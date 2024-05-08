import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PracticeToUserResolverBase } from "./base/practiceToUser.resolver.base";
import { PracticeToUser } from "./base/PracticeToUser";
import { PracticeToUserService } from "./practiceToUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PracticeToUser)
export class PracticeToUserResolver extends PracticeToUserResolverBase {
  constructor(
    protected readonly service: PracticeToUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
