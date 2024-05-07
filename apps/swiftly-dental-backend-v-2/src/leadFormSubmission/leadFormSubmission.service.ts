import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeadFormSubmissionServiceBase } from "./base/leadFormSubmission.service.base";

@Injectable()
export class LeadFormSubmissionService extends LeadFormSubmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
