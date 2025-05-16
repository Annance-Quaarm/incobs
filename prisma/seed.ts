import { db } from "@/lib/prisma";
import { initializeMockBanks } from "@/lib/mockBanks";


async function main () {
    try {
        console.log("Seeding db with mock banks....");
        console.log(db.bank)
        await initializeMockBanks();
        console.log("Seeding completed");
    } catch (error) {
        console.error("Error during seeding: ", error);
        process.exit(1);
    } finally {
        async () => {
            await db.$disconnect();
        }
    }
}

main();