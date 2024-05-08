import { StringFilter } from "../../util/StringFilter";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PracticeToUserWhereInput = {
  id?: StringFilter;
  practice?: PracticeWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
