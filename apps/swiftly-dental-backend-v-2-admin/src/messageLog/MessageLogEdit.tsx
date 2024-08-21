import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MessageTitle } from "../message/MessageTitle";

export const MessageLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <ReferenceInput source="message.id" reference="Message" label="Message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <TextInput label="Mobile Number" source="mobileNumber" />
        <TextInput label="Sender Id" source="senderId" />
        <DateTimeInput label="Sent On" source="sentOn" />
      </SimpleForm>
    </Edit>
  );
};
