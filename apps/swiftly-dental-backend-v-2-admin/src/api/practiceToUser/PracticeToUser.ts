import { Practice } from "../practice/Practice";
import { User } from "../user/User";

export type PracticeToUser = {
  id: string;
  practice?: Practice | null;
  user?: User | null;
};
