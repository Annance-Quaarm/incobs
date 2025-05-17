'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Wallet, Banknote, ArrowLeft } from 'lucide-react';
import { Group } from '@/types';
import { DepositModal } from '@/app/dashboard/group-wallet/_components/deposit-modal';
import { BankAccountDetails } from '@/app/dashboard/group-wallet/_components/bank-account-details';
import { toast } from 'sonner';
import Link from 'next/link';
import axios from 'axios';

export default function GroupDetailsPage() {
    const params = useParams();
    const [group, setGroup] = useState<Group | null>(null);
    console.log("🚀 ~ GroupDetailsPage ~ group:", group)
    const [isLoading, setIsLoading] = useState(true);
    const [showDepositModal, setShowDepositModal] = useState(false);

    useEffect(() => {
        const fetchGroupDetails = async () => {
            try {
                const response = await axios.get(`/api/group-wallet/${params.groupId}`);
                const data = response.data;

                if (data.error) {
                    throw new Error(data.error || 'Failed to fetch group details');
                }

                setGroup(data.group);
            } catch (error) {
                console.error('Error fetching group details:', error);
                toast.error('Failed to load group details');
            } finally {
                setIsLoading(false);
            }
        };

        fetchGroupDetails();
    }, [params.groupId]);

    const handleDeposit = async (amount: string) => {
        if (!group) return;

        try {
            const response = await axios.post(`/api/group-wallet/${group.id}/deposit`, {
                amount,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = response.data;

            if (data.error) {
                throw new Error(data.error || 'Failed to deposit funds');
            }

            // Update the group state with new balance
            setGroup(prev => prev ? {
                ...prev,
                balance: data.newBalance,
                userContributions: {
                    ...prev.userContributions,
                    [data.userWalletAddress]: amount
                }
            } : null);

            setShowDepositModal(false);
            toast.success(`Successfully deposited ${amount} SOL to ${group.name}`);
        } catch (error) {
            console.error('Error depositing funds:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to deposit funds');
        }
    };

    if (isLoading) {
        return (
            <div className="container mx-auto py-6">
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
            </div>
        );
    }

    if (!group) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Group not found</h2>
                    <p className="text-gray-500 mt-2">The group you're looking for doesn't exist or you don't have access to it.</p>
                    <Link href="/dashboard/group-wallet">
                        <Button className="mt-4">Back to Groups</Button>
                    </Link>
                </div>
            </div>
        );
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

            {group.bankAccountCreated && group?.bankAccount && (
                <Card>
                    <CardHeader>
                        <CardTitle>Bank Account Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BankAccountDetails
                            bankAccount={group?.bankAccount}
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