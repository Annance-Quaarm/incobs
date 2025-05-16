import { db } from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";



export async function GET(
    request: NextRequest,
    { params }: { params: { iban: string} }
) {
    try {
        const iban = params.iban;
        const { searchParams } = new URL(request.url);
        const walletAddress = searchParams.get("walletAddress");
        const page = searchParams.get("page") || "1";
        const limit = searchParams.get("limit") || "20";

        if(!walletAddress) {
            return NextResponse.json(
                { error: "Wallet address is required for authentication" },
                { status: 400 }
            );
        }

        const virtualIban = await db.virtualIban.findUnique({
            where: { iban }
        });

        if(!virtualIban) {
            return NextResponse.json(
                { error: "IBAN not found" },
                { status: 404 }
            );
        }

        if(virtualIban.walletAddress !== walletAddress) {
            return NextResponse.json(
                { error: "Not authorized to view these transactions" },
                { status: 403 }
            );
        }

        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const skip = (pageNum - 1) * limitNum;

        const transactions = await db.bankTransaction.findMany({
            where: { virtualIbanId: virtualIban.id },
            include: { walletTransaction: true },
            orderBy: { createdAt: "desc" },
            skip,
            take: limitNum
        });

        const totalCount = await db.bankTransaction.count({
            where: { virtualIbanId: virtualIban.id }
        });

        const formattedTransactions = transactions.map(tx => ({
            id: tx.id,
            amount: tx.amount.toString(),
            direction: tx.description,
            description: tx.description,
            status: tx.status,
            senderName: tx.senderName,
            senderReference: tx.senderReference,
            createdAt: tx.createdAt,
            walletTransaction: tx.walletTransaction ? {
                id: tx.walletTransaction.id,
                amount: tx.walletTransaction.amount.toString(),
                walletAddress: tx.walletTransaction.walletAddress,
                createdAt: tx.walletTransaction.createdAt
            } : null
        }));

        return NextResponse.json({
            iban: virtualIban.iban,
            walletAddress: virtualIban.walletAddress,
            transactions: formattedTransactions,
            totalCount,
            totalPages: Math.ceil(totalCount/limitNum),
            currentPage: pageNum
        });
    } catch (error) {
        console.error("Error fetching IBAN transactions:", error);
        return NextResponse.json(
            { error: "Failed to fetch IBAN transactions" },
            { status: 500 }
        );
    }
}