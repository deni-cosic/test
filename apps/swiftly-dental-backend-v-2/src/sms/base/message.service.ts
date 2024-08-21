import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { BaseService } from "src/common/base.service";
import { PrismaService } from "src/prisma/prisma.service";
import { MessageMapType } from "./messageMapType.class";

@Injectable()
export class MessagesBaseService extends BaseService<
  Prisma.MessageDelegate,
  MessageMapType
> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.message);
  }
}
