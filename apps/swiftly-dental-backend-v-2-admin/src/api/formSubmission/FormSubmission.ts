import { Patient } from "../patient/Patient";
import { Practice } from "../practice/Practice";

export type FormSubmission = {
  createdAt: Date;
  formId: string | null;
  formTitle: string;
  id: string;
  patient?: Patient | null;
  practice?: Practice;
  receivedAt: Date | null;
  requestedBy: string | null;
  requestSentId: string | null;
  seen: boolean | null;
  submissionId: string | null;
  updatedAt: Date;
};
