import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";

export const MessageLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MessageLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Content" source="content" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Message" source="message.id" reference="Message">
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Mobile Number" source="mobileNumber" />
        <TextField label="Sender Id" source="senderId" />
        <TextField label="Sent On" source="sentOn" />
      </Datagrid>
    </List>
  );
};
