import { FeaturePermissionWhereUniqueInput } from "../featurePermission/FeaturePermissionWhereUniqueInput";
import { FormSubmissionUpdateManyWithoutPracticesInput } from "./FormSubmissionUpdateManyWithoutPracticesInput";
import { LeadFormLinkUpdateManyWithoutPracticesInput } from "./LeadFormLinkUpdateManyWithoutPracticesInput";
import { LeadUpdateManyWithoutPracticesInput } from "./LeadUpdateManyWithoutPracticesInput";
import { PatientUpdateManyWithoutPracticesInput } from "./PatientUpdateManyWithoutPracticesInput";
import { PracticeInfoLinkUpdateManyWithoutPracticesInput } from "./PracticeInfoLinkUpdateManyWithoutPracticesInput";
import { UserUpdateManyWithoutPracticesInput } from "./UserUpdateManyWithoutPracticesInput";
import { WorkflowTemplateUpdateManyWithoutPracticesInput } from "./WorkflowTemplateUpdateManyWithoutPracticesInput";

export type PracticeUpdateInput = {
  addressLine1?: string | null;
  addressLine2?: string | null;
  addressLine3?: string | null;
  featurePermission?: FeaturePermissionWhereUniqueInput | null;
  formSubmissions?: FormSubmissionUpdateManyWithoutPracticesInput;
  googlePlaceId?: string | null;
  leadFormLinks?: LeadFormLinkUpdateManyWithoutPracticesInput;
  leads?: LeadUpdateManyWithoutPracticesInput;
  name?: string;
  nhsReviewUrl?: string | null;
  odsCode?: string;
  patients?: PatientUpdateManyWithoutPracticesInput;
  phoneNumber?: string | null;
  postcode?: string | null;
  practiceInfoLinks?: PracticeInfoLinkUpdateManyWithoutPracticesInput;
  remindAfter?: number;
  remindedAt?: Date | null;
  remindEvery?: number;
  sector?: "Dental" | "GP";
  senderId?: string | null;
  stripeConnectedAccountId?: string | null;
  users?: UserUpdateManyWithoutPracticesInput;
  website?: string | null;
  workflowTemplates?: WorkflowTemplateUpdateManyWithoutPracticesInput;
};
