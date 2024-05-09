import { WorkflowTemplateWhereUniqueInput } from "../workflowTemplate/WorkflowTemplateWhereUniqueInput";

export type WorkflowTemplateStepCreateInput = {
  message: string;
  timeOffsetInSeconds: string;
  workflowTemplate: WorkflowTemplateWhereUniqueInput;
};
