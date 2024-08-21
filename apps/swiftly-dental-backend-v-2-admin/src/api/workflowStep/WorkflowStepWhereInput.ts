import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";

export type WorkflowStepWhereInput = {
  createdAt?: DateTimeFilter;
  executedOn?: DateTimeNullableFilter;
  executionDate?: DateTimeFilter;
  id?: StringFilter;
  message?: StringFilter;
  updatedAt?: DateTimeFilter;
  workflow?: WorkflowWhereUniqueInput;
};
