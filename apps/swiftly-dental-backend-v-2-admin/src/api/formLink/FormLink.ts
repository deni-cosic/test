import { Practice } from "../practice/Practice";

export type FormLink = {
  createdAt: Date;
  displayName: string;
  enabled: boolean;
  id: string;
  message: string;
  practice?: Practice | null;
  sector?: "Dental" | "GP";
  updatedAt: Date;
  url: string;
};
