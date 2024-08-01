/*
  Warnings:

  - You are about to drop the `links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `templates` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EnumMessageType" AS ENUM ('Instant', 'Delayed');

-- CreateEnum
CREATE TYPE "EnumMessageStatus" AS ENUM ('Pending', 'Delivered', 'Failed');

-- DropTable
DROP TABLE "links";

-- DropTable
DROP TABLE "templates";

-- DropEnum
DROP TYPE "EnumLinkCategory";

-- DropEnum
DROP TYPE "EnumLinkSector";

-- DropEnum
DROP TYPE "EnumTemplateCategory";

-- DropEnum
DROP TYPE "EnumTemplateSector";

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "provider" TEXT,
    "providerId" TEXT,
    "queueItemId" TEXT,
    "messageType" "EnumMessageType" NOT NULL,
    "status" "EnumMessageStatus",
    "sentOn" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "patientId" TEXT NOT NULL,
    "practiceId" TEXT NOT NULL,
    "sentById" TEXT NOT NULL,
    "smsCount" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageLog" (
    "id" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "senderId" TEXT,
    "sentOn" TIMESTAMP(3),
    "messageId" TEXT NOT NULL,

    CONSTRAINT "MessageLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_sentById_fkey" FOREIGN KEY ("sentById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageLog" ADD CONSTRAINT "MessageLog_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
