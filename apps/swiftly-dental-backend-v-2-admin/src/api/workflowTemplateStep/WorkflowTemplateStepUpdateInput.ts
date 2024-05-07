import { WorkflowTemplateWhereUniqueInput } from "../workflowTemplate/WorkflowTemplateWhereUniqueInput";

export type WorkflowTemplateStepUpdateInput = {
  message?: string;
  timeOffsetInSeconds?: number;
  workflowTemplate?: WorkflowTemplateWhereUniqueInput;
};
