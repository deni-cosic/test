import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type FormSubmissionUpdateInput = {
  formId?: string | null;
  formTitle?: string;
  patient?: PatientWhereUniqueInput | null;
  practice?: PracticeWhereUniqueInput;
  receivedAt?: Date | null;
  requestedBy?: string | null;
  requestSentId?: string | null;
  seen?: boolean | null;
  submissionId?: string | null;
};
