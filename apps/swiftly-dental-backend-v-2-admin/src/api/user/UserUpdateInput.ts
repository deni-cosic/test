import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { PracticeUpdateManyWithoutUsersInput } from "./PracticeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  blocked?: boolean | null;
  confirmed?: boolean | null;
  email?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  name?: string | null;
  password?: string;
  practices?: PracticeUpdateManyWithoutUsersInput;
  provider?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
