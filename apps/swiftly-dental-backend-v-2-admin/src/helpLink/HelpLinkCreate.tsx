import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HelpLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
