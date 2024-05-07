import { PracticeUpdateManyWithoutFeaturePermissionsInput } from "./PracticeUpdateManyWithoutFeaturePermissionsInput";

export type FeaturePermissionUpdateInput = {
  analytics?: boolean;
  dentalAdviceLink?: boolean;
  dentalSubscriptions?: boolean;
  form?: boolean;
  leads?: boolean | null;
  messageTemplate?: boolean;
  practiceInfoLink?: boolean;
  practices?: PracticeUpdateManyWithoutFeaturePermissionsInput;
  requestFeedback?: boolean;
  requestPayment?: boolean;
  sendDocument?: boolean;
  sendMessageToMany?: boolean | null;
  videoCall?: boolean;
  workflows?: boolean | null;
};
