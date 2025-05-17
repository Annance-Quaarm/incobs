import { initializeMockBanks } from '@/lib/mockBanks';
import { initializeMockUsers } from '@/lib/mockUsers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        console.log('Starting database seeding...');

        // Initialize mock banks
        await initializeMockBanks();

        // Initialize mock users and group wallets
        await initializeMockUsers();

        console.log('Database seeding completed successfully');
    } catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();