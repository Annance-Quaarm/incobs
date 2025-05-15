import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
    try {
        const banks = await db.bank.findMany({
            orderBy: { name: "asc" }
        });

        return NextResponse.json({
            banks: banks.map(bank => ({
                id: bank.id,
                name: bank.name,
                code: bank.code
            })),
        });
    } catch (error) {
        console.error("Error fetching banks:", error);
        return NextResponse.json(
            { error: "Failed to fetch banks" },
            { status: 500 }
        );
    }
}