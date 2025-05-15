'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Wallet, Banknote, ArrowLeft } from 'lucide-react';
import { Group } from '@/types';
import { DepositModal } from '@/app/dashboard/group-wallet/_components/deposit-modal';
import { BankAccountDetails } from '@/app/dashboard/group-wallet/_components/bank-account-details';
import { toast } from 'sonner';
import Link from 'next/link';

export default function GroupDetailsPage() {
    const params = useParams();
    const [group, setGroup] = useState<Group | null>(null);
    const [showDepositModal, setShowDepositModal] = useState(false);

    // Mock data - replace with actual data fetching
    useEffect(() => {
        // Simulate fetching group data
        const mockGroup: Group = {
            id: params.groupId as string,
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
        };
        setGroup(mockGroup);
    }, [params.groupId]);

    const handleDeposit = async (amount: string) => {
        if (!group) return;

        // Mock implementation - replace with actual blockchain interaction
        setGroup({
            ...group,
            balance: (parseFloat(group.balance) + parseFloat(amount)).toFixed(1),
            userContributions: {
                ...group.userContributions,
                'currentUser': amount
            }
        });

        setShowDepositModal(false);
        toast.success(`Successfully deposited ${amount} SOL to ${group.name}`);
    };

    if (!group) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-6 space-y-6">
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/dashboard/group-wallet">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold">{group.name}</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Group Overview</CardTitle>
                        <CardDescription>{group.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Wallet className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-500">Balance</span>
                            </div>
                            <span className="font-medium">{group.balance} SOL</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Banknote className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-500">Threshold</span>
                            </div>
                            <span className="font-medium">{group.thresholdAmount} SOL</span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-500">Members</span>
                                </div>
                                <span className="text-sm">
                                    {group.memberCount}/{group.maxMembers}
                                </span>
                            </div>
                            <Progress
                                value={(group.memberCount / group.maxMembers) * 100}
                                className="bg-green-500"
                            />
                        </div>

                        <Button
                            className="w-full"
                            onClick={() => setShowDepositModal(true)}
                        >
                            Deposit
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Member Contributions</CardTitle>
                        <CardDescription>Current contributions from each member</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {Object.entries(group.userContributions).map(([userId, amount]) => (
                                <div key={userId} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Users className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm">{userId}</span>
                                    </div>
                                    <span className="font-medium">{amount} SOL</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {group.bankAccountCreated && (
                <Card>
                    <CardHeader>
                        <CardTitle>Bank Account Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BankAccountDetails
                            bankAccount={{
                                accountName: 'Bank Account',
                                bankName: 'Bank Name',
                                accountNumber: '1234567890',
                                creationDate: '2021-01-01',
                                balance: group.balance
                            }}
                            onDistributeFunds={() => Promise.resolve()}
                            isAdmin={true}
                        />
                    </CardContent>
                </Card>
            )}

            <DepositModal
                open={showDepositModal}
                onClose={() => setShowDepositModal(false)}
                onDeposit={handleDeposit}
                groupName={group.name}
                groupId={group.id}
            />
        </div>
    );
} 