/*
  Warnings:

  - You are about to drop the column `created_at` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `short_id` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `target_url` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Link_Analytic` table. All the data in the column will be lost.
  - You are about to drop the column `link_id` on the `Link_Analytic` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Link_Analytic` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Link` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetUrl` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Link_Analytic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ip` to the `Link_Analytic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkId` to the `Link_Analytic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAgent` to the `Link_Analytic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Link_Analytic" DROP CONSTRAINT "Link_Analytic_link_id_fkey";

-- DropIndex
DROP INDEX "Link_short_id_key";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "created_at",
DROP COLUMN "short_id",
DROP COLUMN "target_url",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "targetUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Link_Analytic" DROP COLUMN "authorId",
DROP COLUMN "link_id",
DROP COLUMN "published",
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ip" TEXT NOT NULL,
ADD COLUMN     "linkId" INTEGER NOT NULL,
ADD COLUMN     "userAgent" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Link_slug_key" ON "Link"("slug");

-- CreateIndex
CREATE INDEX "Link_Analytic_linkId_idx" ON "Link_Analytic"("linkId");

-- AddForeignKey
ALTER TABLE "Link_Analytic" ADD CONSTRAINT "Link_Analytic_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
