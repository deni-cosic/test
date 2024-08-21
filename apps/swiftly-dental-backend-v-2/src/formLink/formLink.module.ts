import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FormLinkModuleBase } from "./base/formLink.module.base";
import { FormLinkService } from "./formLink.service";
import { FormLinkController } from "./formLink.controller";
import { FormLinkResolver } from "./formLink.resolver";
import { FormSubmissionModule } from "src/formSubmission/formSubmission.module";

@Module({
  imports: [
    FormLinkModuleBase,
    forwardRef(() => AuthModule),
    FormSubmissionModule,
  ],
  controllers: [FormLinkController],
  providers: [FormLinkService, FormLinkResolver],
  exports: [FormLinkService],
})
export class FormLinkModule {}
