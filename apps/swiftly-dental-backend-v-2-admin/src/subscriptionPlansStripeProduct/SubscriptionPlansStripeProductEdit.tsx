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

import { SubscriptionPlanTitle } from "../subscriptionPlan/SubscriptionPlanTitle";

export const SubscriptionPlansStripeProductEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
