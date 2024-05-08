import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput } from "./WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput";

export type WorkflowTemplateCreateInput = {
  name: string;
  practice: PracticeWhereUniqueInput;
  sector: "Dental" | "GP";
  steps?: WorkflowTemplateStepCreateNestedManyWithoutWorkflowTemplatesInput;
};
