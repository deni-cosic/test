import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkflowTemplateWhereUniqueInput } from "../workflowTemplate/WorkflowTemplateWhereUniqueInput";

export type WorkflowTemplateStepWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  message?: StringFilter;
  timeOffsetInSeconds?: StringFilter;
  updatedAt?: DateTimeFilter;
  workflowTemplate?: WorkflowTemplateWhereUniqueInput;
};
