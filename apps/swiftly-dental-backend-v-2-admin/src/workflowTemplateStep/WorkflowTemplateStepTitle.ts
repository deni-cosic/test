import { WorkflowTemplateStep as TWorkflowTemplateStep } from "../api/workflowTemplateStep/WorkflowTemplateStep";

export const WORKFLOWTEMPLATESTEP_TITLE_FIELD = "message";

export const WorkflowTemplateStepTitle = (
  record: TWorkflowTemplateStep
): string => {
  return record.message?.toString() || String(record.id);
};
