import { Body, Controller, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { Credentials } from "../auth/Credentials";
import { UserInfo } from "./UserInfo";

@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("login")
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }

  @Post("forgot-password")
  forgotPassword(@Body() { email }: { email: string }) {
    return this.authService.forgotPassword(email);
  }

  @Post("reset-password")
  resetPassword(
    @Body() { password, code }: { password: string; code: string }
  ) {
    return this.authService.resetPassword(password, code);
  }
}
