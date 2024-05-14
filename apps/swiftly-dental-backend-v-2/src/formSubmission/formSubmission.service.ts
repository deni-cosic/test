import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormSubmissionServiceBase } from "./base/formSubmission.service.base";

@Injectable()
export class FormSubmissionService extends FormSubmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async findForPatient({
    practiceId,
    patientId,
  }: {
    practiceId: string;
    patientId?: string;
  }) {
    return super.formSubmissions({
      where: {
        practiceId,
        patientId,
      },
      include: {
        patient: true,
        practice: true,
      },
    });
  }
}
