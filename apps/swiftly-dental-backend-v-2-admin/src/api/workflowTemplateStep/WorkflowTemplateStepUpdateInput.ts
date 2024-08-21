import { WorkflowTemplateWhereUniqueInput } from "../workflowTemplate/WorkflowTemplateWhereUniqueInput";

export type WorkflowTemplateStepUpdateInput = {
  message?: string;
  timeOffsetInSeconds?: string;
  workflowTemplate?: WorkflowTemplateWhereUniqueInput;
};
