import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HelpLinkServiceBase } from "./base/helpLink.service.base";

@Injectable()
export class HelpLinkService extends HelpLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
