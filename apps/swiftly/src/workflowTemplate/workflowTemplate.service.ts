import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkflowTemplateServiceBase } from "./base/workflowTemplate.service.base";

@Injectable()
export class WorkflowTemplateService extends WorkflowTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
