export type LinkCreateInput = {
  category?: string | null;
  displayName: string;
  enabled: boolean;
  sector: "Dental" | "GP";
  url: string;
};
