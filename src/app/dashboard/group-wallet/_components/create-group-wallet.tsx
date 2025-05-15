import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface CreateGroupWalletProps {
    onSuccess?: () => void;
}

export function CreateGroupWallet({ onSuccess }: CreateGroupWalletProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        groupName: '',
        description: '',
        thresholdAmount: '',
        invitedUsers: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // TODO: Implement group wallet creation logic
            // This will be connected to your smart contract
            toast.success('Group wallet created successfully!');
            onSuccess?.();
        } catch (error) {
            toast.error('Failed to create group wallet');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Create Group Wallet</CardTitle>
                <CardDescription>
                    Create a new group wallet to manage shared funds with other members.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="groupName" className="text-sm font-medium">
                            Group Name
                        </label>
                        <Input
                            id="groupName"
                            name="groupName"
                            value={formData.groupName}
                            onChange={handleChange}
                            placeholder="Enter group name"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium">
                            Description
                        </label>
                        <Input
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter group description"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="thresholdAmount" className="text-sm font-medium">
                            Threshold Amount (SOL)
                        </label>
                        <Input
                            id="thresholdAmount"
                            name="thresholdAmount"
                            type="number"
                            value={formData.thresholdAmount}
                            onChange={handleChange}
                            placeholder="Enter threshold amount"
                            required
                            min="0"
                            step="0.01"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="invitedUsers" className="text-sm font-medium">
                            Invited Users (Optional)
                        </label>
                        <Input
                            id="invitedUsers"
                            name="invitedUsers"
                            value={formData.invitedUsers}
                            onChange={handleChange}
                            placeholder="Enter wallet addresses separated by commas"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating...' : 'Create Group Wallet'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
} 