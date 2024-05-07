import { HelpLinkWhereInput } from "./HelpLinkWhereInput";
import { HelpLinkOrderByInput } from "./HelpLinkOrderByInput";

export type HelpLinkFindManyArgs = {
  where?: HelpLinkWhereInput;
  orderBy?: Array<HelpLinkOrderByInput>;
  skip?: number;
  take?: number;
};
