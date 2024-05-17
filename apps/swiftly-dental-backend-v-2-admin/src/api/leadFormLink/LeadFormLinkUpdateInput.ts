import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type LeadFormLinkUpdateInput = {
  name?: string;
  practice?: PracticeWhereUniqueInput | null;
  sector?: "Dental" | "GP";
  url?: string;
};
