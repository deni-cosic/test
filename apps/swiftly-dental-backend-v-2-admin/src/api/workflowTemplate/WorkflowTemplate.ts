import { Practice } from "../practice/Practice";
import { WorkflowTemplateStep } from "../workflowTemplateStep/WorkflowTemplateStep";

export type WorkflowTemplate = {
  createdAt: Date;
  id: string;
  name: string;
  practice?: Practice;
  sector?: "Dental" | "GP";
  updatedAt: Date;
  workflowTemplateSteps?: Array<WorkflowTemplateStep>;
};
