import { PracticeCreateNestedManyWithoutUsersInput } from "./PracticeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  blocked?: boolean | null;
  confirmed?: boolean | null;
  email?: string | null;
  name?: string | null;
  password: string;
  practices?: PracticeCreateNestedManyWithoutUsersInput;
  provider?: string | null;
  roles: InputJsonValue;
  username: string;
};
