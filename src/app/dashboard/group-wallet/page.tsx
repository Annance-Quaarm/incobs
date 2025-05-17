'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateGroupWallet } from '@/app/dashboard/group-wallet/_components/create-group-wallet';
import { DepositModal } from '@/app/dashboard/group-wallet/_components/deposit-modal';
import { BankAccountDetails } from '@/app/dashboard/group-wallet/_components/bank-account-details';
import { toast } from 'sonner';
import { Group } from '@/types';
import GroupList from './_components/group-list';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import axios from 'axios';

export default function GroupWalletPage() {
    const { primaryWallet } = useDynamicContext();
    const [activeTab, setActiveTab] = useState('groups');
    const [showDepositModal, setShowDepositModal] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
    const [groups, setGroups] = useState<Group[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (primaryWallet?.address) {
            fetchGroups();
        }
    }, [primaryWallet?.address]);

    const fetchGroups = async () => {
        if (!primaryWallet?.address) return;

        try {
            setIsLoading(true);
            const response = await axios.get(`/api/group-wallet?walletAddress=${primaryWallet.address}`);
            const data = response.data;
            console.log("🚀 ~ fetchGroups ~ data:", data)

            setGroups(data.groups);
        } catch (error) {
            console.error('Error fetching groups:', error);
            toast.error('Failed to fetch groups');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateGroup = async () => {
        await fetchGroups(); // Refresh the list after creating a new group
    };

    const handleJoinGroup = async (groupId: string) => {
        try {
            const response = await axios.post(`/api/group-wallet/${groupId}/join`);
            const data = response.data;

            await fetchGroups(); // Refresh the list after joining
            toast.success('Successfully joined the group');
        } catch (error) {
            console.error('Error joining group:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to join group');
        }
    };

    const handleDepositClick = (groupId: string) => {
        const group = groups.find(g => g.id === groupId);
        if (group) {
            setSelectedGroup(group);
            setShowDepositModal(true);
        }
    };

    const handleDeposit = async (amount: string) => {
        if (!selectedGroup || !primaryWallet?.address) return;

        try {
            const response = await axios.post(`/api/group-wallet/${selectedGroup.id}/deposit`, {
                amount,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            await fetchGroups();
            setShowDepositModal(false);
            toast.success(`Successfully deposited ${amount} SOL to ${selectedGroup.name}`);
        } catch (error) {
            console.error('Error depositing:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to deposit');
        }
    };

    return (
        <div className="container mx-auto py-6 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="groups">Group Wallets</TabsTrigger>
                    <TabsTrigger value="create">Create New</TabsTrigger>
                </TabsList>

                <TabsContent value="groups" className="space-y-6">
                    <GroupList
                        groups={groups}
                        onJoinGroup={handleJoinGroup}
                        onDepositClick={handleDepositClick}
                        isLoading={isLoading}
                    />
                </TabsContent>

                <TabsContent value="create">
                    <CreateGroupWallet
                        onSuccess={handleCreateGroup}
                    />
                </TabsContent>
            </Tabs>

            <DepositModal
                open={showDepositModal}
                onClose={() => setShowDepositModal(false)}
                onDeposit={handleDeposit}
                groupName={selectedGroup?.name || ''}
                groupId={selectedGroup?.id || ''}
            />

            {selectedGroup && selectedGroup.bankAccountCreated && (
                <BankAccountDetails
                    bankAccount={{
                        accountName: 'Bank Account',
                        bankName: 'Bank Name',
                        accountNumber: '1234567890',
                        creationDate: '2021-01-01',
                        balance: selectedGroup.balance
                    }}
                    onDistributeFunds={() => Promise.resolve()}
                    isAdmin={true}
                />
            )}
        </div>
    );
} 