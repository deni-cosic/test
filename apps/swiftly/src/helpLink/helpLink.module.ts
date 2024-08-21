import { Module } from "@nestjs/common";
import { HelpLinkModuleBase } from "./base/helpLink.module.base";
import { HelpLinkService } from "./helpLink.service";
import { HelpLinkController } from "./helpLink.controller";

@Module({
  imports: [HelpLinkModuleBase],
  controllers: [HelpLinkController],
  providers: [HelpLinkService],
  exports: [HelpLinkService],
})
export class HelpLinkModule {}
