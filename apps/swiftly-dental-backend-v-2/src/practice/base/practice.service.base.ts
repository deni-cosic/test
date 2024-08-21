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
  FormLink as PrismaFormLink,
  FormSubmission as PrismaFormSubmission,
  LeadFormLink as PrismaLeadFormLink,
  Lead as PrismaLead,
  Message as PrismaMessage,
  Patient as PrismaPatient,
  PracticeInfoLink as PrismaPracticeInfoLink,
  User as PrismaUser,
  WorkflowTemplate as PrismaWorkflowTemplate,
  FeaturePermission as PrismaFeaturePermission,
} from "@prisma/client";

export class PracticeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PracticeCountArgs, "select">): Promise<number> {
    return this.prisma.practice.count(args);
  }

  async practices(
    args: Prisma.PracticeFindManyArgs
  ): Promise<PrismaPractice[]> {
    return this.prisma.practice.findMany(args);
  }
  async practice(
    args: Prisma.PracticeFindUniqueArgs
  ): Promise<PrismaPractice | null> {
    return this.prisma.practice.findUnique(args);
  }
  async createPractice(
    args: Prisma.PracticeCreateArgs
  ): Promise<PrismaPractice> {
    return this.prisma.practice.create(args);
  }
  async updatePractice(
    args: Prisma.PracticeUpdateArgs
  ): Promise<PrismaPractice> {
    return this.prisma.practice.update(args);
  }
  async deletePractice(
    args: Prisma.PracticeDeleteArgs
  ): Promise<PrismaPractice> {
    return this.prisma.practice.delete(args);
  }

  async findFormLinks(
    parentId: string,
    args: Prisma.FormLinkFindManyArgs
  ): Promise<PrismaFormLink[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .formLinks(args);
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

  async findLeadFormLinks(
    parentId: string,
    args: Prisma.LeadFormLinkFindManyArgs
  ): Promise<PrismaLeadFormLink[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leadFormLinks(args);
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

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.practice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
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
