import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PracticeListRelationFilter } from "../practice/PracticeListRelationFilter";

export type UserWhereInput = {
  blocked?: BooleanNullableFilter;
  confirmed?: BooleanNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  practices?: PracticeListRelationFilter;
  provider?: StringNullableFilter;
  username?: StringFilter;
};
