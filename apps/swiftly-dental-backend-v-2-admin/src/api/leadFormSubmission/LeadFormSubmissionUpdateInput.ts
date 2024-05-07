import { InputJsonValue } from "../../types";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type LeadFormSubmissionUpdateInput = {
  email?: string;
  emailConsented?: boolean;
  firstName?: string;
  interests?: InputJsonValue;
  lastName?: string;
  marketingConsented?: boolean;
  mobileNumber?: string;
  onlyInterestsConsented?: boolean;
  pracitice?: PracticeWhereUniqueInput;
  smsConsented?: boolean;
};
