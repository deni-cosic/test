import { PracticeToUser as TPracticeToUser } from "../api/practiceToUser/PracticeToUser";

export const PRACTICETOUSER_TITLE_FIELD = "id";

export const PracticeToUserTitle = (record: TPracticeToUser): string => {
  return record.id?.toString() || String(record.id);
};
