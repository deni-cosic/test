import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LinkServiceBase } from "./base/link.service.base";

@Injectable()
export class LinkService extends LinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
