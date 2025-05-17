import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface BankAccount {
    accountName: string;
    bankName: string;
    accountNumber: string;
    creationDate: string;
    balance: string;
}

interface BankAccountDetailsProps {
    bankAccount: BankAccount;
    onDistributeFunds: () => Promise<void>;
    isAdmin: boolean;
}

export function BankAccountDetails({ bankAccount, onDistributeFunds, isAdmin }: BankAccountDetailsProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleDistributeFunds = async () => {
        setIsLoading(true);
        try {
            await onDistributeFunds();
            toast.success('Funds distributed successfully!');
        } catch (error) {
            toast.error('Failed to distribute funds');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-sm font-medium text-gray-500">Account Name</p>
                    <p className="text-lg font-semibold">{bankAccount.accountName}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Bank Name</p>
                    <p className="text-lg font-semibold">{bankAccount.bankName}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Account Number</p>
                    <p className="text-lg font-semibold">{bankAccount.accountNumber}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">Creation Date</p>
                    <p className="text-lg font-semibold">{bankAccount?.creationDate || 'N/A'}</p>
                </div>
                <div className="col-span-2">
                    <p className="text-sm font-medium text-gray-500">Current Balance</p>
                    <p className="text-lg font-semibold">{bankAccount.balance} SOL</p>
                </div>
            </div>

            {isAdmin && (
                <Button
                    onClick={handleDistributeFunds}
                    disabled={isLoading}
                    className="w-full"
                >
                    {isLoading ? 'Distributing...' : 'Distribute Funds'}
                </Button>
            )}
        </div>
    );
} 