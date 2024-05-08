import { PracticeCreateNestedManyWithoutUsersInput } from "./PracticeCreateNestedManyWithoutUsersInput";
import { PracticeToUserCreateNestedManyWithoutUsersInput } from "./PracticeToUserCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  blocked?: boolean | null;
  confirmed?: boolean | null;
  email?: string | null;
  name?: string | null;
  password: string;
  practices?: PracticeCreateNestedManyWithoutUsersInput;
  practiceToUsers?: PracticeToUserCreateNestedManyWithoutUsersInput;
  provider?: string | null;
  roles: InputJsonValue;
  username: string;
};
