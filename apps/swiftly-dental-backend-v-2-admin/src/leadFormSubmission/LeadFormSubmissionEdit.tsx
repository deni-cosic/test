import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PracticeTitle } from "../practice/PracticeTitle";

export const LeadFormSubmissionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" />
        <BooleanInput label="Email Consented" source="emailConsented" />
        <TextInput label="First Name" source="firstName" />
        <div />
        <TextInput label="Last Name" source="lastName" />
        <BooleanInput label="Marketing Consented" source="marketingConsented" />
        <TextInput label="Mobile Number" source="mobileNumber" />
        <BooleanInput
          label="Only Interests Consented"
          source="onlyInterestsConsented"
        />
        <ReferenceInput
          source="pracitice.id"
          reference="Practice"
          label="Pracitice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
        <BooleanInput label="Sms Consented" source="smsConsented" />
      </SimpleForm>
    </Edit>
  );
};
