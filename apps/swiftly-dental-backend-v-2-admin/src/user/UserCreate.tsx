import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PracticeTitle } from "../practice/PracticeTitle";
import { PracticeToUserTitle } from "../practiceToUser/PracticeToUserTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Blocked" source="blocked" />
        <BooleanInput label="Confirmed" source="confirmed" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="practices"
          reference="Practice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PracticeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="practiceToUsers"
          reference="PracticeToUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PracticeToUserTitle} />
        </ReferenceArrayInput>
        <TextInput label="Provider" source="provider" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
