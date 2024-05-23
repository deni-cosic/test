import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PracticeListRelationFilter } from "../practice/PracticeListRelationFilter";

export type FeaturePermissionWhereInput = {
  analytics?: BooleanNullableFilter;
  createdAt?: DateTimeFilter;
  dentalAdviceLink?: BooleanNullableFilter;
  dentalSubscriptions?: BooleanNullableFilter;
  form?: BooleanNullableFilter;
  id?: StringFilter;
  leads?: BooleanNullableFilter;
  messageTemplate?: BooleanNullableFilter;
  practiceInfoLink?: BooleanNullableFilter;
  practices?: PracticeListRelationFilter;
  requestFeedback?: BooleanNullableFilter;
  requestPayment?: BooleanNullableFilter;
  sendDocument?: BooleanNullableFilter;
  sendMessageToMany?: BooleanNullableFilter;
  updatedAt?: DateTimeFilter;
  videoCall?: BooleanNullableFilter;
  workflows?: BooleanNullableFilter;
};
