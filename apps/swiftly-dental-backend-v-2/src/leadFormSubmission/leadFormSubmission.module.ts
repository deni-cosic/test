import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LeadFormSubmissionModuleBase } from "./base/leadFormSubmission.module.base";
import { LeadFormSubmissionService } from "./leadFormSubmission.service";
import { LeadFormSubmissionController } from "./leadFormSubmission.controller";
import { LeadFormSubmissionResolver } from "./leadFormSubmission.resolver";

@Module({
  imports: [LeadFormSubmissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [LeadFormSubmissionController],
  providers: [LeadFormSubmissionService, LeadFormSubmissionResolver],
  exports: [LeadFormSubmissionService],
})
export class LeadFormSubmissionModule {}
