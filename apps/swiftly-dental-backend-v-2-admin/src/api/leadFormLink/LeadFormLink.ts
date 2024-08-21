import { Practice } from "../practice/Practice";

export type LeadFormLink = {
  createdAt: Date;
  id: string;
  name: string;
  practice?: Practice | null;
  sector?: "Dental" | "GP";
  updatedAt: Date;
  url: string;
};
