import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";

export const LeadFormSubmissionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LeadFormSubmissions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
