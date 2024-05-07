import { JsonValue } from "type-fest";
import { Practice } from "../practice/Practice";

export type Lead = {
  contacted: boolean;
  convertedClientId: string | null;
  createdAt: Date;
  dateOfBirth: string;
  email: string;
  emailConsented: boolean | null;
  firstName: string;
  id: string;
  interests: string;
  lastName: string;
  marketingConsented: boolean;
  meetingDate: Date | null;
  mobileNumber: string;
  onlyInterestsConsented: boolean | null;
  otherFields: JsonValue;
  platformSource: string;
  practice?: Practice;
  smsConsented: boolean | null;
  updatedAt: Date;
};
