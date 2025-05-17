import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';
// import { LAMPORTS_PER_SOL } from '@solana/web3.js';

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


        return NextResponse.json({ group: groupWallet });
    } catch (error) {
        console.error('Error fetching group wallet:', error);
        return NextResponse.json(
            { error: 'Failed to fetch group wallet' },
            { status: 500 }
        );
    }
} 