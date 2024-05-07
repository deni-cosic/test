import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubscriptionPlansStripeProductTitle } from "../subscriptionPlansStripeProduct/SubscriptionPlansStripeProductTitle";

export const SubscriptionPlanCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Practice" source="practice" />
        <ReferenceArrayInput
          source="stripeProducts"
          reference="SubscriptionPlansStripeProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionPlansStripeProductTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
