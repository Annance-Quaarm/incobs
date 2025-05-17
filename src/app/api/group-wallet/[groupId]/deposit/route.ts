import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export async function POST(
    req: Request,
    { params }: { params: { groupId: string } }
) {
    try {


        const { amount, walletAddress } = await req.json();
        if (!amount || isNaN(parseFloat(amount))) {
            return NextResponse.json(
                { error: 'Invalid amount' },
                { status: 400 }
            );
        }

        // Convert amount to lamports
        const amountInLamports = BigInt(Math.floor(parseFloat(amount) * LAMPORTS_PER_SOL));

        // Get the group wallet
        const groupWallet = await db.reserveWallet.findUnique({
            where: {
                id: params.groupId,
            },
            include: {
                members: true,
            },
        });

        if (!groupWallet) {
            return NextResponse.json(
                { error: 'Group wallet not found' },
                { status: 404 }
            );
        }

        // Update the group wallet balance
        const updatedGroupWallet = await db.reserveWallet.update({
            where: {
                id: params.groupId,
            },
            data: {
                balance: {
                    increment: amountInLamports,
                },
            },
            include: {
                members: true,
            },
        });

        // Update the member's contribution
        const member = updatedGroupWallet.members.find(m => m.walletAddress === walletAddress);

        if (member) {
            await db.reserveWalletMember.update({
                where: {
                    id: member.id,
                },
                data: {
                    contribution: {
                        increment: amountInLamports,
                    },
                },
            });
        }

        return NextResponse.json({
            success: true,
            newBalance: (Number(updatedGroupWallet.balance) / LAMPORTS_PER_SOL).toFixed(1),
            walletAddress,
        });
    } catch (error) {
        console.error('Error processing deposit:', error);
        return NextResponse.json(
            { error: 'Failed to process deposit' },
            { status: 500 }
        );
    }
} 