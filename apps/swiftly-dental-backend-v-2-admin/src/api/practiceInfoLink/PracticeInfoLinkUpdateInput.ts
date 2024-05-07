import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";

export type PracticeInfoLinkUpdateInput = {
  category?: string;
  displayName?: string;
  message?: string | null;
  practice?: PracticeWhereUniqueInput | null;
  url?: string | null;
};
