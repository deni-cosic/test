import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { BaseService } from "src/common/base.service";
import { PrismaService } from "src/prisma/prisma.service";
import { MessageLogMapType } from "./messageLogMapType.class";

@Injectable()
export class MessageLogService extends BaseService<
  Prisma.MessageLogDelegate,
  MessageLogMapType
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.messageLog);
  }
}
