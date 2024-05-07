import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUBSCRIPTIONPLAN_TITLE_FIELD } from "./SubscriptionPlanTitle";

export const SubscriptionPlanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Practice" source="practice" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SubscriptionPlansStripeProduct"
          target="subscriptionPlanId"
          label="SubscriptionPlansStripeProducts"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Price Amount" source="priceAmount" />
            <TextField label="Price Id" source="priceId" />
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="Subscription Plan"
              source="subscriptionplan.id"
              reference="SubscriptionPlan"
            >
              <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
