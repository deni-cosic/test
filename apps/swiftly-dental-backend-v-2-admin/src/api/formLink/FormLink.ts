export type FormLink = {
  createdAt: Date;
  displayName: string;
  enabled: boolean;
  id: string;
  message: string;
  sector?: "Dental" | "GP";
  updatedAt: Date;
  url: string;
};
