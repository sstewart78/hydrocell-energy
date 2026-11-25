import {
  mysqlTable,
  int,
  varchar,
  decimal,
  uniqueIndex,
  timestamp,
  mysqlEnum,
  index,
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

// Orders
export const orders = mysqlTable("orders", {
  id: int("id").primaryKey().autoincrement(),

  customerId: int("customer_id")
    .notNull()
    .references(() => customers.id, {
      onDelete: "restrict",
    }),

  status: mysqlEnum("status", [
    "pending",
    "processing",
    "fulfilled",
    "cancelled",
  ]).notNull().default("pending"),

  total: decimal("total", {
    precision: 12,
    scale: 2,
  }).notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
}, (table) => [
  index("orders_customer_idx").on(table.customerId),
  index("orders_status_idx").on(table.status),
]);

// Order items
export const orderItems = mysqlTable("order_items", {
  id: int("id").primaryKey().autoincrement(),

  orderId: int("order_id")
    .notNull()
    .references(() => orders.id, {
      onDelete: "restrict",
    }),

  productId: int("product_id")
    .notNull()
    .references(() => products.id, {
      onDelete: "restrict",
    }),

  quantity: int("quantity").notNull(),

  unitPrice: decimal("unit_price", {
    precision: 10,
    scale: 2,
  }).notNull(),
}, (table) => [
  index("order_items_order_idx").on(table.orderId),
  index("order_items_product_idx").on(table.productId),
]);