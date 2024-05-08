import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";

export const LeadList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leads"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
