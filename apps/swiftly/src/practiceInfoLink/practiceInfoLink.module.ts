import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PracticeInfoLinkModuleBase } from "./base/practiceInfoLink.module.base";
import { PracticeInfoLinkService } from "./practiceInfoLink.service";
import { PracticeInfoLinkController } from "./practiceInfoLink.controller";

@Module({
  imports: [PracticeInfoLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [PracticeInfoLinkController],
  providers: [PracticeInfoLinkService],
  exports: [PracticeInfoLinkService],
})
export class PracticeInfoLinkModule {}
