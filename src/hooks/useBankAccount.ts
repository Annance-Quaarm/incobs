import { useDynamicContext } from "@dynamic-labs/sdk-react-core"
import { useCallback, useState } from "react";
import axios from 'axios';

export function useBankAccount() {
    const { primaryWallet } = useDynamicContext();
    const userPublicKey = primaryWallet?.address;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // list available banks
    const getBanks = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get("/api/bank/list-banks");
            return response.data.banks;
        } catch (error: any) {
            console.error("Error fetching banks:", error);
            setError(error.response?.data?.error || "Failed to fetch banks");
            return null;
        } finally {
            setLoading(false);
        }
    }, []);


    // approve bank account creation for a reserve wallet
    const approveAccountCreation = useCallback(async (
        reserveWalletId: string
    ) => {
        if (!userPublicKey) {
            setError("Wallet not connected");
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`/api/reserve-wallet/${reserveWalletId}/approve-bank-account`, {
                walletAddress: userPublicKey.toString()
            });

            return response.data;
        } catch (error: any) {
            console.error("Error approving bank account creation:", error);
            setError(error.response?.data?.error || "Failed to approve bank account creation");
            return null;
        } finally {
            setLoading(false);
        }
    }, [userPublicKey]);


    // create bank account for a reserve wallet
    const createBankAccount = useCallback(async (
        reserveWalletId: string,
        bankCode: string
    ) => {
        if (!userPublicKey) {
            setError("Wallet not connected");
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`/api/reserve-wallet/${reserveWalletId}/bank-account`, {
                bankCode
            });

            return response.data;
        } catch (error: any) {
            console.error("Error creating bank account:", error);
            setError(error.response?.data?.error || "Failed to create bank account");
            return null;
        } finally {
            setLoading(false);
        }
    }, [userPublicKey]);


    // get user's virtual IBANs
    const getUserIbans = useCallback(async () => {
        if (!userPublicKey) {
            setError("Wallet not connected");
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`/api/user/${userPublicKey.toString()}/ibans`);
            return response.data;
        } catch (error: any) {
            console.error("Error fetching user IBANs:", error);
            setError(error.response?.data?.error || "Failed to fetch user IBANs");
            return null;
        } finally {
            setLoading(false);
        }
    }, [userPublicKey]);


    // get IBAN transactions
    const getIbanTransactions = useCallback(async (
        iban: string,
        page = 1,
        limit = 20
    ) => {
        if (!userPublicKey) {
            setError("Wallet not connected");
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`/api/iban/${iban}/transactions`, {
                params: {
                    walletAddress: userPublicKey.toString(),
                    page,
                    limit
                }
            });

            return response.data;
        } catch (error: any) {
            console.error("Error fetching IBAN transactions:", error);
            setError(error.response?.data?.error || "Failed to fetch IBAN transactions");
            return null;
        } finally {
            setLoading(false);
        }
    }, [userPublicKey]);


    // withdraw money from bank to wallet
    const withdrawToWallet = useCallback(async (
        iban: string,
        amount: number,
        description?: string
    ) => {
        if (!userPublicKey) {
            setError("Wallet not connected");
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`/api/iban/${iban}/withdraw`, {
                amount,
                walletAddress: userPublicKey.toString(),
                description: description || "Withdraw to wallet"
            });

            return response.data;
        } catch (error: any) {
            console.error("Error withdrawing to wallet:", error);
            setError(error.response?.data?.error || "Failed to withdraw to wallet");
            return null;
        } finally {
            setLoading(false);
        }
    }, [userPublicKey]);


    // simulate receiving money to IBAN (for testing)
    const simulateDeposit = useCallback(async (
        iban: string,
        amount: number,
        senderName?: string,
        senderReference?: string,
        description?: string
    ) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(`/api/iban/${iban}/deposit`, {
                amount,
                senderName: senderName || "External Sender",
                senderReference: senderReference || "No Reference Provided",
                description: description || "External transaction"
            });

            return response.data;
        } catch (error: any) {
            console.error("Error simulating deposit:", error);
            setError(error.response?.data?.error || "Failed to simulate deposit");
            return null;
        } finally {
            setLoading(false);
        }
    }, []);


    // get user's reserve wallets
    const getUserReserveWallets = useCallback(async () => {
        if (!userPublicKey) {
            setError("Wallet not connected");
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`/api/user/${userPublicKey.toString()}/reserve-wallets`);
            return response.data;
        } catch (error: any) {
            console.error("Error fetching user reserve wallets:", error);
            setError(error.response?.data?.error || "Failed to fetch user reserve wallets");
            return null;
        } finally {
            setLoading(false);
        }
    }, [userPublicKey]);


    // get reserve wallet details
    const getReserveWalletDetails = useCallback(async (
        reserveWalletId: string
    ) => {
        if (!userPublicKey) {
            setError("Wallet not connected");
            return null;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`/api/reserve-wallet/${reserveWalletId}`, {
                params: {
                    walletAddress: userPublicKey.toString()
                }
            });

            return response.data;
        } catch (error: any) {
            console.error("Error fetching reserve wallet details:", error);
            setError(error.response?.data?.error || "Failed to fetch reserve wallet details");
            return null;
        } finally {
            setLoading(false);
        }
    }, [userPublicKey]);

    return {
        loading,
        error,
        getBanks,
        approveAccountCreation,
        createBankAccount,
        getUserIbans,
        getIbanTransactions,
        withdrawToWallet,
        simulateDeposit,
        getUserReserveWallets,
        getReserveWalletDetails
    }
}