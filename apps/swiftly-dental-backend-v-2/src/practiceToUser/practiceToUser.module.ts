import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PracticeToUserModuleBase } from "./base/practiceToUser.module.base";
import { PracticeToUserService } from "./practiceToUser.service";
import { PracticeToUserController } from "./practiceToUser.controller";
import { PracticeToUserResolver } from "./practiceToUser.resolver";

@Module({
  imports: [PracticeToUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [PracticeToUserController],
  providers: [PracticeToUserService, PracticeToUserResolver],
  exports: [PracticeToUserService],
})
export class PracticeToUserModule {}
