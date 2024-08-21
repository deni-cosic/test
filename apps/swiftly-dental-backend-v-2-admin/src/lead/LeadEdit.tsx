import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PracticeTitle } from "../practice/PracticeTitle";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Contacted" source="contacted" />
        <TextInput label="Converted Client Id" source="convertedClientId" />
        <DateTimeInput label="Date Of Birth" source="dateOfBirth" />
        <TextInput label="Email" source="email" />
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
    </Edit>
  );
};
