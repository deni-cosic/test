import { Practice } from "../practice/Practice";

export type FeaturePermission = {
  analytics: boolean | null;
  createdAt: Date;
  dentalAdviceLink: boolean | null;
  dentalSubscriptions: boolean | null;
  form: boolean | null;
  id: string;
  leads: boolean | null;
  messageTemplate: boolean | null;
  practiceInfoLink: boolean | null;
  practices?: Array<Practice>;
  requestFeedback: boolean | null;
  requestPayment: boolean | null;
  sendDocument: boolean | null;
  sendMessageToMany: boolean | null;
  updatedAt: Date;
  videoCall: boolean | null;
  workflows: boolean | null;
};
