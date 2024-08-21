import { FormSubmission as TFormSubmission } from "../api/formSubmission/FormSubmission";

export const FORMSUBMISSION_TITLE_FIELD = "formTitle";

export const FormSubmissionTitle = (record: TFormSubmission): string => {
  return record.formTitle?.toString() || String(record.id);
};
