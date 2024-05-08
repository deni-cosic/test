export type LinkCreateInput = {
  category?:
    | "conditions"
    | "live_well"
    | "Tools"
    | "video"
    | "common_health_questions"
    | "start_4_life"
    | "Medicines"
    | null;
  displayName: string;
  enabled: boolean;
  sector: "Dental" | "GP";
  url: string;
};
