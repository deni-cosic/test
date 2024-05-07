import { PracticeCreateNestedManyWithoutFeaturePermissionsInput } from "./PracticeCreateNestedManyWithoutFeaturePermissionsInput";

export type FeaturePermissionCreateInput = {
  analytics: boolean;
  dentalAdviceLink: boolean;
  dentalSubscriptions: boolean;
  form: boolean;
  leads?: boolean | null;
  messageTemplate: boolean;
  practiceInfoLink: boolean;
  practices?: PracticeCreateNestedManyWithoutFeaturePermissionsInput;
  requestFeedback: boolean;
  requestPayment: boolean;
  sendDocument: boolean;
  sendMessageToMany?: boolean | null;
  videoCall: boolean;
  workflows?: boolean | null;
};
