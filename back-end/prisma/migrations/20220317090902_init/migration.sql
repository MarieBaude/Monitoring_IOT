/*
  Warnings:

  - You are about to drop the `Details` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Modules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Details";

-- DropTable
DROP TABLE "Logs";

-- DropTable
DROP TABLE "Modules";

-- CreateTable
CREATE TABLE "Module" (
    "IdModules" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "City" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("IdModules")
);

-- CreateTable
CREATE TABLE "Detail" (
    "IdDetails" SERIAL NOT NULL,
    "Values" INTEGER NOT NULL,
    "Duration" INTEGER NOT NULL,
    "Number" INTEGER NOT NULL,
    "State" BOOLEAN NOT NULL,

    CONSTRAINT "Detail_pkey" PRIMARY KEY ("IdDetails")
);

-- CreateTable
CREATE TABLE "Log" (
    "IdLogs" SERIAL NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "ValueSave" INTEGER NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("IdLogs")
);

-- CreateIndex
CREATE UNIQUE INDEX "Module_Name_key" ON "Module"("Name");
