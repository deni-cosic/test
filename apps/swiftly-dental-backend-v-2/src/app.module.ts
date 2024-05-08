import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { FeaturePermissionModule } from "./featurePermission/featurePermission.module";
import { FormLinkModule } from "./formLink/formLink.module";
import { FormSubmissionModule } from "./formSubmission/formSubmission.module";
import { HelpLinkModule } from "./helpLink/helpLink.module";
import { LeadFormLinkModule } from "./leadFormLink/leadFormLink.module";
import { LeadModule } from "./lead/lead.module";
import { LinkModule } from "./link/link.module";
import { PatientModule } from "./patient/patient.module";
import { PracticeInfoLinkModule } from "./practiceInfoLink/practiceInfoLink.module";
import { PracticeModule } from "./practice/practice.module";
import { TemplateModule } from "./template/template.module";
import { WorkflowStepModule } from "./workflowStep/workflowStep.module";
import { WorkflowTemplateStepModule } from "./workflowTemplateStep/workflowTemplateStep.module";
import { WorkflowTemplateModule } from "./workflowTemplate/workflowTemplate.module";
import { WorkflowModule } from "./workflow/workflow.module";
import { PracticeToUserModule } from "./practiceToUser/practiceToUser.module";
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
    LinkModule,
    PatientModule,
    PracticeInfoLinkModule,
    PracticeModule,
    TemplateModule,
    WorkflowStepModule,
    WorkflowTemplateStepModule,
    WorkflowTemplateModule,
    WorkflowModule,
    PracticeToUserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
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
  ],
  providers: [],
})
export class AppModule {}
