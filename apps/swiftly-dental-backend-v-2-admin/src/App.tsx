import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FeaturePermissionList } from "./featurePermission/FeaturePermissionList";
import { FeaturePermissionCreate } from "./featurePermission/FeaturePermissionCreate";
import { FeaturePermissionEdit } from "./featurePermission/FeaturePermissionEdit";
import { FeaturePermissionShow } from "./featurePermission/FeaturePermissionShow";
import { FormLinkList } from "./formLink/FormLinkList";
import { FormLinkCreate } from "./formLink/FormLinkCreate";
import { FormLinkEdit } from "./formLink/FormLinkEdit";
import { FormLinkShow } from "./formLink/FormLinkShow";
import { FormSubmissionList } from "./formSubmission/FormSubmissionList";
import { FormSubmissionCreate } from "./formSubmission/FormSubmissionCreate";
import { FormSubmissionEdit } from "./formSubmission/FormSubmissionEdit";
import { FormSubmissionShow } from "./formSubmission/FormSubmissionShow";
import { HelpLinkList } from "./helpLink/HelpLinkList";
import { HelpLinkCreate } from "./helpLink/HelpLinkCreate";
import { HelpLinkEdit } from "./helpLink/HelpLinkEdit";
import { HelpLinkShow } from "./helpLink/HelpLinkShow";
import { LeadFormLinkList } from "./leadFormLink/LeadFormLinkList";
import { LeadFormLinkCreate } from "./leadFormLink/LeadFormLinkCreate";
import { LeadFormLinkEdit } from "./leadFormLink/LeadFormLinkEdit";
import { LeadFormLinkShow } from "./leadFormLink/LeadFormLinkShow";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { LinkList } from "./link/LinkList";
import { LinkCreate } from "./link/LinkCreate";
import { LinkEdit } from "./link/LinkEdit";
import { LinkShow } from "./link/LinkShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { PracticeInfoLinkList } from "./practiceInfoLink/PracticeInfoLinkList";
import { PracticeInfoLinkCreate } from "./practiceInfoLink/PracticeInfoLinkCreate";
import { PracticeInfoLinkEdit } from "./practiceInfoLink/PracticeInfoLinkEdit";
import { PracticeInfoLinkShow } from "./practiceInfoLink/PracticeInfoLinkShow";
import { PracticeList } from "./practice/PracticeList";
import { PracticeCreate } from "./practice/PracticeCreate";
import { PracticeEdit } from "./practice/PracticeEdit";
import { PracticeShow } from "./practice/PracticeShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { WorkflowStepList } from "./workflowStep/WorkflowStepList";
import { WorkflowStepCreate } from "./workflowStep/WorkflowStepCreate";
import { WorkflowStepEdit } from "./workflowStep/WorkflowStepEdit";
import { WorkflowStepShow } from "./workflowStep/WorkflowStepShow";
import { WorkflowTemplateStepList } from "./workflowTemplateStep/WorkflowTemplateStepList";
import { WorkflowTemplateStepCreate } from "./workflowTemplateStep/WorkflowTemplateStepCreate";
import { WorkflowTemplateStepEdit } from "./workflowTemplateStep/WorkflowTemplateStepEdit";
import { WorkflowTemplateStepShow } from "./workflowTemplateStep/WorkflowTemplateStepShow";
import { WorkflowTemplateList } from "./workflowTemplate/WorkflowTemplateList";
import { WorkflowTemplateCreate } from "./workflowTemplate/WorkflowTemplateCreate";
import { WorkflowTemplateEdit } from "./workflowTemplate/WorkflowTemplateEdit";
import { WorkflowTemplateShow } from "./workflowTemplate/WorkflowTemplateShow";
import { WorkflowList } from "./workflow/WorkflowList";
import { WorkflowCreate } from "./workflow/WorkflowCreate";
import { WorkflowEdit } from "./workflow/WorkflowEdit";
import { WorkflowShow } from "./workflow/WorkflowShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"swiftly-dental-backend-v2"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="FeaturePermission"
          list={FeaturePermissionList}
          edit={FeaturePermissionEdit}
          create={FeaturePermissionCreate}
          show={FeaturePermissionShow}
        />
        <Resource
          name="FormLink"
          list={FormLinkList}
          edit={FormLinkEdit}
          create={FormLinkCreate}
          show={FormLinkShow}
        />
        <Resource
          name="FormSubmission"
          list={FormSubmissionList}
          edit={FormSubmissionEdit}
          create={FormSubmissionCreate}
          show={FormSubmissionShow}
        />
        <Resource
          name="HelpLink"
          list={HelpLinkList}
          edit={HelpLinkEdit}
          create={HelpLinkCreate}
          show={HelpLinkShow}
        />
        <Resource
          name="LeadFormLink"
          list={LeadFormLinkList}
          edit={LeadFormLinkEdit}
          create={LeadFormLinkCreate}
          show={LeadFormLinkShow}
        />
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
        />
        <Resource
          name="Link"
          list={LinkList}
          edit={LinkEdit}
          create={LinkCreate}
          show={LinkShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="PracticeInfoLink"
          list={PracticeInfoLinkList}
          edit={PracticeInfoLinkEdit}
          create={PracticeInfoLinkCreate}
          show={PracticeInfoLinkShow}
        />
        <Resource
          name="Practice"
          list={PracticeList}
          edit={PracticeEdit}
          create={PracticeCreate}
          show={PracticeShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="WorkflowStep"
          list={WorkflowStepList}
          edit={WorkflowStepEdit}
          create={WorkflowStepCreate}
          show={WorkflowStepShow}
        />
        <Resource
          name="WorkflowTemplateStep"
          list={WorkflowTemplateStepList}
          edit={WorkflowTemplateStepEdit}
          create={WorkflowTemplateStepCreate}
          show={WorkflowTemplateStepShow}
        />
        <Resource
          name="WorkflowTemplate"
          list={WorkflowTemplateList}
          edit={WorkflowTemplateEdit}
          create={WorkflowTemplateCreate}
          show={WorkflowTemplateShow}
        />
        <Resource
          name="Workflow"
          list={WorkflowList}
          edit={WorkflowEdit}
          create={WorkflowCreate}
          show={WorkflowShow}
        />
      </Admin>
    </div>
  );
};

export default App;
