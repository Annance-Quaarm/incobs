// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import IncobsIDL from '../target/idl/incobs.json'
import type { Incobs } from '../target/types/incobs'

// Re-export the generated IDL and type
export { Incobs, IncobsIDL }

// The programId is imported from the program IDL.
export const INCOBS_PROGRAM_ID = new PublicKey(IncobsIDL.address)

// This is a helper function to get the Incobs Anchor program.
export function getIncobsProgram(provider: AnchorProvider, address?: PublicKey) {
  return new Program({ ...IncobsIDL, address: address ? address.toBase58() : IncobsIDL.address } as Incobs, provider)
}

// This is a helper function to get the program ID for the Incobs program depending on the cluster.
export function getIncobsProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Incobs program on devnet and testnet.
      return new PublicKey('coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF')
    case 'mainnet-beta':
    default:
      return INCOBS_PROGRAM_ID
  }
}
