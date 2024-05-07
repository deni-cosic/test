import { PracticeWhereInput } from "./PracticeWhereInput";
import { PracticeOrderByInput } from "./PracticeOrderByInput";

export type PracticeFindManyArgs = {
  where?: PracticeWhereInput;
  orderBy?: Array<PracticeOrderByInput>;
  skip?: number;
  take?: number;
};
