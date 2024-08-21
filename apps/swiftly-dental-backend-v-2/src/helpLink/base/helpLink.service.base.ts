/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, HelpLink as PrismaHelpLink } from "@prisma/client";

export class HelpLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HelpLinkCountArgs, "select">): Promise<number> {
    return this.prisma.helpLink.count(args);
  }

  async helpLinks<T extends Prisma.HelpLinkFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HelpLinkFindManyArgs>
  ): Promise<PrismaHelpLink[]> {
    return this.prisma.helpLink.findMany<Prisma.HelpLinkFindManyArgs>(args);
  }
  async helpLink<T extends Prisma.HelpLinkFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HelpLinkFindUniqueArgs>
  ): Promise<PrismaHelpLink | null> {
    return this.prisma.helpLink.findUnique(args);
  }
  async createHelpLink<T extends Prisma.HelpLinkCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HelpLinkCreateArgs>
  ): Promise<PrismaHelpLink> {
    return this.prisma.helpLink.create<T>(args);
  }
  async updateHelpLink<T extends Prisma.HelpLinkUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HelpLinkUpdateArgs>
  ): Promise<PrismaHelpLink> {
    return this.prisma.helpLink.update<T>(args);
  }
  async deleteHelpLink<T extends Prisma.HelpLinkDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HelpLinkDeleteArgs>
  ): Promise<PrismaHelpLink> {
    return this.prisma.helpLink.delete(args);
  }
}
