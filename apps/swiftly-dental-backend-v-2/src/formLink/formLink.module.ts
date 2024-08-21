import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FormLinkModuleBase } from "./base/formLink.module.base";
import { FormLinkService } from "./formLink.service";
import { FormLinkController } from "./formLink.controller";
import { FormLinkResolver } from "./formLink.resolver";

@Module({
  imports: [FormLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [FormLinkController],
  providers: [FormLinkService, FormLinkResolver],
  exports: [FormLinkService],
})
export class FormLinkModule {}
