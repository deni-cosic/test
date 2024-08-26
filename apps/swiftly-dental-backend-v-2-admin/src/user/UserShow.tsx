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

import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Blocked" source="blocked" />
        <BooleanField label="Confirmed" source="confirmed" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Provider" source="provider" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Message"
          target="sentById"
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
      </SimpleShowLayout>
    </Show>
  );
};
