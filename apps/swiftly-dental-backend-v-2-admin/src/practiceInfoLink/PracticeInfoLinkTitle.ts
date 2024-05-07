import { PracticeInfoLink as TPracticeInfoLink } from "../api/practiceInfoLink/PracticeInfoLink";

export const PRACTICEINFOLINK_TITLE_FIELD = "displayName";

export const PracticeInfoLinkTitle = (record: TPracticeInfoLink): string => {
  return record.displayName?.toString() || String(record.id);
};
