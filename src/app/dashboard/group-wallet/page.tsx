'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateGroupWallet } from '@/app/dashboard/group-wallet/_components/create-group-wallet';
import { DepositModal } from '@/app/dashboard/group-wallet/_components/deposit-modal';
import { BankAccountDetails } from '@/app/dashboard/group-wallet/_components/bank-account-details';
import { toast } from 'sonner';
import { Group } from '@/types';
import GroupList from './_components/group-list';


export default function GroupWalletPage() {
    const [activeTab, setActiveTab] = useState('groups');
    const [showDepositModal, setShowDepositModal] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);


    // Mock data - replace with actual data from your blockchain
    const [groups, setGroups] = useState<Group[]>([
        {
            id: '1',
            name: 'Family Fund',
            balance: '5.0',
            thresholdAmount: '10.0',
            memberCount: 3,
            maxMembers: 5,
            isJoined: true,
            bankAccountCreated: true,
            userContributions: {
                'user1': '2.0',
                'user2': '2.0',
                'user3': '1.0'
            },
            userApprovals: ['user1', 'user2'],
            description: 'Family fund for emergencies'
        },
        {
            id: '2',
            name: 'Vacation Pool',
            balance: '2.5',
            thresholdAmount: '5.0',
            memberCount: 2,
            maxMembers: 5,
            isJoined: false,
            bankAccountCreated: false,
            userContributions: {
                'user1': '1.5',
                'user2': '1.0'
            },
            userApprovals: [],
            description: 'Vacation pool for family vacation'
        },
        {
            id: '3',
            name: 'Emergency Fund',
            balance: '7.5',
            thresholdAmount: '15.0',
            memberCount: 5,
            maxMembers: 5,
            isJoined: false,
            bankAccountCreated: true,
            userContributions: {
                'user1': '2.5',
                'user2': '2.0',
                'user3': '1.5',
                'user4': '1.0',
                'user5': '0.5'
            },
            userApprovals: ['user1', 'user2', 'user3', 'user4', 'user5'],
            description: 'Emergency fund for unexpected expenses'
        }
    ]);

    const handleCreateGroup = async (name: string, threshold: string) => {
        // Mock implementation - replace with actual blockchain interaction
        const newGroup: Group = {
            id: Date.now().toString(),
            name,
            balance: '0.0',
            thresholdAmount: threshold,
            memberCount: 1,
            maxMembers: 5,
            isJoined: true,
            bankAccountCreated: false,
            userContributions: {},
            userApprovals: [],
            description: ''
        };

        setGroups([...groups, newGroup]);
        toast.success("Group wallet created successfully.");
    };

    const handleJoinGroup = async (groupId: string) => {
        // Mock implementation - replace with actual blockchain interaction
        setGroups(groups.map(group => {
            if (group.id === groupId) {
                return {
                    ...group,
                    memberCount: group.memberCount + 1,
                    isJoined: true
                };
            }
            return group;
        }));
    };

    const handleDepositClick = (groupId: string) => {
        const group = groups.find(g => g.id === groupId);
        if (group) {
            setSelectedGroup(group);
            setShowDepositModal(true);
        }
    };

    const handleDeposit = async (amount: string) => {
        if (!selectedGroup) return;

        // Mock implementation - replace with actual blockchain interaction
        setGroups(groups.map(group => {
            if (group.id === selectedGroup.id) {
                return {
                    ...group,
                    balance: (parseFloat(group.balance) + parseFloat(amount)).toFixed(1),
                    userContributions: {
                        ...group.userContributions,
                        'currentUser': amount
                    }
                };
            }
            return group;
        }));

        setShowDepositModal(false);
        toast.success(`Successfully deposited ${amount} SOL to ${selectedGroup.name}`);
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
                    />
                </TabsContent>

                <TabsContent value="create">
                    <CreateGroupWallet
                        onSuccess={() => {
                            // Implement me
                        }}
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