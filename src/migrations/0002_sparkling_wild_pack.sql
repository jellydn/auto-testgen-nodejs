DROP INDEX IF EXISTS `name_index`;--> statement-breakpoint
CREATE INDEX `email_index` ON `users` (`email`);--> statement-breakpoint
CREATE INDEX `name_index` ON `users` (`name`);