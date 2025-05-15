'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Wallet, Banknote } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';
import { Group } from '@/types';
import { useRouter } from 'next/navigation';

interface GroupListProps {
    groups: Group[];
    onJoinGroup: (groupId: string) => Promise<void>;
    onDepositClick: (groupId: string) => void;
}

export default function GroupList({ groups, onJoinGroup, onDepositClick }: GroupListProps) {
    const router = useRouter();
    const [joiningGroupId, setJoiningGroupId] = useState<string | null>(null);
    const [isJoining, setIsJoining] = useState(false);

    const handleJoinClick = async (groupId: string) => {
        setJoiningGroupId(groupId);
    };

    const handleConfirmJoin = async () => {
        if (!joiningGroupId) return;

        try {
            setIsJoining(true);
            await onJoinGroup(joiningGroupId);
            toast.success("You have successfully joined the group.");

        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to join group");
        } finally {
            setIsJoining(false);
            setJoiningGroupId(null);
        }
    };

    const getProgressColor = (current: number, max: number) => {
        const percentage = (current / max) * 100;
        if (percentage >= 80) return "bg-red-500";
        if (percentage >= 60) return "bg-yellow-500";
        return "bg-green-500";
    };

    const handleCardClick = (groupId: string) => {
        router.push(`/dashboard/group-wallet/${groupId}`);
    };

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
                <Card
                    key={group.id}
                    className="relative cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleCardClick(group.id)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl">{group.name}</CardTitle>
                                <CardDescription>
                                    Group Wallet
                                </CardDescription>
                            </div>
                            <Badge variant={group.bankAccountCreated ? "default" : "secondary"}>
                                {group.bankAccountCreated ? "Bank Linked" : "No Bank"}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
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
                                    className={getProgressColor(group.memberCount, group.maxMembers)}
                                />
                            </div>

                            {group.isJoined ? (
                                <Button
                                    className="w-full"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDepositClick(group.id);
                                    }}
                                >
                                    Deposit
                                </Button>
                            ) : (
                                <Button
                                    className="w-full"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleJoinClick(group.id);
                                    }}
                                    disabled={group.memberCount >= group.maxMembers}
                                >
                                    {group.memberCount >= group.maxMembers ? "Group Full" : "Join Group"}
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ))}

            <AlertDialog open={!!joiningGroupId} onOpenChange={() => setJoiningGroupId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Join Group</AlertDialogTitle>
                        <AlertDialogDescription>
                            <div className="space-y-4">
                                <p>Are you sure you want to join this group? Please note:</p>
                                <ul className="list-disc pl-4 space-y-2">
                                    <li>You can only join one group at a time</li>
                                    <li>Groups have a maximum of 5 members</li>
                                    <li>You&pos;ll need to contribute to the group wallet</li>
                                    <li>You&apos;ll be able to approve bank account creation</li>
                                </ul>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleConfirmJoin}
                            disabled={isJoining}
                        >
                            {isJoining ? "Joining..." : "Join Group"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
} 