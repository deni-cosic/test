import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { PracticeWhereUniqueInput } from "../practice/PracticeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type FormSubmissionWhereInput = {
  createdAt?: DateTimeFilter;
  formId?: StringNullableFilter;
  formTitle?: StringFilter;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  practice?: PracticeWhereUniqueInput;
  receivedAt?: DateTimeNullableFilter;
  requestSentId?: StringNullableFilter;
  requestedBy?: StringNullableFilter;
  seen?: BooleanNullableFilter;
  submissionId?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
