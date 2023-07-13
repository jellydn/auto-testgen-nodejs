import { config } from 'dotenv';
import { Config } from "drizzle-kit";
import { parseEnv } from "znv";
import { z } from "zod";

config();

const { DB_URL, DB_AUTH_TOKEN } = parseEnv(process.env, {
  DB_URL: z.string().url().default("file:./local.db"),
  DB_AUTH_TOKEN: z.string().optional().describe("Auth token for the database"),
});

export default {
  schema: "./schema.ts",
  out: "./src/migrations",
  driver: "turso",
  dbCredentials: {
    url: DB_URL,
    authToken: DB_AUTH_TOKEN,
  },
  verbose: true,
  strict: true
} satisfies Config;
