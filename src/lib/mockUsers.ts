import { Keypair } from '@solana/web3.js';
import { db } from './prisma';

export const mockUsers = [
    { name: 'Alice Smith', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'Bob Johnson', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'Carol White', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'David Brown', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'Eve Davis', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'Frank Miller', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'Grace Wilson', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'Henry Taylor', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'Ivy Martinez', walletAddress: Keypair.generate().publicKey.toString() },
    { name: 'Jack Anderson', walletAddress: Keypair.generate().publicKey.toString() },
];

export const mockGroupWallets = [
    {
        name: 'Family Savings',
        description: 'Family emergency fund',
        threshold: BigInt(10 * 1e9), // 10 SOL
        members: [mockUsers[0], mockUsers[1], mockUsers[2]],
    },
    {
        name: 'Business Operations',
        description: 'Company operational expenses',
        threshold: BigInt(50 * 1e9), // 50 SOL
        members: [mockUsers[3], mockUsers[4], mockUsers[5]],
    },
    {
        name: 'Investment Pool',
        description: 'Group investment fund',
        threshold: BigInt(100 * 1e9), // 100 SOL
        members: [mockUsers[6], mockUsers[7], mockUsers[8], mockUsers[9]],
    },
];

export async function initializeMockUsers() {
    console.log('Seeding mock users and group wallets...');

    // Create group wallets and their members
    for (const group of mockGroupWallets) {
        const groupWallet = await db.reserveWallet.create({
            data: {
                id: Keypair.generate().publicKey.toString(),
                name: group.name,
                balance: BigInt(0),
                threshold: group.threshold,
                bankAccountCreated: false,
            },
        });

        // Add members to the group wallet
        for (let i = 0; i < group.members.length; i++) {
            const user = group.members[i];
            await db.reserveWalletMember.create({
                data: {
                    walletAddress: user.walletAddress,
                    name: user.name,
                    reserveWalletId: groupWallet.id,
                    isAdmin: i === 0, // First member is admin
                    hasApproved: true,
                    contribution: BigInt(0),
                },
            });
        }
    }

    console.log('Mock users and group wallets seeded successfully');
} 