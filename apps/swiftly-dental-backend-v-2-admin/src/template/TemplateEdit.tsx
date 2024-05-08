import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const TemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Category"
          source="category"
          choices={[
            { label: "Appointment", value: "appointment" },
            { label: "Prescriptions", value: "prescriptions" },
            { label: "Review", value: "review" },
            { label: "Sample", value: "sample" },
            { label: "Test Results", value: "test_results" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Display Name" source="displayName" />
        <BooleanInput label="Enabled" source="enabled" />
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
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
