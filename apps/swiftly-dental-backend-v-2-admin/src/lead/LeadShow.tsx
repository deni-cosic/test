import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Contacted" source="contacted" />
        <TextField label="Converted Client Id" source="convertedClientId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date Of Birth" source="dateOfBirth" />
        <TextField label="Email" source="email" />
        <BooleanField label="Email Consented" source="emailConsented" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Interests" source="interests" />
        <TextField label="Last Name" source="lastName" />
        <BooleanField label="Marketing Consented" source="marketingConsented" />
        <TextField label="Meeting Date" source="meetingDate" />
        <TextField label="Mobile Number" source="mobileNumber" />
        <BooleanField
          label="Only Interests Consented"
          source="onlyInterestsConsented"
        />
        <TextField label="Other Fields" source="otherFields" />
        <TextField label="Platform Source" source="platformSource" />
        <ReferenceField
          label="Practice"
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
