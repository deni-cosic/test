import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WorkflowTemplateTitle } from "../workflowTemplate/WorkflowTemplateTitle";

export const WorkflowTemplateStepEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Message" source="message" />
        <NumberInput
          step={1}
          label="Time Offset In Seconds"
          source="timeOffsetInSeconds"
        />
        <ReferenceInput
          source="workflowTemplate.id"
          reference="WorkflowTemplate"
          label="Workflow Template"
        >
          <SelectInput optionText={WorkflowTemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
