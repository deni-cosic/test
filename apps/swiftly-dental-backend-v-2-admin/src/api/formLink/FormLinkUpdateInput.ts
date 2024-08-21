import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type FormLinkUpdateInput = {
  displayName?: string;
  enabled?: boolean;
  message?: string;
  practice?: PracticeWhereUniqueInput | null;
  sector?: "Dental" | "GP";
  url?: string;
};
