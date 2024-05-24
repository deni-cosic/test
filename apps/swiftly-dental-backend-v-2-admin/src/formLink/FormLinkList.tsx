import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";

export const FormLinkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FormLinks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Display Name" source="displayName" />
        <BooleanField label="Enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="Message" source="message" />
        <ReferenceField
          label="Practice"
          source="practice.id"
          reference="Practice"
        >
          <TextField source={PRACTICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sector" source="sector" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url" source="url" />
      </Datagrid>
    </List>
  );
};
