import { InputJsonValue } from "../../types";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type LeadCreateInput = {
  contacted: boolean;
  convertedClientId?: string | null;
  dateOfBirth: Date;
  email: string;
  emailConsented?: boolean | null;
  firstName: string;
  interests: InputJsonValue;
  lastName: string;
  marketingConsented: boolean;
  meetingDate?: Date | null;
  mobileNumber: string;
  onlyInterestsConsented?: boolean | null;
  otherFields?: InputJsonValue;
  platformSource: string;
  practice: PracticeWhereUniqueInput;
};
