import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type FormLinkCreateInput = {
  displayName: string;
  enabled: boolean;
  message: string;
  practice?: PracticeWhereUniqueInput | null;
  sector: "Dental" | "GP";
  url: string;
};
