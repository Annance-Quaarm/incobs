import { generateAccountNumber, generateIBAN } from "@/lib/mockBanks";
import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const reserveWalletId = params.id;
        const { bankCode } = await request.json();

        if(!bankCode) {
            return NextResponse.json(
                { error: "Bank code is required" },
                { status: 400 }
            );
        }

        const reserveWallet = await db.reserveWallet.findUnique({
            where: { id: reserveWalletId },
            include: {
                bankAccount: true,
                members: true
            }
        });

        if(!reserveWallet) {
            return NextResponse.json(
                { error: "Reserve wallet not found" },
                { status: 404 }
            );
        }

        if(reserveWallet.bankAccount) {
            return NextResponse.json({
                error: "The reserve wallet already has a bank account",
                accountId: reserveWallet.bankAccount
            }, { status: 400 });
        }

        if(reserveWallet.balance < reserveWallet.threshold) {
            return NextResponse.json(
                { error: "Threshold not met for bank account creation" },
                { status: 400 }
            );
        }

        const notApprovedMembers = reserveWallet.members.filter(member => !member.hasApproved)

        if(notApprovedMembers.length > 0) {
            return NextResponse.json({
                error: "Not all members have approved bank account creation",
                pendingApprovals: notApprovedMembers.map(member => member.walletAddress)
            }, { status: 400 });
        }

        const bank = await db.bank.findUnique({
            where: { code: bankCode }
        });

        if(!bank) {
            return NextResponse.json(
                { error: "Bank not found" },
                { status: 404 }
            );
        }

        const accountNumber = await generateAccountNumber();
        const bankAccountId = `bank_${reserveWalletId}`;

        const bankAccount = await db.bankAccount.create({
            data: {
                id: bankAccountId,
                accountNumber,
                bankId: bank.id,
                reserveWalletId,
                balance: reserveWallet.balance
            }
        });

        // create IBANs for each member
        const virtualIbans = [];
        for (const member of reserveWallet.members) {
            const iban = generateIBAN(bank.code, member.walletAddress);
            const virtualIban = await db.virtualIban.create({
                data: {
                    iban,
                    bankAccountId: bankAccount.id,
                    walletAddress: member.walletAddress
                }
            });

            virtualIbans.push(virtualIban);
        }

        await db.reserveWallet.update({
            where: { id: reserveWalletId },
            data: {
                bankAccountCreated: true,
                balance: 0 // reset reserve wallet to zero after as it is not in the bank account
            }
        });

        return NextResponse.json({
            success: true,
            bankAccount: {
                id: bankAccount.id,
                accountNumber: bankAccount.accountNumber,
                bankName: bank.name,
                bankCode: bank.code,
                balance: bankAccount.balance
            },
            virtualIbans: virtualIbans.map(iban => ({
                id: iban.id,
                iban: iban.iban,
                walletAddress: iban.walletAddress
            }))
        });
    } catch (error) {
        console.error("Error creating bank account:", error);
        return NextResponse.json(
            { error: "Failed to create bank account" },
            { status: 500 }
        )
    }
}