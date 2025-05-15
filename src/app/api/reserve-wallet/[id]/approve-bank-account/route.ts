import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";


export async function POST(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const reserveWalletId = params.id;
        const { walletAddress } = await request.json();
        
        if(!reserveWalletId || !walletAddress) {
            return NextResponse.json(
                { error: "Missing required fields: reserveWalletId, walletAddress" },
                { status: 400 }
            );
        }

        const member = await db.reserveWalletMember.findUnique({
            where: {
                walletAddress_reserveWalletId: {
                    walletAddress,
                    reserveWalletId
                }
            },
            include: {
                reserveWallet: true
            }
        });

        if(!member) {
            return NextResponse.json(
                { error: "Member not found in this reserve wallet" },
                { status: 404 }
            )
        }

        if(member.reserveWallet.bankAccountCreated) {
            return NextResponse.json(
                { error: "Bank acccount already created for this reserve wallet" },
                { status: 400 }
            )
        }

        if(member.hasApproved) {
            return NextResponse.json(
                { error: "You have already approved bank account creation" },
                { status: 400 }
            )
        }

        const totalMembers = await db.reserveWalletMember.count({
            where: { reserveWalletId }
        });


        const approvedMembers = await db.reserveWalletMember.count({
            where: {
                hasApproved: true
            }
        });


        const allApproved = totalMembers === approvedMembers;

        return NextResponse.json({
            success: true,
            walletAddress,
            reserveWalletId,
            allApproved,
            approvedCount: approvedMembers,
            totalMembers
        });
    } catch (error) {
        console.error("Error updating approval status: ", error);
        return NextResponse.json(
            { error: "Failed to update approval status" },
            { status: 500 }
        );
    }
}


