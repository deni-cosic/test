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
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { MailerModule } from "./mailer";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
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
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MailerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    EventEmitterModule.forRoot({
      global: true,
      wildcard: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
