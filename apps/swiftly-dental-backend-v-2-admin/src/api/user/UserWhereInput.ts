import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PracticeListRelationFilter } from "../practice/PracticeListRelationFilter";
import { PracticeToUserListRelationFilter } from "../practiceToUser/PracticeToUserListRelationFilter";

export type UserWhereInput = {
  blocked?: BooleanNullableFilter;
  confirmed?: BooleanNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  practices?: PracticeListRelationFilter;
  practiceToUsers?: PracticeToUserListRelationFilter;
  provider?: StringNullableFilter;
  username?: StringFilter;
};
