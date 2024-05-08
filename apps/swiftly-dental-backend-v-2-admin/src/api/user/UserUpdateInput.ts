import { PracticeUpdateManyWithoutUsersInput } from "./PracticeUpdateManyWithoutUsersInput";
import { PracticeToUserUpdateManyWithoutUsersInput } from "./PracticeToUserUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  blocked?: boolean | null;
  confirmed?: boolean | null;
  email?: string | null;
  name?: string | null;
  password?: string;
  practices?: PracticeUpdateManyWithoutUsersInput;
  practiceToUsers?: PracticeToUserUpdateManyWithoutUsersInput;
  provider?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
