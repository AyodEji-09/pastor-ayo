import "dotenv/config";
import type { Config } from "drizzle-kit";

if (
  !process.env.DB_HOST ||
  !process.env.DB_USERNAME ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_DATABASE
) {
  throw new Error("Database variable is missing.");
}

export default {
  schema: "./src/database/schema.ts",
  out: "./src/database/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
} satisfies Config;
