-- AlterTable
ALTER TABLE "form_links" ADD COLUMN     "practiceId" TEXT;

-- AddForeignKey
ALTER TABLE "form_links" ADD CONSTRAINT "form_links_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "practices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
