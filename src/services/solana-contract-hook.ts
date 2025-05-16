import { useState, useCallback } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { isSolanaWallet } from '@dynamic-labs/solana';
import { SolanaContractUtils } from '@/utils/solana-contract-utils';

export function useSolanaContract() {
  const dynamicContext = useDynamicContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Create a contract utils instance
  const contractUtils = new SolanaContractUtils(dynamicContext);

  const isSolana = dynamicContext.primaryWallet && isSolanaWallet(dynamicContext.primaryWallet);

  // Initialize a new reserve wallet
  const createReserveWallet = useCallback(async (
    name: string,
    thresholdAmount: number // In lamports
  ): Promise<string | null> => {
    if (!isSolana) {
      setError('Solana wallet required for this operation');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const walletId = await contractUtils.initializeReserveWallet(name, thresholdAmount);
      return walletId;
    } catch (error: any) {
      console.error('Error creating reserve wallet:', error);
      setError(error.message || 'Failed to create reserve wallet');
      return null;
    } finally {
      setLoading(false);
    }
  }, [isSolana, contractUtils]);

  // Join an existing reserve wallet
  const joinReserveWallet = useCallback(async (
    reserveWalletId: string
  ): Promise<boolean> => {
    if (!isSolana) {
      setError('Solana wallet required for this operation');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      await contractUtils.joinReserveWallet(reserveWalletId);
      return true;
    } catch (error: any) {
      console.error('Error joining reserve wallet:', error);
      setError(error.message || 'Failed to join reserve wallet');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isSolana, contractUtils]);

  // Deposit funds to a reserve wallet
  const depositToReserveWallet = useCallback(async (
    reserveWalletId: string,
    amount: number // In lamports
  ): Promise<boolean> => {
    if (!isSolana) {
      setError('Solana wallet required for this operation');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      await contractUtils.deposit(reserveWalletId, amount);
      return true;
    } catch (error: any) {
      console.error('Error depositing to reserve wallet:', error);
      setError(error.message || 'Failed to deposit to reserve wallet');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isSolana, contractUtils]);

  // Approve bank account creation
  const approveAccountCreation = useCallback(async (
    reserveWalletId: string
  ): Promise<boolean> => {
    if (!isSolana) {
      setError('Solana wallet required for this operation');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      await contractUtils.approveAccountCreation(reserveWalletId);
      return true;
    } catch (error: any) {
      console.error('Error approving bank account creation:', error);
      setError(error.message || 'Failed to approve bank account creation');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isSolana, contractUtils]);

  // Set bank account created
  const setBankAccountCreated = useCallback(async (
    reserveWalletId: string,
    bankAccountAddress: string
  ): Promise<boolean> => {
    if (!isSolana) {
      setError('Solana wallet required for this operation');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      await contractUtils.setBankAccountCreated(reserveWalletId, bankAccountAddress);
      return true;
    } catch (error: any) {
      console.error('Error setting bank account created:', error);
      setError(error.message || 'Failed to set bank account created');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isSolana, contractUtils]);

  // Withdraw funds from reserve wallet
  const withdrawFromReserveWallet = useCallback(async (
    reserveWalletId: string,
    amount: number // In lamports
  ): Promise<boolean> => {
    if (!isSolana) {
      setError('Solana wallet required for this operation');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      await contractUtils.withdrawFunds(reserveWalletId, amount);
      return true;
    } catch (error: any) {
      console.error('Error withdrawing from reserve wallet:', error);
      setError(error.message || 'Failed to withdraw from reserve wallet');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isSolana, contractUtils]);

  // Transfer from bank account to wallet
  const transferFromBankToWallet = useCallback(async (
    reserveWalletId: string,
    bankAccountAddress: string,
    amount: number // In lamports
  ): Promise<boolean> => {
    if (!isSolana) {
      setError('Solana wallet required for this operation');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      await contractUtils.transferFromBankToWallet(reserveWalletId, bankAccountAddress, amount);
      return true;
    } catch (error: any) {
      console.error('Error transferring from bank to wallet:', error);
      setError(error.message || 'Failed to transfer from bank to wallet');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isSolana, contractUtils]);

  return {
    loading,
    error,
    isSolana,
    createReserveWallet,
    joinReserveWallet,
    depositToReserveWallet,
    approveAccountCreation,
    setBankAccountCreated,
    withdrawFromReserveWallet,
    transferFromBankToWallet
  };
}