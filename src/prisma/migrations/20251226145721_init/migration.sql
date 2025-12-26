-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "short_id" TEXT NOT NULL,
    "target_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link_Analytic" (
    "id" SERIAL NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,
    "link_id" INTEGER NOT NULL,

    CONSTRAINT "Link_Analytic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_short_id_key" ON "Link"("short_id");

-- AddForeignKey
ALTER TABLE "Link_Analytic" ADD CONSTRAINT "Link_Analytic_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
