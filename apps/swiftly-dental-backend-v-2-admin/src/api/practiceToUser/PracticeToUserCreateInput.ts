import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PracticeToUserCreateInput = {
  practice?: PracticeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
