import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeadFormLinkServiceBase } from "./base/leadFormLink.service.base";

@Injectable()
export class LeadFormLinkService extends LeadFormLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
