-- DropForeignKey
ALTER TABLE "lead_form_links" DROP CONSTRAINT "lead_form_links_practiceId_fkey";

-- AlterTable
ALTER TABLE "lead_form_links" ALTER COLUMN "practiceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "lead_form_links" ADD CONSTRAINT "lead_form_links_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
