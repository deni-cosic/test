import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const FeaturePermissionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FeaturePermissions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Analytics" source="analytics" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Dental Advice Link" source="dentalAdviceLink" />
        <BooleanField
          label="Dental Subscriptions"
          source="dentalSubscriptions"
        />
        <BooleanField label="Form" source="form" />
        <TextField label="ID" source="id" />
        <BooleanField label="Leads" source="leads" />
        <BooleanField label="Message Template" source="messageTemplate" />
        <BooleanField label="Practice Info Link" source="practiceInfoLink" />
        <BooleanField label="Request Feedback" source="requestFeedback" />
        <BooleanField label="Request Payment" source="requestPayment" />
        <BooleanField label="Send Document" source="sendDocument" />
        <BooleanField label="Send Message To Many" source="sendMessageToMany" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="Video Call" source="videoCall" />
        <BooleanField label="Workflows" source="workflows" />
      </Datagrid>
    </List>
  );
};
