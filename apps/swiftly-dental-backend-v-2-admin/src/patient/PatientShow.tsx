import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PATIENT_TITLE_FIELD } from "./PatientTitle";
import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FormSubmission"
          target="patientId"
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
            <TextField label="Request Sent Id" source="requestSentId" />
            <TextField label="Requested By" source="requestedBy" />
            <BooleanField label="Seen" source="seen" />
            <TextField label="Submission Id" source="submissionId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="patientId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Message Type" source="messageType" />
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
            <TextField label="Provider" source="provider" />
            <TextField label="Provider Id" source="providerId" />
            <TextField label="Queue Item Id" source="queueItemId" />
            <ReferenceField label="Sent By" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sent On" source="sentOn" />
            <TextField label="Sms Count" source="smsCount" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Workflow"
          target="patientId"
          label="Workflows"
        >
          <Datagrid rowClick="show">
            <TextField label="Anchor Date" source="anchorDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
