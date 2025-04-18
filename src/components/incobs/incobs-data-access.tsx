'use client'

import { getIncobsProgram, getIncobsProgramId } from '@project/anchor'
import { useConnection } from '@solana/wallet-adapter-react'
import { Cluster, Keypair, PublicKey } from '@solana/web3.js'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import { useCluster } from '../cluster/cluster-data-access'
import { useAnchorProvider } from '../solana/solana-provider'
import { useTransactionToast } from '../ui/ui-layout'

export function useIncobsProgram() {
  const { connection } = useConnection()
  const { cluster } = useCluster()
  const transactionToast = useTransactionToast()
  const provider = useAnchorProvider()
  const programId = useMemo(() => getIncobsProgramId(cluster.network as Cluster), [cluster])
  const program = useMemo(() => getIncobsProgram(provider, programId), [provider, programId])

  const accounts = useQuery({
    queryKey: ['incobs', 'all', { cluster }],
    queryFn: () => program.account.incobs.all(),
  })

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  })

  const initialize = useMutation({
    mutationKey: ['incobs', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods.initialize().accounts({ incobs: keypair.publicKey }).signers([keypair]).rpc(),
    onSuccess: (signature) => {
      transactionToast(signature)
      return accounts.refetch()
    },
    onError: () => toast.error('Failed to initialize account'),
  })

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    initialize,
  }
}

export function useIncobsProgramAccount({ account }: { account: PublicKey }) {
  const { cluster } = useCluster()
  const transactionToast = useTransactionToast()
  const { program, accounts } = useIncobsProgram()

  const accountQuery = useQuery({
    queryKey: ['incobs', 'fetch', { cluster, account }],
    queryFn: () => program.account.incobs.fetch(account),
  })

  const closeMutation = useMutation({
    mutationKey: ['incobs', 'close', { cluster, account }],
    mutationFn: () => program.methods.close().accounts({ incobs: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accounts.refetch()
    },
  })

  const decrementMutation = useMutation({
    mutationKey: ['incobs', 'decrement', { cluster, account }],
    mutationFn: () => program.methods.decrement().accounts({ incobs: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  const incrementMutation = useMutation({
    mutationKey: ['incobs', 'increment', { cluster, account }],
    mutationFn: () => program.methods.increment().accounts({ incobs: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  const setMutation = useMutation({
    mutationKey: ['incobs', 'set', { cluster, account }],
    mutationFn: (value: number) => program.methods.set(value).accounts({ incobs: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  return {
    accountQuery,
    closeMutation,
    decrementMutation,
    incrementMutation,
    setMutation,
  }
}
