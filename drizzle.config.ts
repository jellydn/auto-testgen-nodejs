import { Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  out: "./src/migrations",
  driver: "turso",
  dbCredentials: {
    url: 'file:./local.db',
  },
  verbose: true,
  strict: true
} satisfies Config;
