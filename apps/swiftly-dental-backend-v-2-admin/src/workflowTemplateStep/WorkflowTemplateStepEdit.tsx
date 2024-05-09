import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
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
    </Edit>
  );
};
