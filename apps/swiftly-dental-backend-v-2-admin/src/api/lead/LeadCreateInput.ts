import { InputJsonValue } from "../../types";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type LeadCreateInput = {
  contacted: boolean;
  convertedClientId?: string | null;
  dateOfBirth: string;
  email: string;
  emailConsented?: boolean | null;
  firstName: string;
  interests: string;
  lastName: string;
  marketingConsented: boolean;
  meetingDate?: Date | null;
  mobileNumber: string;
  onlyInterestsConsented?: boolean | null;
  otherFields?: InputJsonValue;
  platformSource: string;
  practice: PracticeWhereUniqueInput;
  smsConsented?: boolean | null;
};
