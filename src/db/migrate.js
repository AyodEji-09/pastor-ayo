import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { db, connection } from "./db";

async function mig(){
    // This will run migrations on the database, skipping the ones already applied
    await migrate(db, { migrationsFolder: "./migrations" });
    
    // Don't forget to close the connection, otherwise the script will hang
    await connection.end();
}
