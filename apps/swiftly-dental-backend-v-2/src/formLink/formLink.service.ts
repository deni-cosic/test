import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormLinkServiceBase } from "./base/formLink.service.base";

@Injectable()
export class FormLinkService extends FormLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
