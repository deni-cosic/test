import { MessageLog as TMessageLog } from "../api/messageLog/MessageLog";

export const MESSAGELOG_TITLE_FIELD = "content";

export const MessageLogTitle = (record: TMessageLog): string => {
  return record.content?.toString() || String(record.id);
};
