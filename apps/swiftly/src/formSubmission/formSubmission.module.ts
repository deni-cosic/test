import { Module } from "@nestjs/common";
import { FormSubmissionModuleBase } from "./base/formSubmission.module.base";
import { FormSubmissionService } from "./formSubmission.service";
import { FormSubmissionController } from "./formSubmission.controller";

@Module({
  imports: [FormSubmissionModuleBase],
  controllers: [FormSubmissionController],
  providers: [FormSubmissionService],
  exports: [FormSubmissionService],
})
export class FormSubmissionModule {}
