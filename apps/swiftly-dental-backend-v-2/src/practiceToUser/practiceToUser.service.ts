import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PracticeToUserServiceBase } from "./base/practiceToUser.service.base";

@Injectable()
export class PracticeToUserService extends PracticeToUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
