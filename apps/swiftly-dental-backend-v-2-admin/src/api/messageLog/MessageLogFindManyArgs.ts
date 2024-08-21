import { MessageLogWhereInput } from "./MessageLogWhereInput";
import { MessageLogOrderByInput } from "./MessageLogOrderByInput";

export type MessageLogFindManyArgs = {
  where?: MessageLogWhereInput;
  orderBy?: Array<MessageLogOrderByInput>;
  skip?: number;
  take?: number;
};
