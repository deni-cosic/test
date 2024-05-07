import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PracticeListRelationFilter } from "../practice/PracticeListRelationFilter";

export type FeaturePermissionWhereInput = {
  analytics?: BooleanFilter;
  createdAt?: DateTimeFilter;
  dentalAdviceLink?: BooleanFilter;
  dentalSubscriptions?: BooleanFilter;
  form?: BooleanFilter;
  id?: StringFilter;
  leads?: BooleanNullableFilter;
  messageTemplate?: BooleanFilter;
  practiceInfoLink?: BooleanFilter;
  practices?: PracticeListRelationFilter;
  requestFeedback?: BooleanFilter;
  requestPayment?: BooleanFilter;
  sendDocument?: BooleanFilter;
  sendMessageToMany?: BooleanNullableFilter;
  updatedAt?: DateTimeFilter;
  videoCall?: BooleanFilter;
  workflows?: BooleanNullableFilter;
};
