// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'

import McbuseWalletsIDL from '../target/idl/mcbuse_wallets.json'
import type { McbuseWallets } from '../target/types/mcbuse_wallets'

// Re-export the generated IDL and type
export { McbuseWallets, McbuseWalletsIDL }

// The programId is imported from the program IDL.
export const MCBUSE_WALLETS_PROGRAM_ID = new PublicKey(McbuseWalletsIDL.address)

// This is a helper function to get the Incobs Anchor program.
export function getMcbuseWalletsProgram(provider: AnchorProvider, address?: PublicKey) {
    return new Program({ ...McbuseWalletsIDL, address: address ? address.toBase58() : McbuseWalletsIDL.address } as McbuseWallets, provider)
}

// This is a helper function to get the program ID for the Incobs program depending on the cluster.
export function getIncobsProgramId(cluster: Cluster) {
    switch (cluster) {
        case 'devnet':
        case 'testnet':
            // This is the program ID for the Incobs program on devnet and testnet.
            // TODO: Update this to the actual program ID for the Mcbuse Wallets program on devnet and testnet.
            return new PublicKey('coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF')
        case 'mainnet-beta':
        default:
            return MCBUSE_WALLETS_PROGRAM_ID
    }
}

export type McbuseWalletsProgram = Program<McbuseWallets>
export type McbuseWalletsProvider = AnchorProvider
export type McbuseWalletsCluster = Cluster
export type McbuseWalletsPublicKey = PublicKey
