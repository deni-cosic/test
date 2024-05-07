import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SubscriptionPlanTitle } from "../subscriptionPlan/SubscriptionPlanTitle";

export const SubscriptionPlansStripeProductCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Price Amount" source="priceAmount" />
        <TextInput label="Price Id" source="priceId" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput
          source="subscriptionPlan.id"
          reference="SubscriptionPlan"
          label="Subscription Plan"
        >
          <SelectInput optionText={SubscriptionPlanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
