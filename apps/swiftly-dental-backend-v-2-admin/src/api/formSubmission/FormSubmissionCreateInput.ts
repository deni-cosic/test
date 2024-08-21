import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type FormSubmissionCreateInput = {
  formId?: string | null;
  formTitle: string;
  patient?: PatientWhereUniqueInput | null;
  practice: PracticeWhereUniqueInput;
  receivedAt?: Date | null;
  requestSentId?: string | null;
  requestedBy?: string | null;
  seen?: boolean | null;
  submissionId?: string | null;
};
