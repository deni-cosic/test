import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PracticeServiceBase } from "./base/practice.service.base";

@Injectable()
export class PracticeService extends PracticeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
