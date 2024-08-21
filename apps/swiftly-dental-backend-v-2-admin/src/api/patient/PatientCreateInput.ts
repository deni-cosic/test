import { FormSubmissionCreateNestedManyWithoutPatientsInput } from "./FormSubmissionCreateNestedManyWithoutPatientsInput";
import { MessageCreateNestedManyWithoutPatientsInput } from "./MessageCreateNestedManyWithoutPatientsInput";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { WorkflowCreateNestedManyWithoutPatientsInput } from "./WorkflowCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  dateOfBirth: Date;
  firstName: string;
  formSubmissions?: FormSubmissionCreateNestedManyWithoutPatientsInput;
  lastName: string;
  messages?: MessageCreateNestedManyWithoutPatientsInput;
  mobileNumber: string;
  nhsNumber?: string | null;
  practice?: PracticeWhereUniqueInput | null;
  stripeCustomerId?: string | null;
  workflows?: WorkflowCreateNestedManyWithoutPatientsInput;
};
