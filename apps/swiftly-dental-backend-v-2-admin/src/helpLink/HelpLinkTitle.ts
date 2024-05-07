import { HelpLink as THelpLink } from "../api/helpLink/HelpLink";

export const HELPLINK_TITLE_FIELD = "displayName";

export const HelpLinkTitle = (record: THelpLink): string => {
  return record.displayName?.toString() || String(record.id);
};
