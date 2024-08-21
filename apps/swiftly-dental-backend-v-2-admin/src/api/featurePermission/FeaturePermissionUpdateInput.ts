import { PracticeUpdateManyWithoutFeaturePermissionsInput } from "./PracticeUpdateManyWithoutFeaturePermissionsInput";

export type FeaturePermissionUpdateInput = {
  analytics?: boolean | null;
  dentalAdviceLink?: boolean | null;
  dentalSubscriptions?: boolean | null;
  form?: boolean | null;
  leads?: boolean | null;
  messageTemplate?: boolean | null;
  practiceInfoLink?: boolean | null;
  practices?: PracticeUpdateManyWithoutFeaturePermissionsInput;
  requestFeedback?: boolean | null;
  requestPayment?: boolean | null;
  sendDocument?: boolean | null;
  sendMessageToMany?: boolean | null;
  videoCall?: boolean | null;
  workflows?: boolean | null;
};
