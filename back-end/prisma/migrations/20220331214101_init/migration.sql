-- DropForeignKey
ALTER TABLE "Detail" DROP CONSTRAINT "Detail_moduleId_fkey";

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;
