import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { FeaturePermissionTitle } from "../featurePermission/FeaturePermissionTitle";
import { FormSubmissionTitle } from "../formSubmission/FormSubmissionTitle";
import { LeadFormSubmissionTitle } from "../leadFormSubmission/LeadFormSubmissionTitle";
import { LeadTitle } from "../lead/LeadTitle";
import { PatientTitle } from "../patient/PatientTitle";
import { PracticeInfoLinkTitle } from "../practiceInfoLink/PracticeInfoLinkTitle";
import { WorkflowTemplateTitle } from "../workflowTemplate/WorkflowTemplateTitle";

export const PracticeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address Line1" source="addressLine1" />
        <TextInput label="Address Line2" source="addressLine2" />
        <TextInput label="Address Line3" source="addressLine3" />
        <ReferenceInput
          source="featurePermission.id"
          reference="FeaturePermission"
          label="Feature Permission"
        >
          <SelectInput optionText={FeaturePermissionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="formSubmissions"
          reference="FormSubmission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FormSubmissionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Google Place Id" source="googlePlaceId" />
        <ReferenceArrayInput
          source="leadFormSubmissions"
          reference="LeadFormSubmission"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeadFormSubmissionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="leads"
          reference="Lead"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeadTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Nhs Review Url" source="nhsReviewUrl" />
        <TextInput label="Ods Code" source="odsCode" />
        <ReferenceArrayInput
          source="patients"
          reference="Patient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PatientTitle} />
        </ReferenceArrayInput>
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="Postcode" source="postcode" />
        <ReferenceArrayInput
          source="practiceInfoLinks"
          reference="PracticeInfoLink"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PracticeInfoLinkTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Remind After" source="remindAfter" />
        <DateTimeInput label="Reminded At" source="remindedAt" />
        <NumberInput step={1} label="Remind Every" source="remindEvery" />
        <SelectInput
          source="sector"
          label="Sector"
          choices={[
            { label: "Dental", value: "Dental" },
            { label: "GP", value: "GP" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Sender Id" source="senderId" />
        <TextInput
          label="Stripe Connected Account Id"
          source="stripeConnectedAccountId"
        />
        <TextInput label="Website" source="website" />
        <ReferenceArrayInput
          source="workflowTemplates"
          reference="WorkflowTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowTemplateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
