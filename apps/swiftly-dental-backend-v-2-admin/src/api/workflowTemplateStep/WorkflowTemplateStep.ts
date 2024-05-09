import { WorkflowTemplate } from "../workflowTemplate/WorkflowTemplate";

export type WorkflowTemplateStep = {
  createdAt: Date;
  id: string;
  message: string;
  timeOffsetInSeconds: string;
  updatedAt: Date;
  workflowTemplate?: WorkflowTemplate;
};
