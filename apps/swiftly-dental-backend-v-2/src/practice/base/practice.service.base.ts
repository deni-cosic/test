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
  Practice as PrismaPractice,
  FormSubmission as PrismaFormSubmission,
  Lead as PrismaLead,
  Patient as PrismaPatient,
  PracticeInfoLink as PrismaPracticeInfoLink,
  PracticeToUser as PrismaPracticeToUser,
  User as PrismaUser,
  WorkflowTemplate as PrismaWorkflowTemplate,
  FeaturePermission as PrismaFeaturePermission,
} from "@prisma/client";

export class PracticeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PracticeCountArgs, "select">): Promise<number> {
    return this.prisma.practice.count(args);
  }

  async practices<T extends Prisma.PracticeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PracticeFindManyArgs>
  ): Promise<PrismaPractice[]> {
    return this.prisma.practice.findMany<Prisma.PracticeFindManyArgs>(args);
  }
  async practice<T extends Prisma.PracticeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PracticeFindUniqueArgs>
  ): Promise<PrismaPractice | null> {
    return this.prisma.practice.findUnique(args);
  }
  async createPractice<T extends Prisma.PracticeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PracticeCreateArgs>
  ): Promise<PrismaPractice> {
    return this.prisma.practice.create<T>(args);
  }
  async updatePractice<T extends Prisma.PracticeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PracticeUpdateArgs>
  ): Promise<PrismaPractice> {
    return this.prisma.practice.update<T>(args);
  }
  async deletePractice<T extends Prisma.PracticeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PracticeDeleteArgs>
  ): Promise<PrismaPractice> {
    return this.prisma.practice.delete(args);
  }

  async findFormSubmissions(
    parentId: string,
    args: Prisma.FormSubmissionFindManyArgs
  ): Promise<PrismaFormSubmission[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .formSubmissions(args);
  }

  async findLeads(
    parentId: string,
    args: Prisma.LeadFindManyArgs
  ): Promise<PrismaLead[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leads(args);
  }

  async findPatients(
    parentId: string,
    args: Prisma.PatientFindManyArgs
  ): Promise<PrismaPatient[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .patients(args);
  }

  async findPracticeInfoLinks(
    parentId: string,
    args: Prisma.PracticeInfoLinkFindManyArgs
  ): Promise<PrismaPracticeInfoLink[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .practiceInfoLinks(args);
  }

  async findPracticeToUsers(
    parentId: string,
    args: Prisma.PracticeToUserFindManyArgs
  ): Promise<PrismaPracticeToUser[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .practiceToUsers(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }

  async findWorkflowTemplates(
    parentId: string,
    args: Prisma.WorkflowTemplateFindManyArgs
  ): Promise<PrismaWorkflowTemplate[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .workflowTemplates(args);
  }

  async getFeaturePermission(
    parentId: string
  ): Promise<PrismaFeaturePermission | null> {
    return this.prisma.practice
      .findUnique({
        where: { id: parentId },
      })
      .featurePermission();
  }
}
