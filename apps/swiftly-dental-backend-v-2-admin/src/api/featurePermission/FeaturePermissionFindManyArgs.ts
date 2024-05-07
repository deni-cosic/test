import { FeaturePermissionWhereInput } from "./FeaturePermissionWhereInput";
import { FeaturePermissionOrderByInput } from "./FeaturePermissionOrderByInput";

export type FeaturePermissionFindManyArgs = {
  where?: FeaturePermissionWhereInput;
  orderBy?: Array<FeaturePermissionOrderByInput>;
  skip?: number;
  take?: number;
};
