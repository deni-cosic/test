import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowModuleBase } from "./base/workflow.module.base";
import { WorkflowService } from "./workflow.service";
import { WorkflowController } from "./workflow.controller";
import { WorkflowResolver } from "./workflow.resolver";
import { PracticeModule } from "src/practice/practice.module";
import { WorkflowStepModule } from "src/workflowStep/workflowStep.module";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { SecretsManagerModule } from "src/providers/secrets/secretsManager.module";
import { SecretsManagerService } from "src/providers/secrets/secretsManager.service";
import { ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { EnumSecretsNameKey } from "src/providers/secrets/secretsNameKey.enum";
import { JWT_EXPIRATION } from "src/constants";

@Module({
  imports: [
    WorkflowModuleBase,
    forwardRef(() => AuthModule),
    PracticeModule,
    WorkflowStepModule,
    PassportModule,
    SecretsManagerModule,
    JwtModule.registerAsync({
      imports: [SecretsManagerModule],
      inject: [SecretsManagerService, ConfigService],
      useFactory: async (
        secretsService: SecretsManagerService,
        configService: ConfigService
      ) => {
        const secret = await secretsService.getSecret<string>(
          EnumSecretsNameKey.JwtSecretKey
        );
        const expiresIn = configService.get(JWT_EXPIRATION);
        if (!secret) {
          throw new Error("Didn't get a valid jwt secret");
        }
        if (!expiresIn) {
          throw new Error("Jwt expire in value is not valid");
        }
        return {
          secret: secret,
          signOptions: { expiresIn },
        };
      },
    }),
  ],
  controllers: [WorkflowController],
  providers: [WorkflowService, WorkflowResolver],
  exports: [WorkflowService],
})
export class WorkflowModule {}
