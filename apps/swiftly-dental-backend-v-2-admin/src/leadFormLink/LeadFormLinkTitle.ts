import { LeadFormLink as TLeadFormLink } from "../api/leadFormLink/LeadFormLink";

export const LEADFORMLINK_TITLE_FIELD = "name";

export const LeadFormLinkTitle = (record: TLeadFormLink): string => {
  return record.name?.toString() || String(record.id);
};
