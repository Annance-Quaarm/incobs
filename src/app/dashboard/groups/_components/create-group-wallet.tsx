import { useState } from 'react';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import { PublicKey } from '@solana/web3.js';
import AsyncSelect from 'react-select/async';
import type { MultiValue } from 'react-select';
import axios from 'axios';

interface CreateGroupWalletProps {
    onSuccess?: () => void;
}

interface User {
    value: string; // wallet address
    label: string; // name or wallet address
}

const selectStyles = {
    control: (base: any) => ({
        ...base,
        backgroundColor: 'transparent',
        borderColor: 'hsl(var(--input))',
        '&:hover': {
            borderColor: 'hsl(var(--input))',
        },
    }),
    menu: (base: any) => ({
        ...base,
        // backgroundColor: 'hsl(var(--background))',
        backgroundColor: 'black',
        border: '1px solid hsl(var(--border))',
    }),
    option: (base: any, state: { isFocused: boolean }) => ({
        ...base,
        backgroundColor: state.isFocused ? 'hsl(var(--accent))' : 'transparent',
        color: 'hsl(var(--foreground))',
        '&:hover': {
            backgroundColor: 'hsl(var(--accent))',
        },
    }),
    multiValue: (base: any) => ({
        ...base,
        backgroundColor: 'hsl(var(--accent))',
    }),
    multiValueLabel: (base: any) => ({
        ...base,
        color: 'hsl(var(--accent-foreground))',
    }),
    multiValueRemove: (base: any) => ({
        ...base,
        color: 'hsl(var(--accent-foreground))',
        '&:hover': {
            backgroundColor: 'hsl(var(--accent))',
            color: 'hsl(var(--accent-foreground))',
        },
    }),
};

export function CreateGroupWallet({ onSuccess }: CreateGroupWalletProps) {
    const router = useRouter();
    const { primaryWallet } = useDynamicContext();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        groupName: '',
        description: '',
        thresholdAmount: '',
    });
    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

    const validateWalletAddress = (address: string) => {
        try {
            new PublicKey(address);
            return true;
        } catch {
            return false;
        }
    };

    const validateForm = () => {
        if (!formData.groupName.trim()) {
            toast.error('Group name is required');
            return false;
        }

        if (!formData.description.trim()) {
            toast.error('Description is required');
            return false;
        }

        const threshold = parseFloat(formData.thresholdAmount);
        if (isNaN(threshold) || threshold <= 0) {
            toast.error('Threshold amount must be greater than 0');
            return false;
        }

        if (selectedUsers.length > 0) {
            const invalidAddresses = selectedUsers
                .map(user => user.value)
                .filter(addr => !validateWalletAddress(addr));

            if (invalidAddresses.length > 0) {
                toast.error(`Invalid wallet addresses: ${invalidAddresses.join(', ')}`);
                return false;
            }
        }

        return true;
    };

    const loadOptions = async (inputValue: string) => {
        try {
            const response = await axios.get(`/api/users/search?query=${encodeURIComponent(inputValue)}`);
            const data = response.data;

            return data.users.map((user: { walletAddress: string; name: string | null }) => ({
                value: user.walletAddress,
                label: user.name || user.walletAddress
            }));
        } catch (error) {
            console.error('Error loading users:', error);
            return [];
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!primaryWallet?.address) {
            toast.error('Please connect your wallet first');
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('/api/group-wallet', {
                ...formData,
                creatorWalletAddress: primaryWallet.address,
                invitedUsers: selectedUsers.map(user => user.value).join(','),
            });

            const data = response.data;

            toast.success('Group wallet created successfully!');
            onSuccess?.();
            router.push(`/dashboard/groups/${data.groupWallet.id}`);
        } catch (error) {
            console.error('Error creating group wallet:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to create group wallet');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Card className="w-full max-w-2xl mt-8">
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
                            disabled={isLoading}
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
                            disabled={isLoading}
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
                            disabled={isLoading}
                        />
                        <p className="text-sm text-gray-500">
                            When the group wallet reaches this amount, a bank account will be created.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Invited Users (Optional)
                        </label>
                        <AsyncSelect
                            isMulti
                            value={selectedUsers}
                            onChange={(newValue: MultiValue<User>) => setSelectedUsers(newValue as User[])}
                            loadOptions={loadOptions}
                            placeholder="Search and select users to invite"
                            isDisabled={isLoading}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            noOptionsMessage={() => "No users found"}
                            loadingMessage={() => "Searching..."}
                            styles={selectStyles}
                        />
                        <p className="text-sm text-gray-500">
                            Search and select users you want to invite to the group.
                        </p>
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading || !primaryWallet?.address}
                    >
                        {isLoading ? 'Creating...' : 'Create Group Wallet'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
} 