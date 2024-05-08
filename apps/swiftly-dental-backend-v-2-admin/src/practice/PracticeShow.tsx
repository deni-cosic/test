import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { PRACTICE_TITLE_FIELD } from "./PracticeTitle";
import { FEATUREPERMISSION_TITLE_FIELD } from "../featurePermission/FeaturePermissionTitle";

export const PracticeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FormSubmission"
          target="practiceId"
          label="FormSubmissions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Form Id" source="formId" />
            <TextField label="Form Title" source="formTitle" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Practice"
              source="practice.id"
              reference="Practice"
            >
              <TextField source={PRACTICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Received At" source="receivedAt" />
            <TextField label="Requested By" source="requestedBy" />
            <TextField label="Request Sent Id" source="requestSentId" />
            <BooleanField label="Seen" source="seen" />
            <TextField label="Submission Id" source="submissionId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Lead" target="practiceId" label="Leads">
          <Datagrid rowClick="show">
            <BooleanField label="Contacted" source="contacted" />
            <TextField label="Converted Client Id" source="convertedClientId" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date Of Birth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <BooleanField label="Email Consented" source="emailConsented" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Interests" source="interests" />
            <TextField label="Last Name" source="lastName" />
            <BooleanField
              label="Marketing Consented"
              source="marketingConsented"
            />
            <TextField label="Meeting Date" source="meetingDate" />
            <TextField label="Mobile Number" source="mobileNumber" />
            <BooleanField
              label="Only Interests Consented"
              source="onlyInterestsConsented"
            />
            <TextField label="Other Fields" source="otherFields" />
            <TextField label="Platform Source" source="platformSource" />
            <ReferenceField
              label="Practice"
              source="practice.id"
              reference="Practice"
            >
              <TextField source={PRACTICE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Patient"
          target="practiceId"
          label="Patients"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date Of Birth" source="dateOfBirth" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Mobile Number" source="mobileNumber" />
            <TextField label="Nhs Number" source="nhsNumber" />
            <ReferenceField
              label="Practice"
              source="practice.id"
              reference="Practice"
            >
              <TextField source={PRACTICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Stripe Customer Id" source="stripeCustomerId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PracticeInfoLink"
          target="practiceId"
          label="PracticeInfoLinks"
        >
          <Datagrid rowClick="show">
            <TextField label="Category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Display Name" source="displayName" />
            <TextField label="ID" source="id" />
            <TextField label="Message" source="message" />
            <ReferenceField
              label="Practice"
              source="practice.id"
              reference="Practice"
            >
              <TextField source={PRACTICE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkflowTemplate"
          target="practiceId"
          label="WorkflowTemplates"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Practice"
              source="practice.id"
              reference="Practice"
            >
              <TextField source={PRACTICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sector" source="sector" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
