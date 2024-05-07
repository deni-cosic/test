export type Link = {
  category: string | null;
  createdAt: Date;
  displayName: string;
  enabled: boolean;
  id: string;
  sector?: "Dental" | "GP";
  updatedAt: Date;
  url: string;
};
