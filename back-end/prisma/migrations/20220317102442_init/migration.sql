/*
  Warnings:

  - The primary key for the `Detail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Duration` on the `Detail` table. All the data in the column will be lost.
  - You are about to drop the column `IdDetails` on the `Detail` table. All the data in the column will be lost.
  - You are about to drop the column `Number` on the `Detail` table. All the data in the column will be lost.
  - You are about to drop the column `State` on the `Detail` table. All the data in the column will be lost.
  - You are about to drop the column `Values` on the `Detail` table. All the data in the column will be lost.
  - The primary key for the `Log` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Date` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `IdLogs` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `ValueSave` on the `Log` table. All the data in the column will be lost.
  - The primary key for the `Module` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `City` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `IdModules` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Module` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Module` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `duration` to the `Detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueSave` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Module` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Module` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Module_Name_key";

-- AlterTable
ALTER TABLE "Detail" DROP CONSTRAINT "Detail_pkey",
DROP COLUMN "Duration",
DROP COLUMN "IdDetails",
DROP COLUMN "Number",
DROP COLUMN "State",
DROP COLUMN "Values",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "state" BOOLEAN NOT NULL,
ADD COLUMN     "value" INTEGER NOT NULL,
ADD CONSTRAINT "Detail_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Log" DROP CONSTRAINT "Log_pkey",
DROP COLUMN "Date",
DROP COLUMN "IdLogs",
DROP COLUMN "ValueSave",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "valueSave" INTEGER NOT NULL,
ADD CONSTRAINT "Log_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Module" DROP CONSTRAINT "Module_pkey",
DROP COLUMN "City",
DROP COLUMN "IdModules",
DROP COLUMN "Name",
DROP COLUMN "Type",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD CONSTRAINT "Module_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Module_name_key" ON "Module"("name");
