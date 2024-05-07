import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FormSubmissionListRelationFilter } from "../formSubmission/FormSubmissionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { WorkflowListRelationFilter } from "../workflow/WorkflowListRelationFilter";

export type PatientWhereInput = {
  createdAt?: DateTimeFilter;
  dateOfBirth?: StringFilter;
  firstName?: StringFilter;
  formSubmissions?: FormSubmissionListRelationFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  mobileNumber?: StringFilter;
  nhsNumber?: StringNullableFilter;
  practice?: PracticeWhereUniqueInput;
  stripeCustomerId?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  workflows?: WorkflowListRelationFilter;
};
