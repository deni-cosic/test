import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PracticeTitle } from "../practice/PracticeTitle";

export const PracticeInfoLinkCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Message" source="message" />
        <ReferenceInput
          source="practice.id"
          reference="Practice"
          label="Practice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
