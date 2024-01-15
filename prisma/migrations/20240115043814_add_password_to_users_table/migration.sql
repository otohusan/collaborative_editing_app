/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_user_name_key` ON `users`(`user_name`);
