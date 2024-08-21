import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PracticeModuleBase } from "./base/practice.module.base";
import { PracticeService } from "./practice.service";
import { PracticeController } from "./practice.controller";
import { PracticeResolver } from "./practice.resolver";

@Module({
  imports: [PracticeModuleBase, forwardRef(() => AuthModule)],
  controllers: [PracticeController],
  providers: [PracticeService, PracticeResolver],
  exports: [PracticeService],
})
export class PracticeModule {}
