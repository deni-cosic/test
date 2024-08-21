import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { PracticeTitle } from "../practice/PracticeTitle";

export const FormSubmissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Form Id" source="formId" />
        <TextInput label="Form Title" source="formTitle" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="practice.id"
          reference="Practice"
          label="Practice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
        <DateTimeInput label="Received At" source="receivedAt" />
        <TextInput label="Requested By" source="requestedBy" />
        <TextInput label="Request Sent Id" source="requestSentId" />
        <BooleanInput label="Seen" source="seen" />
        <TextInput label="Submission Id" source="submissionId" />
      </SimpleForm>
    </Edit>
  );
};
