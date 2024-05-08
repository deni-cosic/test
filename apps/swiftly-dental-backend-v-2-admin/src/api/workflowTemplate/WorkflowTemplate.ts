import { Practice } from "../practice/Practice";
import { WorkflowTemplateStep } from "../workflowTemplateStep/WorkflowTemplateStep";

export type WorkflowTemplate = {
  createdAt: Date;
  id: string;
  name: string;
  practice?: Practice | null;
  sector?: "Dental" | "GP";
  steps?: Array<WorkflowTemplateStep>;
  updatedAt: Date;
};
