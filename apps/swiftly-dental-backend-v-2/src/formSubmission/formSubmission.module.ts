import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FormSubmissionModuleBase } from "./base/formSubmission.module.base";
import { FormSubmissionService } from "./formSubmission.service";
import { FormSubmissionController } from "./formSubmission.controller";
import { FormSubmissionResolver } from "./formSubmission.resolver";

@Module({
  imports: [FormSubmissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [FormSubmissionController],
  providers: [FormSubmissionService, FormSubmissionResolver],
  exports: [FormSubmissionService],
})
export class FormSubmissionModule {}
