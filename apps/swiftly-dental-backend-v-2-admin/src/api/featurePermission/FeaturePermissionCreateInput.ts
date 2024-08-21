import { PracticeCreateNestedManyWithoutFeaturePermissionsInput } from "./PracticeCreateNestedManyWithoutFeaturePermissionsInput";

export type FeaturePermissionCreateInput = {
  analytics?: boolean | null;
  dentalAdviceLink?: boolean | null;
  dentalSubscriptions?: boolean | null;
  form?: boolean | null;
  leads?: boolean | null;
  messageTemplate?: boolean | null;
  practiceInfoLink?: boolean | null;
  practices?: PracticeCreateNestedManyWithoutFeaturePermissionsInput;
  requestFeedback?: boolean | null;
  requestPayment?: boolean | null;
  sendDocument?: boolean | null;
  sendMessageToMany?: boolean | null;
  videoCall?: boolean | null;
  workflows?: boolean | null;
};
