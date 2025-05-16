import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const reserveWalletId = params.id;
        const { searchParams } = new URL(request.url);
        const walletAddress = searchParams.get("walletAddress");

        const reserveWallet = await db.reserveWallet.findUnique({
            where: { id: reserveWalletId },
            include: {
                bankAccount: {
                    include: { bank: true }
                },
                members: true
            }
        });

        if(!reserveWallet){
            return NextResponse.json(
                { error: "Reserve wallet not found" },
                { status: 404 }
            );
        }

        let userMembership = null;
        if(walletAddress) {
            userMembership = reserveWallet.members.find(member => member.walletAddress === walletAddress)
        }

        const approvedCount = reserveWallet.members.filter(member => member.hasApproved).length;

        const reserveWalletData = {
            id: reserveWallet.id,
            name: reserveWallet.name,
            balance: reserveWallet.balance.toString(),
            threshold: reserveWallet.threshold.toString(),
            bankAccountCreated: reserveWallet.bankAccountCreated,
            members: reserveWallet.members.map(member => ({
                walletAddress: member.walletAddress,
                name: member.name,
                contribution: member.contribution.toString(),
                hasApproved: member.hasApproved,
                isAdmin: member.isAdmin,
                joinedAt: member.joinedAt
            })),
            approvals: {
                approvedCount,
                totalCount: reserveWallet.members.length,
                allApproved: approvedCount === reserveWallet.members.length
            },
            bankAccount: reserveWallet.bankAccount ? {
                id: reserveWallet.bankAccount.id,
                bankName: reserveWallet.bankAccount.bank.name,
                accountNumber: reserveWallet.bankAccount.accountNumber
            } : null,
            userMembership: userMembership ? {
                contribution: userMembership.contribution.toString(),
                hasApproved: userMembership.hasApproved,
                isAdmin: userMembership.isAdmin
            } : null,
            createdAt: reserveWallet.createdAt,
            updatedAt: reserveWallet.updatedAt
        };

        return NextResponse.json(reserveWalletData);
    } catch (error) {
        console.error("Error fetching reserve wallet:", error);
        return NextResponse.json(
            { error: "Failed to fetch reserve wallet" },
            { status: 500 }
        );
    }
}