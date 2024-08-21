import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PracticeTitle } from "../practice/PracticeTitle";

export const FeaturePermissionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Analytics" source="analytics" />
        <BooleanInput label="Dental Advice Link" source="dentalAdviceLink" />
        <BooleanInput
          label="Dental Subscriptions"
          source="dentalSubscriptions"
        />
        <BooleanInput label="Form" source="form" />
        <BooleanInput label="Leads" source="leads" />
        <BooleanInput label="Message Template" source="messageTemplate" />
        <BooleanInput label="Practice Info Link" source="practiceInfoLink" />
        <ReferenceArrayInput
          source="practices"
          reference="Practice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PracticeTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Request Feedback" source="requestFeedback" />
        <BooleanInput label="Request Payment" source="requestPayment" />
        <BooleanInput label="Send Document" source="sendDocument" />
        <BooleanInput label="Send Message To Many" source="sendMessageToMany" />
        <BooleanInput label="Video Call" source="videoCall" />
        <BooleanInput label="Workflows" source="workflows" />
      </SimpleForm>
    </Create>
  );
};
