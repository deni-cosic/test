export type TemplateUpdateInput = {
  category?: Array<
    "appointment" | "prescriptions" | "review" | "sample" | "test_results"
  >;
  displayName?: string;
  enabled?: boolean;
  sector?: "Dental" | "GP";
  text?: string;
};
