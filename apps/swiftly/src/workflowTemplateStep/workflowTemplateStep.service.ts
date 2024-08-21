import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkflowTemplateStepServiceBase } from "./base/workflowTemplateStep.service.base";

@Injectable()
export class WorkflowTemplateStepService extends WorkflowTemplateStepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
