import { WorkflowTemplateStepWhereInput } from "./WorkflowTemplateStepWhereInput";
import { WorkflowTemplateStepOrderByInput } from "./WorkflowTemplateStepOrderByInput";

export type WorkflowTemplateStepFindManyArgs = {
  where?: WorkflowTemplateStepWhereInput;
  orderBy?: Array<WorkflowTemplateStepOrderByInput>;
  skip?: number;
  take?: number;
};
