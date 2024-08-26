import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";

export const MessageLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Content" source="content" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Message" source="message.id" reference="Message">
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Mobile Number" source="mobileNumber" />
        <TextField label="Sender Id" source="senderId" />
        <TextField label="Sent On" source="sentOn" />
      </SimpleShowLayout>
    </Show>
  );
};
