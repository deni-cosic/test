import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HelpLinkModuleBase } from "./base/helpLink.module.base";
import { HelpLinkService } from "./helpLink.service";
import { HelpLinkController } from "./helpLink.controller";

@Module({
  imports: [HelpLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [HelpLinkController],
  providers: [HelpLinkService],
  exports: [HelpLinkService],
})
export class HelpLinkModule {}
