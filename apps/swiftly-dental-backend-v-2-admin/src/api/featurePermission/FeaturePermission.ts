import { Practice } from "../practice/Practice";

export type FeaturePermission = {
  analytics: boolean;
  createdAt: Date;
  dentalAdviceLink: boolean;
  dentalSubscriptions: boolean;
  form: boolean;
  id: string;
  leads: boolean | null;
  messageTemplate: boolean;
  practiceInfoLink: boolean;
  practices?: Array<Practice>;
  requestFeedback: boolean;
  requestPayment: boolean;
  sendDocument: boolean;
  sendMessageToMany: boolean | null;
  updatedAt: Date;
  videoCall: boolean;
  workflows: boolean | null;
};
