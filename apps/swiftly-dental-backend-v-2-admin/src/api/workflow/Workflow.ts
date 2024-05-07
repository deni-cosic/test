import { Patient } from "../patient/Patient";
import { WorkflowStep } from "../workflowStep/WorkflowStep";

export type Workflow = {
  anchorDate: Date | null;
  createdAt: Date;
  id: string;
  name: string;
  patient?: Patient;
  updatedAt: Date;
  workflowSteps?: Array<WorkflowStep>;
};
