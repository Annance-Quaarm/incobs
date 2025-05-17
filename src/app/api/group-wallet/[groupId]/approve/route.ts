import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';

export async function POST(
    req: Request,
    { params }: { params: { groupId: string } }
) {
    try {

        const { walletAddress } = await req.json();


        const member = await db.reserveWalletMember.findFirst({
            where: {
                reserveWalletId: params.groupId,
                walletAddress
            }
        });

        if (!member) {
            return NextResponse.json(
                { error: 'Member not found' },
                { status: 404 }
            );
        }

        const updatedMember = await db.reserveWalletMember.update({
            where: {
                id: member.id
            },
            data: {
                hasApproved: !member.hasApproved
            }
        });


        return NextResponse.json({ member: updatedMember });
    } catch (error) {
        console.error('Error updating member approval:', error);
        return NextResponse.json(
            { error: 'Failed to update member approval' },
            { status: 500 }
        );
    }
} 