import { WorkflowStep as TWorkflowStep } from "../api/workflowStep/WorkflowStep";

export const WORKFLOWSTEP_TITLE_FIELD = "message";

export const WorkflowStepTitle = (record: TWorkflowStep): string => {
  return record.message?.toString() || String(record.id);
};
