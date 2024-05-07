import { PracticeCreateNestedManyWithoutUsersInput } from "./PracticeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  practices?: PracticeCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
