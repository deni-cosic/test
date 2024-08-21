import { WorkflowTemplate as TWorkflowTemplate } from "../api/workflowTemplate/WorkflowTemplate";

export const WORKFLOWTEMPLATE_TITLE_FIELD = "name";

export const WorkflowTemplateTitle = (record: TWorkflowTemplate): string => {
  return record.name?.toString() || String(record.id);
};
