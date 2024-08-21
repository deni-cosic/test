import { Practice } from "../practice/Practice";

export type PracticeInfoLink = {
  category: string;
  createdAt: Date;
  displayName: string;
  id: string;
  message: string | null;
  practice?: Practice | null;
  updatedAt: Date;
  url: string | null;
};
