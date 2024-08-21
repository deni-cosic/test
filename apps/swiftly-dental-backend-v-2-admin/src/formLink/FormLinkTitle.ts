import { FormLink as TFormLink } from "../api/formLink/FormLink";

export const FORMLINK_TITLE_FIELD = "displayName";

export const FormLinkTitle = (record: TFormLink): string => {
  return record.displayName?.toString() || String(record.id);
};
