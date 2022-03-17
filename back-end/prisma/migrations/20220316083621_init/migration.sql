-- CreateTable
CREATE TABLE "Modules" (
    "IdModules" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "City" TEXT NOT NULL,

    CONSTRAINT "Modules_pkey" PRIMARY KEY ("IdModules")
);

-- CreateTable
CREATE TABLE "Details" (
    "IdDetails" SERIAL NOT NULL,
    "Values" INTEGER NOT NULL,
    "Duration" INTEGER NOT NULL,
    "Number" INTEGER NOT NULL,
    "State" BOOLEAN NOT NULL,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("IdDetails")
);

-- CreateTable
CREATE TABLE "Logs" (
    "IdLogs" SERIAL NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "ValueSave" INTEGER NOT NULL,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("IdLogs")
);

-- CreateIndex
CREATE UNIQUE INDEX "Modules_Name_key" ON "Modules"("Name");
