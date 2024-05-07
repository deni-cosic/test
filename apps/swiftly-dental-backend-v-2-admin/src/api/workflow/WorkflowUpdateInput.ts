import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { WorkflowStepUpdateManyWithoutWorkflowsInput } from "./WorkflowStepUpdateManyWithoutWorkflowsInput";

export type WorkflowUpdateInput = {
  anchorDate?: Date | null;
  name?: string;
  patient?: PatientWhereUniqueInput;
  workflowSteps?: WorkflowStepUpdateManyWithoutWorkflowsInput;
};
