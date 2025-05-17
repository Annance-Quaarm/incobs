import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get('query') || '';
        const limit = parseInt(searchParams.get('limit') || '5');

        const users = await db.reserveWalletMember.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { walletAddress: { contains: query, mode: 'insensitive' } }
                ]
            },
            select: {
                walletAddress: true,
                name: true,
            },
            distinct: ['walletAddress'],
            take: limit,
        });

        return NextResponse.json({ users });
    } catch (error) {
        console.error('Error searching users:', error);
        return NextResponse.json(
            { error: 'Failed to search users' },
            { status: 500 }
        );
    }
} 