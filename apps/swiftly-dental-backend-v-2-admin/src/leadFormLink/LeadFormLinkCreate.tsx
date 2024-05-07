import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const LeadFormLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <SelectInput
          source="sector"
          label="Sector"
          choices={[
            { label: "Dental", value: "Dental" },
            { label: "GP", value: "GP" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
