import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { WorkflowTemplateStepListRelationFilter } from "../workflowTemplateStep/WorkflowTemplateStepListRelationFilter";

export type WorkflowTemplateWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  practice?: PracticeWhereUniqueInput;
  sector?: "Dental" | "GP";
  updatedAt?: DateTimeFilter;
  workflowTemplateSteps?: WorkflowTemplateStepListRelationFilter;
};
