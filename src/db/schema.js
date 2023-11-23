import { int, mysqlEnum, mysqlTable, bigint, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
 
// import { int, text, mysqlTable, mysqlSchema } from "drizzle-orm/mysql-core";
 
// export const mySchema = mysqlSchema("my_schema")
 
// export const USERS = mySchema.table("users", {
//   id: int("id").primaryKey().autoincrement(),
//   name: text("name"),
// });

// // declaring enum in database
export const countries = mysqlTable('countries', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 256 }),
});
 
// export const cities = mysqlTable('cities', {
//   id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
//   name: varchar('name', { length: 256 }),
//   countryId: int('country_id').references(() => countries.id),
//   popularity: mysqlEnum('popularity', ['unknown', 'known', 'popular']),
// });