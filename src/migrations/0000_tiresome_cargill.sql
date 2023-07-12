CREATE TABLE `users` (
	`id` integer,
	`name` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `name_index` ON `users` (`email`);