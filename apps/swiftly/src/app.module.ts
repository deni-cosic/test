import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { FeaturePermissionModule } from "./featurePermission/featurePermission.module";
import { FormLinkModule } from "./formLink/formLink.module";
import { FormSubmissionModule } from "./formSubmission/formSubmission.module";
import { HelpLinkModule } from "./helpLink/helpLink.module";
import { LeadFormLinkModule } from "./leadFormLink/leadFormLink.module";
import { LeadModule } from "./lead/lead.module";
import { PatientModule } from "./patient/patient.module";
import { PracticeInfoLinkModule } from "./practiceInfoLink/practiceInfoLink.module";
import { PracticeModule } from "./practice/practice.module";
import { WorkflowStepModule } from "./workflowStep/workflowStep.module";
import { WorkflowTemplateStepModule } from "./workflowTemplateStep/workflowTemplateStep.module";
import { WorkflowTemplateModule } from "./workflowTemplate/workflowTemplate.module";
import { WorkflowModule } from "./workflow/workflow.module";
import { MessageModule } from "./message/message.module";
import { MessageLogModule } from "./messageLog/messageLog.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    UserModule,
    FeaturePermissionModule,
    FormLinkModule,
    FormSubmissionModule,
    HelpLinkModule,
    LeadFormLinkModule,
    LeadModule,
    PatientModule,
    PracticeInfoLinkModule,
    PracticeModule,
    WorkflowStepModule,
    WorkflowTemplateStepModule,
    WorkflowTemplateModule,
    WorkflowModule,
    MessageModule,
    MessageLogModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
