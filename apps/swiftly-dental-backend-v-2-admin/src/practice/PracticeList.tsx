import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FEATUREPERMISSION_TITLE_FIELD } from "../featurePermission/FeaturePermissionTitle";

export const PracticeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Practices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address Line1" source="addressLine1" />
        <TextField label="Address Line2" source="addressLine2" />
        <TextField label="Address Line3" source="addressLine3" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Feature Permission"
          source="featurepermission.id"
          reference="FeaturePermission"
        >
          <TextField source={FEATUREPERMISSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Google Place Id" source="googlePlaceId" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Nhs Review Url" source="nhsReviewUrl" />
        <TextField label="Ods Code" source="odsCode" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Remind After" source="remindAfter" />
        <TextField label="Reminded At" source="remindedAt" />
        <TextField label="Remind Every" source="remindEvery" />
        <TextField label="Sector" source="sector" />
        <TextField label="Sender Id" source="senderId" />
        <TextField
          label="Stripe Connected Account Id"
          source="stripeConnectedAccountId"
        />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Website" source="website" />
      </Datagrid>
    </List>
  );
};
