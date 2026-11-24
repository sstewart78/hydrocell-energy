import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/app/lib/db";

export async function GET() {
  try {
    await db.execute(
      sql`SELECT VERSION() AS version, DATABASE() AS db_name`
    );

    return NextResponse.json({
      connected: true,
      message: "Hydrocell database connection successful",
    });
  } catch (error) {
    console.error("Database connection failed:", error);

    return NextResponse.json(
      {
        connected: false,
        message: "Database connection failed",
      },
      { status: 500 }
    );
  }
}