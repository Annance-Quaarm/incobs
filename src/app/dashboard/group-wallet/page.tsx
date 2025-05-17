'use client';

import { useState, useEffect, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateGroupWallet } from '@/app/dashboard/group-wallet/_components/create-group-wallet';
import { DepositModal } from '@/app/dashboard/group-wallet/_components/deposit-modal';
import { toast } from 'sonner';
import { ReserveWallet, ReserveWalletMember, BankAccount } from '@prisma/client';
import GroupList from './_components/group-list';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import axios from 'axios';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { format, parseISO } from 'date-fns';

type ReserveWalletWithRelations = ReserveWallet & {
    members: ReserveWalletMember[];
    bankAccount?: (BankAccount & {
        bank: {
            name: string;
        };
    }) | null;
};

export default function GroupWalletPage() {
    const { primaryWallet } = useDynamicContext();
    const [activeTab, setActiveTab] = useState('groups');
    const [showDepositModal, setShowDepositModal] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState<ReserveWalletWithRelations | null>(null);
    const [groups, setGroups] = useState<ReserveWalletWithRelations[]>([]);
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
            setGroups(response.data.groups);
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
            await axios.post(`/api/group-wallet/${groupId}/join`);
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
            await axios.post(`/api/group-wallet/${selectedGroup.id}/deposit`, {
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

    // Transform ReserveWallet data for UI components
    const transformGroupForUI = (group: ReserveWalletWithRelations) => ({
        id: group.id,
        name: group.name,
        balance: (Number(group.balance) / LAMPORTS_PER_SOL).toFixed(1),
        thresholdAmount: (Number(group.threshold) / LAMPORTS_PER_SOL).toFixed(1),
        memberCount: group.members.length,
        maxMembers: 5,
        isJoined: true,
        bankAccountCreated: group.bankAccountCreated,
        userContributions: group.members.reduce((acc, member) => ({
            ...acc,
            [member.name || member.walletAddress]: (Number(member.contribution) / LAMPORTS_PER_SOL).toFixed(1)
        }), {}),
        userApprovals: group.members
            .filter(member => member.hasApproved)
            .map(member => member.walletAddress),
        description: group.description || '',
        bankAccount: group.bankAccountCreated && group.bankAccount ? {
            accountName: group.name,
            bankName: group.bankAccount.bank.name,
            accountNumber: group?.bankAccount?.accountNumber,
            creationDate: format(parseISO(group.bankAccount.createdAt.toString()), 'yyyy-MM-dd HH:mm:ss'),
            balance: (Number(group?.bankAccount?.balance) / LAMPORTS_PER_SOL).toFixed(1)
        } : null
    });

    const groupList = useMemo(() => groups.map(transformGroupForUI), [groups]);

    return (
        <div className="container mx-auto py-6 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="groups">Group Wallets</TabsTrigger>
                    <TabsTrigger value="create">Create New</TabsTrigger>
                </TabsList>

                <TabsContent value="groups" className="space-y-6">
                    <GroupList
                        groups={groupList}
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
        </div>
    );
} 