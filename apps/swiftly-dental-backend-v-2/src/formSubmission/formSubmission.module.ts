import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FormSubmissionModuleBase } from "./base/formSubmission.module.base";
import { FormSubmissionService } from "./formSubmission.service";
import { FormSubmissionController } from "./formSubmission.controller";
import { FormSubmissionResolver } from "./formSubmission.resolver";
import { PatientModule } from "src/patient/patient.module";

@Module({
  imports: [
    FormSubmissionModuleBase,
    forwardRef(() => AuthModule),
    PatientModule,
  ],
  controllers: [FormSubmissionController],
  providers: [FormSubmissionService, FormSubmissionResolver],
  exports: [FormSubmissionService],
})
export class FormSubmissionModule {}
