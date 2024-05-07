import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LinkModuleBase } from "./base/link.module.base";
import { LinkService } from "./link.service";
import { LinkController } from "./link.controller";
import { LinkResolver } from "./link.resolver";

@Module({
  imports: [LinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [LinkController],
  providers: [LinkService, LinkResolver],
  exports: [LinkService],
})
export class LinkModule {}
