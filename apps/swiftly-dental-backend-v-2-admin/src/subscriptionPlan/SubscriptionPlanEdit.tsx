import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubscriptionPlansStripeProductTitle } from "../subscriptionPlansStripeProduct/SubscriptionPlansStripeProductTitle";

export const SubscriptionPlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
