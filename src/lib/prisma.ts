import { PrismaClient } from "@/generated/prisma";

const globalPrisma = global as unknown as { client: PrismaClient };

export const db = 
    globalPrisma.client || 
    new PrismaClient({
        log: ["query", "error", "warn"]
    });

if (process.env.NODE_ENV !== "production") globalPrisma.client = db;