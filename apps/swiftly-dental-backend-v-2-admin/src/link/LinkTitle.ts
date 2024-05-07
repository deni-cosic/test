import { Link as TLink } from "../api/link/Link";

export const LINK_TITLE_FIELD = "displayName";

export const LinkTitle = (record: TLink): string => {
  return record.displayName?.toString() || String(record.id);
};
