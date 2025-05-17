import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface DepositModalProps {
    groupId: string;
    groupName: string;
    onDeposit: (amount: string) => Promise<void>;
    onClose: () => void;
    open: boolean;
}

export function DepositModal({ groupId, groupName, onDeposit, onClose, open }: DepositModalProps) {
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await onDeposit(amount);
            toast.success('Deposit successful!');
            onClose();
        } catch (error) {
            toast.error('Failed to deposit funds');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Deposit to {groupName}</DialogTitle>
                    <DialogDescription>
                        Enter the amount you want to deposit to the group wallet.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="amount" className="text-sm font-medium">
                            Amount (SOL)
                        </label>
                        <Input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            required
                            min="0.01"
                        // step="0.01"
                        />
                    </div>

                    <div className="flex space-x-2">
                        <Button
                            type="submit"
                            className="flex-1"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Processing...' : 'Deposit'}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
} 