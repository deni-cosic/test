import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { MessageLogTitle } from "../messageLog/MessageLogTitle";
import { PatientTitle } from "../patient/PatientTitle";
import { PracticeTitle } from "../practice/PracticeTitle";
import { UserTitle } from "../user/UserTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <ReferenceArrayInput
          source="messageLog"
          reference="MessageLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageLogTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="messageType"
          label="Message Type"
          choices={[
            { label: "Instant", value: "Instant" },
            { label: "Delayed", value: "Delayed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="practice.id"
          reference="Practice"
          label="Practice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
        <TextInput label="Provider" source="provider" />
        <TextInput label="Provider Id" source="providerId" />
        <TextInput label="Queue Item Id" source="queueItemId" />
        <ReferenceInput source="sentBy.id" reference="User" label="Sent By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Sent On" source="sentOn" />
        <NumberInput step={1} label="Sms Count" source="smsCount" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Pending", value: "Pending" },
            { label: "Delivered", value: "Delivered" },
            { label: "Failed", value: "Failed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
