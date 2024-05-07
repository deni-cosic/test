import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput } from "./WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput";

export type WorkflowTemplateUpdateInput = {
  name?: string;
  practice?: PracticeWhereUniqueInput;
  sector?: "Dental" | "GP";
  workflowTemplateSteps?: WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput;
};
