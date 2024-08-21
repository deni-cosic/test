/*
  Warnings:

  - Added the required column `practiceId` to the `lead_form_links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lead_form_links" ADD COLUMN     "practiceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "lead_form_links" ADD CONSTRAINT "lead_form_links_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
