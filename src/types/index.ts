export interface Group {
    id: string;
    name: string;
    balance: string | number;
    thresholdAmount: string | number;
    memberCount: number;
    maxMembers: number;
    isJoined: boolean;
    bankAccountCreated: boolean;
    userContributions: { [key: string]: string };
    userApprovals: string[];
    description: string;
}