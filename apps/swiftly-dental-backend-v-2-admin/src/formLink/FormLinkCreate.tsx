import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PracticeTitle } from "../practice/PracticeTitle";

export const FormLinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Display Name" source="displayName" />
        <BooleanInput label="Enabled" source="enabled" />
        <TextInput label="Message" source="message" />
        <ReferenceInput
          source="practice.id"
          reference="Practice"
          label="Practice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
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
