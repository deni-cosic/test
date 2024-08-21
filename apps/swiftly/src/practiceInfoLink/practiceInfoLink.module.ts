import { Module } from "@nestjs/common";
import { PracticeInfoLinkModuleBase } from "./base/practiceInfoLink.module.base";
import { PracticeInfoLinkService } from "./practiceInfoLink.service";
import { PracticeInfoLinkController } from "./practiceInfoLink.controller";

@Module({
  imports: [PracticeInfoLinkModuleBase],
  controllers: [PracticeInfoLinkController],
  providers: [PracticeInfoLinkService],
  exports: [PracticeInfoLinkService],
})
export class PracticeInfoLinkModule {}
