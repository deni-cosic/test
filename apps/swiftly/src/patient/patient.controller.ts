import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PatientService } from "./patient.service";
import { PatientControllerBase } from "./base/patient.controller.base";

@swagger.ApiTags("patients")
@common.Controller("patients")
export class PatientController extends PatientControllerBase {
  constructor(protected readonly service: PatientService) {
    super(service);
  }
}
