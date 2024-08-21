import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORKFLOWTEMPLATE_TITLE_FIELD } from "../workflowTemplate/WorkflowTemplateTitle";

export const WorkflowTemplateStepList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkflowTemplateSteps"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
