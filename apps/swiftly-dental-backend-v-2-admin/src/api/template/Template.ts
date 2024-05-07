export type Template = {
  category: string | null;
  createdAt: Date;
  displayName: string;
  enabled: boolean;
  id: string;
  sector?: "Dental" | "GP";
  text: string;
  updatedAt: Date;
};
