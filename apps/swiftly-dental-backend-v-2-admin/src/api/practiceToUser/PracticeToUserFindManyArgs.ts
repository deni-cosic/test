import { PracticeToUserWhereInput } from "./PracticeToUserWhereInput";
import { PracticeToUserOrderByInput } from "./PracticeToUserOrderByInput";

export type PracticeToUserFindManyArgs = {
  where?: PracticeToUserWhereInput;
  orderBy?: Array<PracticeToUserOrderByInput>;
  skip?: number;
  take?: number;
};
