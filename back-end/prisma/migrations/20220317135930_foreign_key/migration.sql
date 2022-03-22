/*
  Warnings:

  - Added the required column `moduleId` to the `Detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detailId` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Detail" ADD COLUMN     "moduleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Log" ADD COLUMN     "detailId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "Detail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
