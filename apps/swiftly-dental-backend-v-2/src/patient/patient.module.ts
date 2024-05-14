import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PatientModuleBase } from "./base/patient.module.base";
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";
import { PatientResolver } from "./patient.resolver";
import { PassportModule } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { JWT_EXPIRATION } from "src/constants";
import { SecretsManagerModule } from "src/providers/secrets/secretsManager.module";
import { SecretsManagerService } from "src/providers/secrets/secretsManager.service";
import { EnumSecretsNameKey } from "src/providers/secrets/secretsNameKey.enum";

@Module({
  imports: [
    PatientModuleBase,
    forwardRef(() => AuthModule),
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
  controllers: [PatientController],
  providers: [PatientService, PatientResolver],
  exports: [PatientService],
})
export class PatientModule {}
