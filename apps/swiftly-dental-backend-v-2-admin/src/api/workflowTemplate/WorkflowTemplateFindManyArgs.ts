import { WorkflowTemplateWhereInput } from "./WorkflowTemplateWhereInput";
import { WorkflowTemplateOrderByInput } from "./WorkflowTemplateOrderByInput";

export type WorkflowTemplateFindManyArgs = {
  where?: WorkflowTemplateWhereInput;
  orderBy?: Array<WorkflowTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
