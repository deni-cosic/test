export type Template = {
  category?: Array<
    "appointment" | "prescriptions" | "review" | "sample" | "test_results"
  >;
  createdAt: Date;
  displayName: string;
  enabled: boolean;
  id: string;
  sector?: "Dental" | "GP";
  text: string;
  updatedAt: Date;
};
