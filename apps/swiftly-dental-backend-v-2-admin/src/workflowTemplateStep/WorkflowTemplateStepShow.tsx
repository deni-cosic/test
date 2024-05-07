import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WORKFLOWTEMPLATE_TITLE_FIELD } from "../workflowTemplate/WorkflowTemplateTitle";

export const WorkflowTemplateStepShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Message" source="message" />
        <TextField
          label="Time Offset In Seconds"
          source="timeOffsetInSeconds"
        />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Workflow Template"
          source="workflowtemplate.id"
          reference="WorkflowTemplate"
        >
          <TextField source={WORKFLOWTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
