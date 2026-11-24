import {
  mysqlTable,
  int,
  varchar,
  decimal,
  uniqueIndex,
  timestamp,
} from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
  id: int("id").primaryKey().autoincrement(),

  sku: varchar("sku", { length: 50 }).notNull().unique(),

  name: varchar("name", { length: 255 }).notNull(),

  description: varchar("description", { length: 1000 }),

  price: decimal("price", {
    precision: 10,
    scale: 2,
  }).notNull(),

  stock: int("stock").notNull().default(0),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Customers
export const customers = mysqlTable("customers", {
  id: int("id").primaryKey().autoincrement(),

  name: varchar("name", { length: 150 }).notNull(),

  email: varchar("email", { length: 255 }).notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
}, (table) => [
  uniqueIndex("customers_email_idx").on(table.email),
]);