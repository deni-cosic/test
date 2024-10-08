import { Practice } from "../practice/Practice";
import { JsonValue } from "type-fest";

export type User = {
  blocked: boolean | null;
  confirmed: boolean | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  practices?: Array<Practice>;
  provider: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
