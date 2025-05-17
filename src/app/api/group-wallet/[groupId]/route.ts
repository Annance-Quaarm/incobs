import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export async function GET(
    req: Request,
    { params }: { params: { groupId: string } }
) {
    try {
        const groupWallet = await db.reserveWallet.findUnique({
            where: {
                id: params.groupId,
            },
            include: {
                members: true,
                bankAccount: {
                    include: {
                        bank: true
                    }
                }
            },
        });

        if (!groupWallet) {
            return NextResponse.json(
                { error: 'Group wallet not found' },
                { status: 404 }
            );
        }

        // Transform the data to match the frontend Group type
        const transformedGroup = {
            id: groupWallet.id,
            name: groupWallet.name,
            balance: (Number(groupWallet.balance) / LAMPORTS_PER_SOL).toFixed(1),
            thresholdAmount: (Number(groupWallet.threshold) / LAMPORTS_PER_SOL).toFixed(1),
            memberCount: groupWallet.members.length,
            maxMembers: 5, // This could be made configurable in the future
            isJoined: true, // If they're in the members list, they're joined
            bankAccountCreated: groupWallet.bankAccountCreated,
            userContributions: groupWallet.members.reduce((acc, member) => ({
                ...acc,
                [member.name || member.walletAddress]: (Number(member.contribution) / LAMPORTS_PER_SOL).toFixed(1)
            }), {}),
            userApprovals: groupWallet.members
                .filter(member => member.hasApproved)
                .map(member => member.walletAddress),
            description: groupWallet.description || '',
            bankAccount: groupWallet.bankAccount ? {
                accountName: groupWallet.name,
                bankName: groupWallet.bankAccount.bank.name,
                accountNumber: groupWallet.bankAccount.accountNumber,
                creationDate: groupWallet.bankAccount.createdAt.toISOString(),
                balance: (Number(groupWallet.bankAccount.balance) / LAMPORTS_PER_SOL).toFixed(1)
            } : null
        };

        return NextResponse.json({ group: transformedGroup });
    } catch (error) {
        console.error('Error fetching group wallet:', error);
        return NextResponse.json(
            { error: 'Failed to fetch group wallet' },
            { status: 500 }
        );
    }
} 