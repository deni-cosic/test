import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { PracticeCreateNestedManyWithoutUsersInput } from "./PracticeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  blocked?: boolean | null;
  confirmed?: boolean | null;
  email?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  name?: string | null;
  password: string;
  practices?: PracticeCreateNestedManyWithoutUsersInput;
  provider?: string | null;
  roles: InputJsonValue;
  username: string;
};
