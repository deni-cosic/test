import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PracticeToUserUpdateInput = {
  practice?: PracticeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
