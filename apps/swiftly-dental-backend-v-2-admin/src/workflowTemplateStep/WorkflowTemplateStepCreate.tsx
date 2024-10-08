import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkflowTemplateTitle } from "../workflowTemplate/WorkflowTemplateTitle";

export const WorkflowTemplateStepCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Message" source="message" />
        <TextInput
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
    </Create>
  );
};
