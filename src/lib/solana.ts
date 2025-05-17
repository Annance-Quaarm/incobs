import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import axios from 'axios';

const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.devnet.solana.com';
const connection = new Connection(SOLANA_RPC_URL, 'confirmed');

/**
 * Get the SOL balance of a program ID
 * @param programId - The Solana program ID to check
 * @returns The balance in SOL (not lamports)
 */
export async function getProgramBalance(programId: string): Promise<number> {
    try {
        const publicKey = new PublicKey(programId);
        const balance = await connection.getBalance(publicKey);
        console.log("🚀 ~ getProgramBalance ~ balance:", balance / LAMPORTS_PER_SOL)
        return balance / LAMPORTS_PER_SOL; // Convert lamports to SOL
    } catch (error) {
        console.error('Error getting program balance:', error);
        throw error;
    }
}

/**
 * Format a lamports amount to SOL with 4 decimal places
 * @param lamports - The amount in lamports
 * @returns Formatted SOL amount as a string
 */
export function formatSolAmount(lamports: number): string {
    return (lamports / LAMPORTS_PER_SOL).toFixed(4);
}

/**
 * Get the current SOL price in USD
 * @returns The current SOL price in USD
 */
export async function getSolPrice(): Promise<number> {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = response.data;
        return data.solana.usd;
    } catch (error) {
        console.error('Error getting SOL price:', error);
        throw error;
    }
} 