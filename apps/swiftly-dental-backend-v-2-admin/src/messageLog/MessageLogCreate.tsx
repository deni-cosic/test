import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MessageTitle } from "../message/MessageTitle";

export const MessageLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <ReferenceInput source="message.id" reference="Message" label="Message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <TextInput label="Mobile Number" source="mobileNumber" />
        <TextInput label="Sender Id" source="senderId" />
        <DateTimeInput label="Sent On" source="sentOn" />
      </SimpleForm>
    </Create>
  );
};
