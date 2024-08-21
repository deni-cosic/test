import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PracticeInfoLinkServiceBase } from "./base/practiceInfoLink.service.base";

@Injectable()
export class PracticeInfoLinkService extends PracticeInfoLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
