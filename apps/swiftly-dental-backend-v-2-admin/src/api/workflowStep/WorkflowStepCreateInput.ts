import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type WorkflowStepCreateInput = {
  executedOn?: Date | null;
  executionDate: Date;
  message: string;
  workflow: WorkflowWhereUniqueInput;
};
