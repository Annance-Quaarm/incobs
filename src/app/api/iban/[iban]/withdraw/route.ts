import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(
    request: NextRequest,
    { params }: { params: { iban: string } }
) {
    try {
        const iban = params.iban;
        const {
            amount,
            walletAddress,
            description = "Withdraw to wallet"
        } = await request.json();

        if (!amount) {
            return NextResponse.json(
                { error: "Amount is required" },
                { status: 400 }
            )
        }

        if (!walletAddress) {
            return NextResponse.json(
                { error: "Wallet address is required" },
                { status: 400 }
            )
        }

        const virtualIban = await db.virtualIban.findUnique({
            where: { iban },
            include: { bankAccount: true }
        });

        if (!virtualIban) {
            return NextResponse.json(
                { error: "IBAN not found" },
                { status: 404 }
            );
        }

        if (virtualIban.walletAddress !== walletAddress) {
            return NextResponse.json(
                { error: "This IBAN doesn\'t belong to the provided wallet address" },
                { status: 403 }
            );
        }

        const bankTransaction = await db.bankTransaction.create({
            data: {
                amount: BigInt(amount),
                direction: "OUTGOING",
                description,
                bankAccountId: virtualIban.bankAccountId,
                virtualIbanId: virtualIban.id
            }
        });

        const walletTransaction = await db.walletTransaction.create({
            data: {
                amount: BigInt(amount),
                description,
                walletAddress,
                bankTransactionId: bankTransaction.id
            }
        });

        await db.bankAccount.update({
            where: { id: virtualIban.bankAccountId },
            data: {
                balance: {
                    decrement: amount
                }
            }
        });

        return NextResponse.json({
            success: true,
            bankTransaction: {
                id: bankTransaction.id,
                amount: bankTransaction.amount.toString(),
                status: bankTransaction.status
            },
            walletTransaction: {
                id: walletTransaction.id,
                amount: walletTransaction.amount.toString(),
                walletAddress: walletTransaction.walletAddress
            }
        });
    } catch (error) {
        console.error("Error processing withdrawal:", error);
        return NextResponse.json(
            { error: "Failed to prcoess withdrawal" },
            { status: 500 }
        );
    }
}