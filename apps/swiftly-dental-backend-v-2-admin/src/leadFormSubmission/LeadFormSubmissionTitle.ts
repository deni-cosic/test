import { LeadFormSubmission as TLeadFormSubmission } from "../api/leadFormSubmission/LeadFormSubmission";

export const LEADFORMSUBMISSION_TITLE_FIELD = "firstName";

export const LeadFormSubmissionTitle = (
  record: TLeadFormSubmission
): string => {
  return record.firstName?.toString() || String(record.id);
};
