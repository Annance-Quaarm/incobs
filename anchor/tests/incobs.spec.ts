import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair } from '@solana/web3.js'
import { Incobs } from '../target/types/incobs'

describe('incobs', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.Incobs as Program<Incobs>

  const incobsKeypair = Keypair.generate()

  it('Initialize Incobs', async () => {
    await program.methods
      .initialize()
      .accounts({
        incobs: incobsKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([incobsKeypair])
      .rpc()

    const currentCount = await program.account.incobs.fetch(incobsKeypair.publicKey)

    expect(currentCount.count).toEqual(0)
  })

  it('Increment Incobs', async () => {
    await program.methods.increment().accounts({ incobs: incobsKeypair.publicKey }).rpc()

    const currentCount = await program.account.incobs.fetch(incobsKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Increment Incobs Again', async () => {
    await program.methods.increment().accounts({ incobs: incobsKeypair.publicKey }).rpc()

    const currentCount = await program.account.incobs.fetch(incobsKeypair.publicKey)

    expect(currentCount.count).toEqual(2)
  })

  it('Decrement Incobs', async () => {
    await program.methods.decrement().accounts({ incobs: incobsKeypair.publicKey }).rpc()

    const currentCount = await program.account.incobs.fetch(incobsKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Set incobs value', async () => {
    await program.methods.set(42).accounts({ incobs: incobsKeypair.publicKey }).rpc()

    const currentCount = await program.account.incobs.fetch(incobsKeypair.publicKey)

    expect(currentCount.count).toEqual(42)
  })

  it('Set close the incobs account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        incobs: incobsKeypair.publicKey,
      })
      .rpc()

    // The account should no longer exist, returning null.
    const userAccount = await program.account.incobs.fetchNullable(incobsKeypair.publicKey)
    expect(userAccount).toBeNull()
  })
})
