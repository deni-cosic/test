import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PracticeTitle } from "../practice/PracticeTitle";
import { WorkflowTemplateStepTitle } from "../workflowTemplateStep/WorkflowTemplateStepTitle";

export const WorkflowTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="practice.id"
          reference="Practice"
          label="Practice"
        >
          <SelectInput optionText={PracticeTitle} />
        </ReferenceInput>
        <SelectInput
          source="sector"
          label="Sector"
          choices={[
            { label: "Dental", value: "Dental" },
            { label: "GP", value: "GP" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="workflowTemplateSteps"
          reference="WorkflowTemplateStep"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowTemplateStepTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
