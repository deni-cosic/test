import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FeaturePermissionWhereUniqueInput } from "../featurePermission/FeaturePermissionWhereUniqueInput";
import { FormLinkListRelationFilter } from "../formLink/FormLinkListRelationFilter";
import { FormSubmissionListRelationFilter } from "../formSubmission/FormSubmissionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeadFormLinkListRelationFilter } from "../leadFormLink/LeadFormLinkListRelationFilter";
import { LeadListRelationFilter } from "../lead/LeadListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";
import { PracticeInfoLinkListRelationFilter } from "../practiceInfoLink/PracticeInfoLinkListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { WorkflowTemplateListRelationFilter } from "../workflowTemplate/WorkflowTemplateListRelationFilter";

export type PracticeWhereInput = {
  addressLine1?: StringNullableFilter;
  addressLine2?: StringNullableFilter;
  addressLine3?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  featurePermission?: FeaturePermissionWhereUniqueInput;
  formLinks?: FormLinkListRelationFilter;
  formSubmissions?: FormSubmissionListRelationFilter;
  googlePlaceId?: StringNullableFilter;
  id?: StringFilter;
  leadFormLinks?: LeadFormLinkListRelationFilter;
  leads?: LeadListRelationFilter;
  message?: MessageListRelationFilter;
  name?: StringFilter;
  nhsReviewUrl?: StringNullableFilter;
  odsCode?: StringFilter;
  patients?: PatientListRelationFilter;
  phoneNumber?: StringNullableFilter;
  postcode?: StringNullableFilter;
  practiceInfoLinks?: PracticeInfoLinkListRelationFilter;
  remindAfter?: IntFilter;
  remindEvery?: IntFilter;
  remindedAt?: DateTimeNullableFilter;
  sector?: "Dental" | "GP";
  senderId?: StringNullableFilter;
  stripeConnectedAccountId?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  users?: UserListRelationFilter;
  website?: StringNullableFilter;
  workflowTemplates?: WorkflowTemplateListRelationFilter;
};
