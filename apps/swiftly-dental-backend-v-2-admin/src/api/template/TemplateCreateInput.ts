export type TemplateCreateInput = {
  category?: string | null;
  displayName: string;
  enabled: boolean;
  sector: "Dental" | "GP";
  text: string;
};
