import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { FeaturePermissionTitle } from "../featurePermission/FeaturePermissionTitle";
import { FormLinkTitle } from "../formLink/FormLinkTitle";
import { FormSubmissionTitle } from "../formSubmission/FormSubmissionTitle";
import { LeadFormLinkTitle } from "../leadFormLink/LeadFormLinkTitle";
import { LeadTitle } from "../lead/LeadTitle";
import { MessageTitle } from "../message/MessageTitle";
import { PatientTitle } from "../patient/PatientTitle";
import { PracticeInfoLinkTitle } from "../practiceInfoLink/PracticeInfoLinkTitle";
import { UserTitle } from "../user/UserTitle";
import { WorkflowTemplateTitle } from "../workflowTemplate/WorkflowTemplateTitle";

export const PracticeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
          source="formLinks"
          reference="FormLink"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FormLinkTitle} />
        </ReferenceArrayInput>
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
          source="leadFormLinks"
          reference="LeadFormLink"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeadFormLinkTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="leads"
          reference="Lead"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeadTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
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
        <NumberInput step={1} label="Remind Every" source="remindEvery" />
        <DateTimeInput label="Reminded At" source="remindedAt" />
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
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
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
    </Edit>
  );
};
