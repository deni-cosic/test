import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="category"
          label="Category"
          choices={[
            { label: "Conditions", value: "conditions" },
            { label: "Live Well", value: "live_well" },
            { label: "Tools", value: "Tools" },
            { label: "Video", value: "video" },
            {
              label: "Common Health Questions",
              value: "common_health_questions",
            },
            { label: "Start 4 Life", value: "start_4_life" },
            { label: "medicines", value: "Medicines" },
          ]}
          optionText="label"
          allowEmpty
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
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
