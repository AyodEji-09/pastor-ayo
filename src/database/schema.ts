import {
  date,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const BOOKINGS = mysqlTable("bookings", {
  id: serial("id").primaryKey().notNull(),
  //booking type
  booking_type: varchar("booking_type", { length: 256 }),
  // personal
  first_name: varchar("first_name", { length: 256 }),
  last_name: varchar("last_name", { length: 256 }),
  personal_email: varchar("personal_email", { length: 256 }),
  personal_phone: varchar("personal_phone", { length: 256 }),
  // org
  org_name: varchar("org_name", { length: 256 }),
  org_email: varchar("org_email", { length: 256 }),
  org_phone: varchar("org_phone", { length: 256 }),
  org_website: varchar("org_website", { length: 256 }),
  org_facebook: varchar("org_facebook", { length: 256 }),
  org_youtube: varchar("org_youtube", { length: 256 }),
  // event
  event_name: text("event_name"),
  event_nature: text("event_nature"),
  event_address: text("event_address"),
  event_country: varchar("event_country", { length: 256 }),
  event_state: varchar("event_state", { length: 256 }),
  event_city: varchar("event_city", { length: 256 }),
  event_time: varchar("event_time", { length: 256 }),
  event_date: date("event_date"),
  prog_type: text("prog_type"),
  ministers_list: text("ministers_list"),
  ticket: text("ticket"),
  venue_capacity: text("venue_capacity"),
  recording_available: varchar("recording_available", { length: 256 }),
  counseling_groups: varchar("counseling_groups", { length: 256 }),
  additional_info: text("additional_info"),

  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "string" }).defaultNow(),
});
