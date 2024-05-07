import { Practice } from "../practice/Practice";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  practices?: Array<Practice>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
