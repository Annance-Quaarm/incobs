import { db } from "@/lib/prisma";

const mockBanks = [
    {
        name: "CommerzBank", 
        code: "CRB"
    }, 
    {
        name: "VolksBank", 
        code: "VLB"
    },
    {
        name: "Sparkasse Bank", 
        code: "SPB"
    },
    {
        name: "ING", 
        code: "ING"
    },
];



// Initialize the mock banks in the db
export const initializeMockBanks = async () => {

    for (const bank of mockBanks) {
        const exisitingBank = await db.bank.findUnique({
            where: { code: bank.code }
        });

        if(!exisitingBank) {
            await db.bank.create({
                data: bank,
            });
            console.log(`Created bank: ${bank.name}`);
        }
    }

    console.log("Mock banks initialized successfully");
}


// Generate a random IBAN for a given bank code
export const generateIBAN = (bankCode: string, userIdentifier: string) => {
    // Format: EU00 BANK 0000 0000 0000
    // country-code, bank-code, rest: Account identifier based on user's wallet

    const numericIdentifier = userIdentifier
                                .split("")
                                .map(char => char.charCodeAt(0) % 10)
                                .join("")
                                .padEnd(16, "0")
                                .substring(0, 16);

    return `EU${bankCode}${numericIdentifier}`;
}