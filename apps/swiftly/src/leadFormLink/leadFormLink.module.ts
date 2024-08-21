import { Module } from "@nestjs/common";
import { LeadFormLinkModuleBase } from "./base/leadFormLink.module.base";
import { LeadFormLinkService } from "./leadFormLink.service";
import { LeadFormLinkController } from "./leadFormLink.controller";

@Module({
  imports: [LeadFormLinkModuleBase],
  controllers: [LeadFormLinkController],
  providers: [LeadFormLinkService],
  exports: [LeadFormLinkService],
})
export class LeadFormLinkModule {}
