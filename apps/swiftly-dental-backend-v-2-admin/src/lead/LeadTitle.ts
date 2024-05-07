import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "firstName";

export const LeadTitle = (record: TLead): string => {
  return record.firstName?.toString() || String(record.id);
};
