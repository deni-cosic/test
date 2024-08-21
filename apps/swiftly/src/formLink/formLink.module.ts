import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FormLinkModuleBase } from "./base/formLink.module.base";
import { FormLinkService } from "./formLink.service";
import { FormLinkController } from "./formLink.controller";

@Module({
  imports: [FormLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [FormLinkController],
  providers: [FormLinkService],
  exports: [FormLinkService],
})
export class FormLinkModule {}
