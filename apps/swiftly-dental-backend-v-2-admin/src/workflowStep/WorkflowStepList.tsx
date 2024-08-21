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
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";

export const WorkflowStepList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkflowSteps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Executed On" source="executedOn" />
        <TextField label="Execution Date" source="executionDate" />
        <TextField label="ID" source="id" />
        <TextField label="Message" source="message" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Workflow"
          source="workflow.id"
          reference="Workflow"
        >
          <TextField source={WORKFLOW_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
