/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Lead as PrismaLead,
  Practice as PrismaPractice,
} from "@prisma/client";

export class LeadServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LeadCountArgs, "select">): Promise<number> {
    return this.prisma.lead.count(args);
  }

  async leads<T extends Prisma.LeadFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadFindManyArgs>
  ): Promise<PrismaLead[]> {
    return this.prisma.lead.findMany<Prisma.LeadFindManyArgs>(args);
  }
  async lead<T extends Prisma.LeadFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadFindUniqueArgs>
  ): Promise<PrismaLead | null> {
    return this.prisma.lead.findUnique(args);
  }
  async createLead<T extends Prisma.LeadCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadCreateArgs>
  ): Promise<PrismaLead> {
    return this.prisma.lead.create<T>(args);
  }
  async updateLead<T extends Prisma.LeadUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadUpdateArgs>
  ): Promise<PrismaLead> {
    return this.prisma.lead.update<T>(args);
  }
  async deleteLead<T extends Prisma.LeadDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadDeleteArgs>
  ): Promise<PrismaLead> {
    return this.prisma.lead.delete(args);
  }

  async getPractice(parentId: string): Promise<PrismaPractice | null> {
    return this.prisma.lead
      .findUnique({
        where: { id: parentId },
      })
      .practice();
  }
}
