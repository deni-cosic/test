import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LeadModuleBase } from "./base/lead.module.base";
import { LeadService } from "./lead.service";
import { LeadController } from "./lead.controller";
import { LeadResolver } from "./lead.resolver";

@Module({
  imports: [LeadModuleBase, forwardRef(() => AuthModule)],
  controllers: [LeadController],
  providers: [LeadService, LeadResolver],
  exports: [LeadService],
})
export class LeadModule {}
