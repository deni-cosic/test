import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { WorkflowStepTitle } from "../workflowStep/WorkflowStepTitle";

export const WorkflowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Anchor Date" source="anchorDate" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="steps"
          reference="WorkflowStep"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowStepTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
