import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { WorkflowTemplateWhereUniqueInput } from "../workflowTemplate/WorkflowTemplateWhereUniqueInput";

export type WorkflowTemplateStepWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  message?: StringFilter;
  timeOffsetInSeconds?: IntFilter;
  updatedAt?: DateTimeFilter;
  workflowTemplate?: WorkflowTemplateWhereUniqueInput;
};
