import { PracticeUpdateManyWithoutUsersInput } from "./PracticeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  practices?: PracticeUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
