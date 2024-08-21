import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PracticeTitle } from "../practice/PracticeTitle";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Contacted" source="contacted" />
        <TextInput label="Converted Client Id" source="convertedClientId" />
        <DateInput label="Date Of Birth" source="dateOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <BooleanInput label="Email Consented" source="emailConsented" />
        <TextInput label="First Name" source="firstName" />
        <div />
        <TextInput label="Last Name" source="lastName" />
        <BooleanInput label="Marketing Consented" source="marketingConsented" />
        <DateTimeInput label="Meeting Date" source="meetingDate" />
        <TextInput label="Mobile Number" source="mobileNumber" />
        <BooleanInput
          label="Only Interests Consented"
          source="onlyInterestsConsented"
        />
        <div />
        <TextInput label="Platform Source" source="platformSource" />
        <ReferenceInput
          source="practice.id"
          reference="Practice"
          label="Practice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
