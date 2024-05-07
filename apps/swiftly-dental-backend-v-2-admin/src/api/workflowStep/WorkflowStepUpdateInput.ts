import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type WorkflowStepUpdateInput = {
  executedOn?: Date | null;
  executionDate?: Date;
  message?: string;
  workflow?: WorkflowWhereUniqueInput;
};
