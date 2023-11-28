import {
  boolean,
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
  booking_type: varchar("booking_type", { length: 256 }).default(""),
  // personal
  first_name: varchar("first_name", { length: 256 }).default(""),
  last_name: varchar("last_name", { length: 256 }).default(""),
  personal_email: varchar("personal_email", { length: 256 }).default(""),
  personal_phone: varchar("personal_phone", { length: 256 }).default(""),
  // org
  org_name: varchar("org_name", { length: 256 }).default(""),
  org_email: varchar("org_email", { length: 256 }).default(""),
  org_phone: varchar("org_phone", { length: 256 }).default(""),
  org_website: varchar("org_website", { length: 256 }).default(""),
  org_facebook: varchar("org_facebook", { length: 256 }).default(""),
  org_youtube: varchar("org_youtube", { length: 256 }).default(""),
  // event
  event_name: text("event_name").default(""),
  event_slug: text("event_slug").default(""),
  event_nature: text("event_nature").default(""),
  event_address: text("event_address").default(""),
  event_country: varchar("event_country", { length: 256 }).default(""),
  event_state: varchar("event_state", { length: 256 }).default(""),
  event_city: varchar("event_city", { length: 256 }).default(""),
  event_time: varchar("event_time", { length: 256 }).default(""),
  event_date: date("event_date").default(new Date()),
  prog_type: text("prog_type").default(""),
  ministers_list: text("ministers_list").default(""),
  ticket: text("ticket").default(""),
  venue_capacity: text("venue_capacity").default(""),
  recording_available: varchar("recording_available", { length: 256 }).default(
    ""
  ),
  counseling_groups: varchar("counseling_groups", { length: 256 }).default(""),
  additional_info: text("additional_info").default(""),

  booking_confirmed: boolean("booking_confirmed").default(false),

  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "string" }).defaultNow(),
});

export const VIDEOS = mysqlTable("videos", {
  id: serial("id").primaryKey().notNull(),
  videoId: varchar("videoId", { length: 256 }).unique().notNull(),
  title: varchar("title", { length: 256 }).default(""),
  description: text("description").default(""),
  thumbnail: varchar("thumbnail", { length: 256 }).default(""),
  publishedTime: varchar("publishedTime", { length: 256 }).default(""),
  published: boolean("published").default(false),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "string" }).defaultNow(),
});

export const MUSICS = mysqlTable("musics", {
  id: serial("id").primaryKey().notNull(),
  videoId: varchar("musicId", { length: 256 }).unique().notNull(),
  title: varchar("title", { length: 256 }).default(""),
  description: text("description").default(""),
  thumbnail: varchar("thumbnail", { length: 256 }).default(""),
  publishedTime: varchar("publishedTime", { length: 256 }).default(""),
  published: boolean("published").default(false),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "string" }).defaultNow(),
});

export const LATESTTRACKS = mysqlTable("latesttracks", {
  id: serial("id").primaryKey().notNull(),
  banner: text("banner").default(""),
  title: varchar("title", { length: 256 }).default(""),
  author: varchar("author", { length: 256 }).default(""),

  spotify: text("spotify").default(""),
  youtube: text("youtube").default(""),
  iTunes: text("iTunes").default(""),
  soundCloud: text("soundCloud").default(""),
  appleMusic: text("appleMusic").default(""),
  amazonMusic: text("amazonMusic").default(""),
  boomPlay: text("boomPlay").default(""),
  googlePlay: text("googlePlay").default(""),
  deezer: text("deezer").default(""),
  netEase: text("netEase").default(""),

  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "string" }).defaultNow(),
});
