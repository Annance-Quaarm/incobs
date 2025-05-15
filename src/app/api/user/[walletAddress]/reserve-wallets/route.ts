import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
    request: NextRequest,
    { params }: { params: { walletAddress: string } }
) {
    try {
        const { walletAddress } = params;

        if(!walletAddress) {
            return NextResponse.json(
                { error: "Wallet address is required" },
                { status: 400 }
            );
        }

        const memberships = await db.reserveWalletMember.findMany({
            where: { walletAddress },
            include: {
                reserveWallet: {
                    include: {
                        bankAccount: {
                            include: { bank: true }
                        },
                        members: true
                    }
                }
            }
        });

        const reserveWallets = memberships.map(membership => {
            const { reserveWallet } = membership;

            return {
                id: reserveWallet.id,
                name: reserveWallet.name,
                balance: reserveWallet.balance.toString(),
                threshold: reserveWallet.threshold.toString(),
                bankAccountCreated: reserveWallet.bankAccountCreated,
                memberCount: reserveWallet.members.length,
                userContribution: membership.contribution.toString(),
                bankAccount: reserveWallet.bankAccount ? {
                    id: reserveWallet.bankAccount.id,
                    bankName: reserveWallet.bankAccount.bank.name,
                    accountNumber: reserveWallet.bankAccount.accountNumber
                } : null,
                createdAt: reserveWallet.createdAt
            }
        });

        return NextResponse.json({
            walletAddress,
            reserveWallets
        })

    } catch (error) {
        console.error("Error fetching user reserve wallets:", error);
        return NextResponse.json(
            { error: "Failed to fetch user reserve wallets" },
            { status: 500 }
        );
    }
}