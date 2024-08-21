import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HelpLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
