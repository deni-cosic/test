import { FormSubmission } from "../formSubmission/FormSubmission";
import { Message } from "../message/Message";
import { Practice } from "../practice/Practice";
import { Workflow } from "../workflow/Workflow";

export type Patient = {
  createdAt: Date;
  dateOfBirth: Date;
  firstName: string;
  formSubmissions?: Array<FormSubmission>;
  id: string;
  lastName: string;
  messages?: Array<Message>;
  mobileNumber: string;
  nhsNumber: string | null;
  practice?: Practice | null;
  stripeCustomerId: string | null;
  updatedAt: Date;
  workflows?: Array<Workflow>;
};
