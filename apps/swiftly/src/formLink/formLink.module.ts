import { Module } from "@nestjs/common";
import { FormLinkModuleBase } from "./base/formLink.module.base";
import { FormLinkService } from "./formLink.service";
import { FormLinkController } from "./formLink.controller";

@Module({
  imports: [FormLinkModuleBase],
  controllers: [FormLinkController],
  providers: [FormLinkService],
  exports: [FormLinkService],
})
export class FormLinkModule {}
