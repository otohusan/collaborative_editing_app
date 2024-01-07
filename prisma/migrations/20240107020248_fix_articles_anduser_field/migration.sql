/*
  Warnings:

  - Added the required column `userId` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `articles` ADD CONSTRAINT `articles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
