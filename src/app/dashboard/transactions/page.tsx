'use client';

import { useState } from 'react';
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

interface Transaction {
    id: string;
    type: 'deposit' | 'withdrawal' | 'transfer';
    amount: string;
    status: 'completed' | 'pending' | 'failed';
    date: string;
    groupName: string;
    description: string;
}

export default function TransactionsPage() {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data - replace with transactions from dynamic
    const mockTransactions: Transaction[] = [
        {
            id: '1',
            type: 'deposit',
            amount: '2.5',
            status: 'completed',
            date: '2024-03-20 14:30',
            groupName: 'Family Fund',
            description: 'Deposit to group wallet',
        },
        {
            id: '2',
            type: 'withdrawal',
            amount: '1.0',
            status: 'pending',
            date: '2024-03-19 10:15',
            groupName: 'Family Fund',
            description: 'Withdrawal request',
        },
        {
            id: '3',
            type: 'transfer',
            amount: '0.5',
            status: 'completed',
            date: '2024-03-18 16:45',
            groupName: 'Family Fund',
            description: 'Transfer to member',
        },
    ];

    const getStatusColor = (status: Transaction['status']) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getTransactionIcon = (type: Transaction['type']) => {
        switch (type) {
            case 'deposit':
                return <ArrowDownLeft className="w-4 h-4 text-green-600" />;
            case 'withdrawal':
                return <ArrowUpRight className="w-4 h-4 text-red-600" />;
            case 'transfer':
                return <ArrowUpRight className="w-4 h-4 text-blue-600" />;
            default:
                return null;
        }
    };

    const filteredTransactions = mockTransactions.filter(transaction => {
        const matchesSearch =
            transaction.groupName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTab = activeTab === 'all' || transaction.type === activeTab;

        return matchesSearch && matchesTab;
    });

    return (
        <div className="container mx-auto py-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Transactions</h1>
                <div className="flex items-center space-x-4">
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
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="deposit">Deposits</TabsTrigger>
                    <TabsTrigger value="withdrawal">Withdrawals</TabsTrigger>
                    <TabsTrigger value="transfer">Transfers</TabsTrigger>
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
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Group</TableHead>
                                        <TableHead>Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredTransactions.map((transaction) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell>
                                                <div className="flex items-center space-x-2">
                                                    {getTransactionIcon(transaction.type)}
                                                    <span className="capitalize">{transaction.type}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{transaction.amount} SOL</TableCell>
                                            <TableCell>
                                                <Badge className={getStatusColor(transaction.status)}>
                                                    {transaction.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{transaction.date}</TableCell>
                                            <TableCell>{transaction.groupName}</TableCell>
                                            <TableCell>{transaction.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
} 