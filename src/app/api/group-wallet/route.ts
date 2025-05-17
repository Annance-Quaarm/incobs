import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { BN } from 'bn.js';
import { SOLANA_RPC_URL } from '@/constants';


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const walletAddress = searchParams.get('walletAddress');

        if (!walletAddress) {
            return NextResponse.json(
                { error: 'Wallet address is required' },
                { status: 400 }
            );
        }

        // Fetch all group wallets where the user is a member
        const groupWallets = await db.reserveWallet.findMany({
            where: {
                members: {
                    some: {
                        walletAddress: walletAddress
                    }
                }
            },
            include: {
                members: true
            }
        });

        // Transform the data to match the frontend Group type
        const transformedGroups = groupWallets.map(wallet => ({
            id: wallet.id,
            name: wallet.name,
            balance: (Number(wallet.balance) / LAMPORTS_PER_SOL),
            thresholdAmount: (Number(wallet.threshold) / LAMPORTS_PER_SOL),
            memberCount: wallet.members.length,
            maxMembers: 5, // This could be made configurable in the future
            isJoined: true, // If they're in the members list, they're joined
            bankAccountCreated: wallet.bankAccountCreated,
            userContributions: wallet.members.reduce((acc, member) => ({
                ...acc,
                [member.walletAddress]: (Number(member.contribution) / LAMPORTS_PER_SOL)
            }), {}),
            userApprovals: wallet.members
                .filter(member => member.hasApproved)
                .map(member => member.walletAddress),
            description: wallet.description || ''
        }));

        return NextResponse.json({ groups: transformedGroups });

    } catch (error) {
        console.error('Error fetching group wallets:', error);
        return NextResponse.json(
            { error: 'Failed to fetch group wallets' },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const { groupName, description, thresholdAmount, invitedUsers, creatorWalletAddress } = await req.json();

        if (!groupName || !description || !thresholdAmount || !creatorWalletAddress) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Convert threshold amount to lamports
        const thresholdLamports = new BN(thresholdAmount * LAMPORTS_PER_SOL);

        // Create connection to Solana
        const connection = new Connection(SOLANA_RPC_URL, 'confirmed');

        // Create a new keypair for the group wallet
        const groupWalletKeypair = Keypair.generate();
        const groupWalletPublicKey = groupWalletKeypair.publicKey;

        // Create the group wallet in the database
        const groupWallet = await db.reserveWallet.create({
            data: {
                id: groupWalletPublicKey.toString(),
                name: groupName,
                balance: BigInt(0),
                threshold: BigInt(thresholdLamports.toString()),
                bankAccountCreated: false,
                members: {
                    create: {
                        walletAddress: creatorWalletAddress,
                        name: 'Creator',
                        isAdmin: true,
                        hasApproved: true,
                    }
                }
            },
            include: {
                members: true
            }
        });

        // If there are invited users, add them to the group
        if (invitedUsers) {
            const walletAddresses = invitedUsers.split(',').map((addr: string) => addr.trim());

            await Promise.all(
                walletAddresses.map(async (walletAddress: string) => {
                    try {
                        // find the user details in the database and add them to the group
                        const user = await db.reserveWalletMember.findFirst({
                            where: {
                                walletAddress: walletAddress
                            }
                        });

                        await db.reserveWalletMember.create({
                            data: {
                                walletAddress,
                                reserveWalletId: groupWallet.id,
                                hasApproved: false,
                                isAdmin: false,
                                name: user?.name,
                            },
                            include: {
                                reserveWallet: true
                            }
                        });
                    } catch (error) {
                        console.error(`Failed to add member ${walletAddress}:`, error);
                    }
                })
            );
        }

        return NextResponse.json({
            success: true,
            groupWallet: {
                ...groupWallet,
                publicKey: groupWalletPublicKey.toString(),
            }
        });

    } catch (error) {
        console.error('Error creating group wallet:', error);
        return NextResponse.json(
            { error: 'Failed to create group wallet' },
            { status: 500 }
        );
    }
} 