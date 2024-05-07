import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FeaturePermissionWhereUniqueInput } from "../featurePermission/FeaturePermissionWhereUniqueInput";
import { FormSubmissionListRelationFilter } from "../formSubmission/FormSubmissionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadFormSubmissionListRelationFilter } from "../leadFormSubmission/LeadFormSubmissionListRelationFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";
import { PracticeInfoLinkListRelationFilter } from "../practiceInfoLink/PracticeInfoLinkListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WorkflowTemplateListRelationFilter } from "../workflowTemplate/WorkflowTemplateListRelationFilter";

export type PracticeWhereInput = {
  addressLine1?: StringNullableFilter;
  addressLine2?: StringNullableFilter;
  addressLine3?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  featurePermission?: FeaturePermissionWhereUniqueInput;
  formSubmissions?: FormSubmissionListRelationFilter;
  googlePlaceId?: StringNullableFilter;
  id?: StringFilter;
  leadFormSubmissions?: LeadFormSubmissionListRelationFilter;
  leads?: LeadListRelationFilter;
  name?: StringFilter;
  nhsReviewUrl?: StringNullableFilter;
  odsCode?: StringFilter;
  patients?: PatientListRelationFilter;
  phoneNumber?: StringNullableFilter;
  postcode?: StringNullableFilter;
  practiceInfoLinks?: PracticeInfoLinkListRelationFilter;
  remindAfter?: IntFilter;
  remindedAt?: DateTimeNullableFilter;
  remindEvery?: IntFilter;
  sector?: "Dental" | "GP";
  senderId?: StringNullableFilter;
  stripeConnectedAccountId?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  website?: StringNullableFilter;
  workflowTemplates?: WorkflowTemplateListRelationFilter;
};
