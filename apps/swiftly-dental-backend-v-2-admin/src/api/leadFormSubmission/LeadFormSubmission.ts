import { JsonValue } from "type-fest";
import { Practice } from "../practice/Practice";

export type LeadFormSubmission = {
  createdAt: Date;
  email: string;
  emailConsented: boolean;
  firstName: string;
  id: string;
  interests: JsonValue;
  lastName: string;
  marketingConsented: boolean;
  mobileNumber: string;
  onlyInterestsConsented: boolean;
  pracitice?: Practice;
  smsConsented: boolean;
  updatedAt: Date;
};
