'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Wallet, Banknote, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { ReserveWallet, ReserveWalletMember, BankAccount } from '@prisma/client';
import { DepositModal } from '@/app/dashboard/groups/_components/deposit-modal';
import { BankAccountDetails } from '@/app/dashboard/groups/_components/bank-account-details';
import { toast } from 'sonner';
import Link from 'next/link';
import axios from 'axios';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useBankAccount } from '@/hooks/useBankAccount';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { format, parseISO } from 'date-fns';

type ReserveWalletWithRelations = ReserveWallet & {
    members: ReserveWalletMember[];
    bankAccount?: (BankAccount & {
        bank: {
            name: string;
        };
    }) | null;
};

export default function GroupDetailsPage() {
    const params = useParams();
    const { primaryWallet } = useDynamicContext();
    const { getBanks, createBankAccount, error } = useBankAccount();
    const [group, setGroup] = useState<ReserveWalletWithRelations | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showDepositModal, setShowDepositModal] = useState(false);
    const [banks, setBanks] = useState<Array<{ id: string; name: string; code: string }>>([]);
    const [selectedBank, setSelectedBank] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [groupResponse, banksList] = await Promise.all([
                    axios.get(`/api/group-wallet/${params.groupId}`),
                    getBanks()
                ]);

                if (groupResponse.data.error) {
                    throw new Error(groupResponse.data.error || 'Failed to fetch group details');
                }

                setGroup(groupResponse.data.group);
                if (banksList) {
                    setBanks(banksList);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Failed to load data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const handleBankSelect = async (bankId: string) => {
        if (!group) return;

        try {
            const bank = banks.find(b => b.id === bankId);
            if (!bank) return;

            const result = await createBankAccount(group.id, bank.code);
            if (result) {
                toast.success('Bank account created successfully!');
                const response = await axios.get(`/api/group-wallet/${params.groupId}`);
                setGroup(response.data.group);
                setSelectedBank('');
            }
        } catch (error) {
            console.error('Error creating bank account:', error);
            toast.error('Failed to create bank account');
        }
    };

    const handleDeposit = async (amount: string) => {
        if (!group) return;

        try {
            await axios.post(`/api/group-wallet/${group.id}/deposit`, {
                amount,
                walletAddress: primaryWallet?.address
            });

            // Refresh group data
            const groupResponse = await axios.get(`/api/group-wallet/${params.groupId}`);
            setGroup(groupResponse.data.group);
            setShowDepositModal(false);
            toast.success(`Successfully deposited ${amount} SOL to ${group.name}`);
        } catch (error) {
            console.error('Error depositing funds:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to deposit funds');
        }
    };

    const handleApprovalToggle = async () => {
        if (!group || !primaryWallet?.address) return;

        try {
            const response = await axios.post(`/api/group-wallet/${group.id}/approve`, {
                walletAddress: primaryWallet?.address
            });
            if (response.data.error) {
                throw new Error(response.data.error);
            }

            const groupResponse = await axios.get(`/api/group-wallet/${params.groupId}`);
            setGroup(groupResponse.data.group);
            toast.success('Approval status updated successfully');
        } catch (error) {
            console.error('Error updating approval:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to update approval status');
        }
    };

    const currentMember = group?.members.find(m => m.walletAddress === primaryWallet?.address);
    const approvalCount = group?.members.filter(m => m.hasApproved).length || 0;
    const totalMembers = group?.members.length || 0;

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
                    <Link href="/dashboard/groups">
                        <Button className="mt-4">Back to Groups</Button>
                    </Link>
                </div>
            </div>
        );
    }
    const balance = Number(parseFloat(group.balance.toString())) / LAMPORTS_PER_SOL;
    const threshold = Number(parseFloat(group.threshold.toString())) / LAMPORTS_PER_SOL;
    const isThresholdReached = balance >= threshold;

    return (
        <div className="container mx-auto py-6 space-y-6">
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/dashboard/groups">
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
                            <span className="font-medium">{balance} SOL</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Banknote className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-500">Threshold</span>
                            </div>
                            <span className="font-medium">{threshold} SOL</span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-500">Members</span>
                                </div>
                                <span className="text-sm">
                                    {group.members.length}/5
                                </span>
                            </div>
                            <Progress
                                value={(group.members.length / 5) * 100}
                                className="bg-green-500"
                            />
                        </div>

                        <Button
                            className="w-full"
                            onClick={() => setShowDepositModal(true)}
                        // disabled={isThresholdReached}
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
                            {group.members.map((member) => (
                                <div key={member.id} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Users className="w-4 h-4 text-gray-500" />
                                        <span className="text-sm">{member.name || member.walletAddress}</span>
                                    </div>
                                    <span className="font-medium">{(Number(member.contribution) / LAMPORTS_PER_SOL)} SOL</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {!group.bankAccountCreated && (
                <>
                    <Card>
                        <CardHeader>
                            <CardTitle>Bank Account Approvals</CardTitle>
                            <CardDescription>
                                Members need to approve the bank account creation
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <Users className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-gray-500">Approvals</span>
                                </div>
                                <span className="text-sm">
                                    {approvalCount}/{totalMembers}
                                </span>
                            </div>
                            <Progress
                                value={(approvalCount / totalMembers) * 100}
                                className="bg-green-500"
                            />
                            <div className="space-y-4 mt-4">
                                {group.members.map((member) => (
                                    <div key={member.id} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            {member.hasApproved ? (
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <XCircle className="w-4 h-4 text-red-500" />
                                            )}
                                            <span className="text-sm">{member.name || member.walletAddress}</span>
                                        </div>
                                        {member.walletAddress === primaryWallet?.address && (
                                            <div className="flex items-center space-x-2">
                                                <Switch
                                                    checked={member.hasApproved}
                                                    onCheckedChange={handleApprovalToggle}
                                                />
                                                <span className="text-sm text-gray-500">
                                                    {member.hasApproved ? 'Approved' : 'Not Approved'}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Select Bank</CardTitle>
                            <CardDescription>
                                Choose a bank to create an account when the threshold is reached and all members have approved
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Select
                                value={selectedBank}
                                onValueChange={handleBankSelect}
                                disabled={balance < threshold || approvalCount < totalMembers}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a bank" />
                                </SelectTrigger>
                                <SelectContent>
                                    {banks.map((bank) => (
                                        <SelectItem key={bank.id} value={bank.id}>
                                            {bank.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {balance < threshold && (
                                <p className="text-sm text-gray-500 mt-2">
                                    Bank selection will be enabled when the balance reaches the threshold amount
                                </p>
                            )}
                            {balance >= threshold && approvalCount < totalMembers && (
                                <p className="text-sm text-gray-500 mt-2">
                                    Bank selection will be enabled when all members have approved
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </>
            )}

            {group.bankAccountCreated && group.bankAccount && (
                <Card>
                    <CardHeader>
                        <CardTitle>Bank Account Details</CardTitle>
                        <CardDescription>
                            Information about the bank account associated with this group wallet.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <BankAccountDetails
                            bankAccount={{
                                accountName: group.name,
                                bankName: group.bankAccount.bank.name,
                                accountNumber: group.bankAccount.accountNumber,
                                creationDate: format(parseISO(group.bankAccount.createdAt.toString()), 'yyyy-MM-dd HH:mm:ss'),
                                balance: (Number(parseFloat(group?.bankAccount?.balance.toString())) / LAMPORTS_PER_SOL).toString()
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