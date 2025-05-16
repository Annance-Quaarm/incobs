import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(
    request: NextRequest,
    { params }: { params: { iban : string } }
) {
    try {
        const iban = params.iban;
        const {
            amount,
            senderName = "External Sender",
            senderReference,
            description = "External transaction"
        } = await request.json();

        if(!amount) {
            return NextResponse.json(
                { error: "Amount is required" },
                { status: 400 }
            );
        }

        const virtualIban = await db.virtualIban.findUnique({
            where: { iban },
            include: { bankAccount: true }
        });

        if(!virtualIban) {
            return NextResponse.json(
                { error: "IBAN not found" },
                { status: 404 }
            );
        }

        const transaction = await db.bankTransaction.create({
            data: {
                amount: BigInt(amount),
                direction: "INCOMING",
                description,
                senderName,
                senderReference,
                bankAccountId: virtualIban.bankAccountId,
                virtualIbanId: virtualIban.id
            }
        });

        await db.bankAccount.update({
            where: { id: virtualIban.bankAccountId },
            data: {
                balance: { increment: amount }
            }
        });

        return NextResponse.json({
            success: true,
            transaction: {
                id: transaction.id,
                amount: transaction.amount.toString(),
                status: transaction.status,
                receivingIban: virtualIban.iban,
                receivingWalletAddress: virtualIban.walletAddress,
                createdAt: transaction.createdAt
            }
        });
    } catch (error) {
        console.error("Error transacting the desposit:", error);
        return NextResponse.json(
            { error: "Failed to make deposit" },
            { status: 500 }
        );
    }
}