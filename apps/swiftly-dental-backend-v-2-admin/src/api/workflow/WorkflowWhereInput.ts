import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { WorkflowStepListRelationFilter } from "../workflowStep/WorkflowStepListRelationFilter";

export type WorkflowWhereInput = {
  anchorDate?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  patient?: PatientWhereUniqueInput;
  steps?: WorkflowStepListRelationFilter;
  updatedAt?: DateTimeFilter;
};
