import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { Credentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { UserInfo } from "./UserInfo";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { ForgotPasswordEmailEvent, mailerEvent } from "src/mailer";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly eventEmitter: EventEmitter2
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.user({
      where: { email },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, email, roles: roleList };
    }
    return null;
  }
  async login(credentials: Credentials, isAdmin = false): Promise<UserInfo> {
    const { email, password } = credentials;
    const user = await this.validateUser(
      credentials.email,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    if (isAdmin) {
      if (!user.roles.includes("admin")) {
        throw new UnauthorizedException("The passed credentials are incorrect");
      }
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      email,
      password,
    });
    return {
      accessToken,
      ...user,
    };
  }

  async changePassword(
    email: string,
    oldPassword: string,
    newPassword: string
  ): Promise<void> {
    const user = await this.userService.user({ where: { email } });

    const isOldPasswordValid =
      user && (await this.passwordService.compare(oldPassword, user.password));
    if (!isOldPasswordValid) {
      throw new ForbiddenException(`Old password does not match`);
    }

    await this.userService.updateUser({
      where: { email },
      data: { password: newPassword },
    });
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await await this.userService.user({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with ${email} does not exist`);
    }
    const token = await this.jwtService.signAsync({ email: user.email });
    this.eventEmitter.emit(
      mailerEvent.FORGOT_PASSWORD_EMAIL,
      new ForgotPasswordEmailEvent(user.email!, user.username, token)
    );
  }

  async resetPassword(password: string, token: string): Promise<void> {
    let decoded;
    try {
      decoded = await this.jwtService.verifyAsync<{ email: string }>(token);
    } catch (err) {
      throw new BadRequestException("Invalid token signature");
    }

    const { email } = decoded;
    await this.userService.updateUser({
      where: { email },
      data: { password },
    });
  }
}
