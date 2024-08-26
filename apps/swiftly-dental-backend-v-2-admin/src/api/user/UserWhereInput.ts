import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { PracticeListRelationFilter } from "../practice/PracticeListRelationFilter";

export type UserWhereInput = {
  blocked?: BooleanNullableFilter;
  confirmed?: BooleanNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  practices?: PracticeListRelationFilter;
  provider?: StringNullableFilter;
  username?: StringFilter;
};
