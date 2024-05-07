import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const FormLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Display Name" source="displayName" />
        <BooleanInput label="Enabled" source="enabled" />
        <TextInput label="Message" source="message" />
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
    </Edit>
  );
};
