import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WORKFLOWTEMPLATE_TITLE_FIELD } from "./WorkflowTemplateTitle";
import { PRACTICE_TITLE_FIELD } from "../practice/PracticeTitle";

export const WorkflowTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Practice"
          source="practice.id"
          reference="Practice"
        >
          <TextField source={PRACTICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sector" source="sector" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="WorkflowTemplateStep"
          target="workflowTemplateId"
          label="WorkflowTemplateSteps"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
