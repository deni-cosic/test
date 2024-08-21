import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FormSubmissionTitle } from "../formSubmission/FormSubmissionTitle";
import { MessageTitle } from "../message/MessageTitle";
import { PracticeTitle } from "../practice/PracticeTitle";
import { WorkflowTitle } from "../workflow/WorkflowTitle";

export const PatientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date Of Birth" source="dateOfBirth" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="formSubmissions"
          reference="FormSubmission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FormSubmissionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Mobile Number" source="mobileNumber" />
        <TextInput label="Nhs Number" source="nhsNumber" />
        <ReferenceInput
          source="practice.id"
          reference="Practice"
          label="Practice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
        <TextInput label="Stripe Customer Id" source="stripeCustomerId" />
        <ReferenceArrayInput
          source="workflows"
          reference="Workflow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
