import { Practice as TPractice } from "../api/practice/Practice";

export const PRACTICE_TITLE_FIELD = "name";

export const PracticeTitle = (record: TPractice): string => {
  return record.name?.toString() || String(record.id);
};
