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
} from "react-admin";

import { MESSAGE_TITLE_FIELD } from "./MessageTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Message Type" source="messageType" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
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
        <ReferenceManyField
          reference="MessageLog"
          target="messageId"
          label="MessageLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="Content" source="content" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Message"
              source="message.id"
              reference="Message"
            >
              <TextField source={MESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Mobile Number" source="mobileNumber" />
            <TextField label="Sender Id" source="senderId" />
            <TextField label="Sent On" source="sentOn" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
