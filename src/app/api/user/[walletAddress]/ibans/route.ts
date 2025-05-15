import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
    request: NextRequest,
    { params }: { params : { walletAddress: string } }
) {
    try {
        const { walletAddress } = params;

        if(!walletAddress) {
            return NextResponse.json(
                { error: "Wallet address is required" },
                { status: 400 }
            );
        }

        const virtualIbans = await db.virtualIban.findMany({
            where: { walletAddress },
            include: {
                bankAccount: {
                    include: {
                        bank: true,
                        reserveWallet: {
                            select: {
                                id: true,
                                name: true,
                                members: {
                                    where: {
                                        walletAddress
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        const formattedIbans = virtualIbans.map(viban => {

            const user = viban.bankAccount.reserveWallet?.members[0];
            return {
                id: viban.id,
                iban: viban.iban,
                bankName: viban.bankAccount.bank.name,
                bankCode: viban.bankAccount.bank.code,
                accountNumber: viban.bankAccount.accountNumber,
                reserveWalletId: viban.bankAccount.reserveWalletId,
                reserveWalletName: viban.bankAccount.reserveWallet?.name || null,
                contribution: user ? user.contribution.toString() : "0",
                createdAt: viban.createdAt
            }
        });


        return NextResponse.json({
            walletAddress,
            virtualIbans: formattedIbans
        });
    } catch (error) {
        console.error("Error fetching user IBANs:", error);
        return NextResponse.json(
            { error: "Failed to fetch user IBANs" },
            { status: 500 }
        );
    }
}