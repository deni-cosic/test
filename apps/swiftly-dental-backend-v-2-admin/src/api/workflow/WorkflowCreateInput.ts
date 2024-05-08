import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { WorkflowStepCreateNestedManyWithoutWorkflowsInput } from "./WorkflowStepCreateNestedManyWithoutWorkflowsInput";

export type WorkflowCreateInput = {
  anchorDate?: Date | null;
  name: string;
  patient: PatientWhereUniqueInput;
  steps?: WorkflowStepCreateNestedManyWithoutWorkflowsInput;
};
