import { Workflow } from "../workflow/Workflow";

export type WorkflowStep = {
  createdAt: Date;
  executedOn: Date | null;
  executionDate: Date;
  id: string;
  message: string;
  updatedAt: Date;
  workflow?: Workflow;
};
