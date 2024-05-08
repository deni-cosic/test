export type Link = {
  category?:
    | "conditions"
    | "live_well"
    | "Tools"
    | "video"
    | "common_health_questions"
    | "start_4_life"
    | "Medicines"
    | null;
  createdAt: Date;
  displayName: string;
  enabled: boolean;
  id: string;
  sector?: "Dental" | "GP";
  updatedAt: Date;
  url: string;
};
