import { Module } from "@nestjs/common";
import { LeadModuleBase } from "./base/lead.module.base";
import { LeadService } from "./lead.service";
import { LeadController } from "./lead.controller";

@Module({
  imports: [LeadModuleBase],
  controllers: [LeadController],
  providers: [LeadService],
  exports: [LeadService],
})
export class LeadModule {}
