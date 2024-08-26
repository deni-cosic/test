import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MessageLogServiceBase } from "./base/messageLog.service.base";

@Injectable()
export class MessageLogService extends MessageLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
