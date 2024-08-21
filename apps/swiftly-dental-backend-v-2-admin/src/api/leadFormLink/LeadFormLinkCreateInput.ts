import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type LeadFormLinkCreateInput = {
  name: string;
  practice?: PracticeWhereUniqueInput | null;
  sector: "Dental" | "GP";
  url: string;
};
