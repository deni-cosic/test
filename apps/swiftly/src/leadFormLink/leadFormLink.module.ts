import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LeadFormLinkModuleBase } from "./base/leadFormLink.module.base";
import { LeadFormLinkService } from "./leadFormLink.service";
import { LeadFormLinkController } from "./leadFormLink.controller";

@Module({
  imports: [LeadFormLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [LeadFormLinkController],
  providers: [LeadFormLinkService],
  exports: [LeadFormLinkService],
})
export class LeadFormLinkModule {}
