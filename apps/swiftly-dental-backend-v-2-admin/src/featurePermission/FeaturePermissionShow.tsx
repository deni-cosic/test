import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FEATUREPERMISSION_TITLE_FIELD } from "./FeaturePermissionTitle";

export const FeaturePermissionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Practice"
          target="featurePermissionId"
          label="Practices"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
