import { Module } from "@nestjs/common";
import { PatientModuleBase } from "./base/patient.module.base";
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";

@Module({
  imports: [PatientModuleBase],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
