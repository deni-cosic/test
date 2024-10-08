import { FormSubmissionUpdateManyWithoutPatientsInput } from "./FormSubmissionUpdateManyWithoutPatientsInput";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { WorkflowUpdateManyWithoutPatientsInput } from "./WorkflowUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  dateOfBirth?: Date;
  firstName?: string;
  formSubmissions?: FormSubmissionUpdateManyWithoutPatientsInput;
  lastName?: string;
  mobileNumber?: string;
  nhsNumber?: string | null;
  practice?: PracticeWhereUniqueInput | null;
  stripeCustomerId?: string | null;
  workflows?: WorkflowUpdateManyWithoutPatientsInput;
};
