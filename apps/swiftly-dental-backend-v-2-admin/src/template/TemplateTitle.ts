import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "displayName";

export const TemplateTitle = (record: TTemplate): string => {
  return record.displayName?.toString() || String(record.id);
};
