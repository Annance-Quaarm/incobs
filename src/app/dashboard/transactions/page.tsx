'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, Search } from 'lucide-react';
import { useBankAccount } from '@/hooks/useBankAccount';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

interface Transaction {
    id: string;
    amount: string;
    direction: string;
    description: string;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    senderName: string | null;
    senderReference: string | null;
    createdAt: string;
    walletTransaction: {
        id: string;
        amount: string;
        walletAddress: string;
        createdAt: string;
    } | null;
}

interface IbanInfo {
    virtualIbans: {
        id: string;
        iban: string;
        bankName: string;
        bankCode: string;
        accountNumber: string;
        reserveWalletId: string;
        reserveWalletName: string;
        contribution: string;
        createdAt: string;
    }[];
    walletAddress: string;
}

export default function TransactionsPage() {
    const { primaryWallet } = useDynamicContext();
    const { getIbanTransactions, getUserIbans, loading, error } = useBankAccount();
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [availableIbans, setAvailableIbans] = useState<IbanInfo>({
        virtualIbans: [],
        walletAddress: ''
    });
    const [selectedIban, setSelectedIban] = useState<string>('');

    // Fetch available IBANs when component mounts
    useEffect(() => {
        const fetchIbans = async () => {
            const ibans = await getUserIbans();
            if (ibans) {
                setAvailableIbans(ibans);
                setSelectedIban(ibans.virtualIbans[0].iban);
            }
        };

        fetchIbans();
    }, [getUserIbans]);

    // Fetch transactions when selected IBAN or page changes
    useEffect(() => {
        const fetchTransactions = async () => {
            if (!selectedIban) return;

            const result = await getIbanTransactions(selectedIban, currentPage);
            if (result) {
                setTransactions(result.transactions);
                setTotalPages(result.totalPages);
            }
        };

        fetchTransactions();
    }, [selectedIban, currentPage, getIbanTransactions]);

    const getStatusColor = (status: Transaction['status']) => {
        switch (status) {
            case 'COMPLETED':
                return 'bg-green-100 text-green-800';
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-800';
            case 'FAILED':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getTransactionIcon = (direction: string) => {
        switch (direction) {
            case 'INCOMING':
                return <ArrowDownLeft className="w-4 h-4 text-green-600" />;
            case 'OUTGOING':
                return <ArrowUpRight className="w-4 h-4 text-red-600" />;
            default:
                return null;
        }
    };

    const filteredTransactions = transactions?.filter(transaction => {
        const matchesSearch =
            (transaction.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
            (transaction.senderName?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
            (transaction.senderReference?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

        const matchesTab = activeTab === 'all' ||
            (activeTab === 'deposit' && transaction.direction === 'INCOMING') ||
            (activeTab === 'withdrawal' && transaction.direction === 'OUTGOING');

        return matchesSearch && matchesTab;
    });

    if (error) {
        return (
            <div className="container mx-auto py-6">
                <div className="text-red-500">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Transactions</h1>
                <div className="flex items-center space-x-4">
                    <Select
                        value={selectedIban}
                        onValueChange={setSelectedIban}
                    >
                        <SelectTrigger className="w-[300px]">
                            <SelectValue placeholder="Select IBAN" />
                        </SelectTrigger>
                        <SelectContent>
                            {availableIbans?.virtualIbans?.map((iban) => (
                                <SelectItem key={iban.iban} value={iban.iban}>
                                    {iban.iban}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="Search transactions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 w-[300px]"
                        />
                    </div>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="COMPLETED">Completed</SelectItem>
                            <SelectItem value="PENDING">Pending</SelectItem>
                            <SelectItem value="FAILED">Failed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="deposit">Deposits</TabsTrigger>
                    <TabsTrigger value="withdrawal">Withdrawals</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Transaction History</CardTitle>
                            <CardDescription>
                                View and manage your transaction history.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {loading ? (
                                <div className="text-center py-4">Loading transactions...</div>
                            ) : !selectedIban ? (
                                <div className="text-center py-4">Please select an IBAN to view transactions</div>
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Type</TableHead>
                                            <TableHead>Amount</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Sender</TableHead>
                                            <TableHead>Description</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredTransactions?.map((transaction) => (
                                            <TableRow key={transaction.id}>
                                                <TableCell>
                                                    <div className="flex items-center space-x-2">
                                                        {getTransactionIcon(transaction.direction)}
                                                        <span className="capitalize">
                                                            {transaction.direction.toLowerCase()}
                                                        </span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{transaction.amount} SOL</TableCell>
                                                <TableCell>
                                                    <Badge className={getStatusColor(transaction.status)}>
                                                        {transaction.status.toLowerCase()}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    {new Date(transaction.createdAt).toLocaleString()}
                                                </TableCell>
                                                <TableCell>
                                                    {transaction.senderName || 'N/A'}
                                                </TableCell>
                                                <TableCell>{transaction.description || 'N/A'}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
} 