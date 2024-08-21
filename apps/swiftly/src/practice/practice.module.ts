import { Module } from "@nestjs/common";
import { PracticeModuleBase } from "./base/practice.module.base";
import { PracticeService } from "./practice.service";
import { PracticeController } from "./practice.controller";

@Module({
  imports: [PracticeModuleBase],
  controllers: [PracticeController],
  providers: [PracticeService],
  exports: [PracticeService],
})
export class PracticeModule {}
