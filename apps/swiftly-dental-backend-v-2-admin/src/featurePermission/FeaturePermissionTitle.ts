import { FeaturePermission as TFeaturePermission } from "../api/featurePermission/FeaturePermission";

export const FEATUREPERMISSION_TITLE_FIELD = "id";

export const FeaturePermissionTitle = (record: TFeaturePermission): string => {
  return record.id?.toString() || String(record.id);
};
