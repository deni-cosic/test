import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput } from "./WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput";

export type WorkflowTemplateUpdateInput = {
  name?: string;
  practice?: PracticeWhereUniqueInput | null;
  sector?: "Dental" | "GP";
  steps?: WorkflowTemplateStepUpdateManyWithoutWorkflowTemplatesInput;
};
