/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessageLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_practiceId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_sentById_fkey";

-- DropForeignKey
ALTER TABLE "MessageLog" DROP CONSTRAINT "MessageLog_messageId_fkey";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "MessageLog";

-- CreateTable
CREATE TABLE "message" (
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

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message_log" (
    "id" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "senderId" TEXT,
    "sentOn" TIMESTAMP(3),
    "messageId" TEXT NOT NULL,

    CONSTRAINT "message_log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_sentById_fkey" FOREIGN KEY ("sentById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_log" ADD CONSTRAINT "message_log_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
