import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";

export const LeadFormSubmissionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <BooleanField label="Email Consented" source="emailConsented" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Interests" source="interests" />
        <TextField label="Last Name" source="lastName" />
        <BooleanField label="Marketing Consented" source="marketingConsented" />
        <TextField label="Mobile Number" source="mobileNumber" />
        <BooleanField
          label="Only Interests Consented"
          source="onlyInterestsConsented"
        />
        <ReferenceField
          label="Pracitice"
          source="practice.id"
          reference="Practice"
        >
          <TextField source={PRACTICE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Sms Consented" source="smsConsented" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
