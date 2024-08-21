-- CreateEnum
CREATE TYPE "EnumFormLinkSector" AS ENUM ('Dental', 'GP');

-- CreateEnum
CREATE TYPE "EnumLeadFormLinkSector" AS ENUM ('Dental', 'GP');

-- CreateEnum
CREATE TYPE "EnumLinkCategory" AS ENUM ('conditions', 'live_well', 'Tools', 'video', 'common_health_questions', 'start_4_life', 'Medicines');

-- CreateEnum
CREATE TYPE "EnumLinkSector" AS ENUM ('Dental', 'GP');

-- CreateEnum
CREATE TYPE "EnumPracticeSector" AS ENUM ('Dental', 'GP');

-- CreateEnum
CREATE TYPE "EnumTemplateCategory" AS ENUM ('appointment', 'prescriptions', 'review', 'sample', 'test_results');

-- CreateEnum
CREATE TYPE "EnumTemplateSector" AS ENUM ('Dental', 'GP');

-- CreateEnum
CREATE TYPE "EnumWorkflowTemplateSector" AS ENUM ('Dental', 'GP');

-- CreateTable
CREATE TABLE "users" (
    "blocked" BOOLEAN,
    "confirmed" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "provider" TEXT,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_permissions" (
    "analytics" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dentalAdviceLink" BOOLEAN NOT NULL,
    "dentalSubscriptions" BOOLEAN NOT NULL,
    "form" BOOLEAN NOT NULL,
    "id" TEXT NOT NULL,
    "leads" BOOLEAN,
    "messageTemplate" BOOLEAN NOT NULL,
    "practiceInfoLink" BOOLEAN NOT NULL,
    "requestFeedback" BOOLEAN NOT NULL,
    "requestPayment" BOOLEAN NOT NULL,
    "sendDocument" BOOLEAN NOT NULL,
    "sendMessageToMany" BOOLEAN,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "videoCall" BOOLEAN NOT NULL,
    "workflows" BOOLEAN,

    CONSTRAINT "feature_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_links" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sector" "EnumFormLinkSector" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "form_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_submissions" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "formId" TEXT,
    "formTitle" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "patientId" TEXT,
    "practiceId" TEXT NOT NULL,
    "receivedAt" TIMESTAMP(3),
    "requestedBy" TEXT,
    "requestSentId" TEXT,
    "seen" BOOLEAN,
    "submissionId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "help_links" (
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "help_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lead_form_links" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sector" "EnumLeadFormLinkSector" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "lead_form_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "contacted" BOOLEAN NOT NULL,
    "convertedClientId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "emailConsented" BOOLEAN,
    "firstName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "interests" JSONB NOT NULL,
    "lastName" TEXT NOT NULL,
    "marketingConsented" BOOLEAN NOT NULL,
    "meetingDate" TIMESTAMP(3),
    "mobileNumber" TEXT NOT NULL,
    "onlyInterestsConsented" BOOLEAN,
    "otherFields" JSONB,
    "platformSource" TEXT NOT NULL,
    "practiceId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "links" (
    "category" "EnumLinkCategory",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "id" TEXT NOT NULL,
    "sector" "EnumLinkSector" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "nhsNumber" TEXT,
    "practiceId" TEXT,
    "stripeCustomerId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practice_info_links" (
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "message" TEXT,
    "practiceId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT,

    CONSTRAINT "practice_info_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practices" (
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "addressLine3" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "featurePermissionId" TEXT,
    "googlePlaceId" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nhsReviewUrl" TEXT,
    "odsCode" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "postcode" TEXT,
    "remindAfter" INTEGER NOT NULL DEFAULT 10,
    "remindedAt" TIMESTAMP(3),
    "remindEvery" INTEGER NOT NULL DEFAULT 3,
    "sector" "EnumPracticeSector" NOT NULL,
    "senderId" TEXT,
    "stripeConnectedAccountId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "website" TEXT,

    CONSTRAINT "practices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templates" (
    "category" "EnumTemplateCategory"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "displayName" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "id" TEXT NOT NULL,
    "sector" "EnumTemplateSector" NOT NULL,
    "text" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflow_steps" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "executedOn" TIMESTAMP(3),
    "executionDate" TIMESTAMP(3) NOT NULL,
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workflowId" TEXT NOT NULL,

    CONSTRAINT "workflow_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflow_template_steps" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "timeOffsetInSeconds" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workflowTemplateId" TEXT NOT NULL,

    CONSTRAINT "workflow_template_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflow_templates" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "practiceId" TEXT,
    "sector" "EnumWorkflowTemplateSector" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workflow_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflows" (
    "anchorDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workflows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PracticeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "submissionId_1" ON "form_submissions"("submissionId");

-- CreateIndex
CREATE UNIQUE INDEX "patients_practiceId_firstName_lastName_dateOfBirth_key" ON "patients"("practiceId", "firstName", "lastName", "dateOfBirth");

-- CreateIndex
CREATE UNIQUE INDEX "practices_odsCode_key" ON "practices"("odsCode");

-- CreateIndex
CREATE UNIQUE INDEX "_PracticeToUser_AB_unique" ON "_PracticeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PracticeToUser_B_index" ON "_PracticeToUser"("B");

-- AddForeignKey
ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practice_info_links" ADD CONSTRAINT "practice_info_links_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practices" ADD CONSTRAINT "practices_featurePermissionId_fkey" FOREIGN KEY ("featurePermissionId") REFERENCES "feature_permissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_steps" ADD CONSTRAINT "workflow_steps_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "workflows"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_template_steps" ADD CONSTRAINT "workflow_template_steps_workflowTemplateId_fkey" FOREIGN KEY ("workflowTemplateId") REFERENCES "workflow_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_templates" ADD CONSTRAINT "workflow_templates_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflows" ADD CONSTRAINT "workflows_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeToUser" ADD CONSTRAINT "_PracticeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "practices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeToUser" ADD CONSTRAINT "_PracticeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
