export interface Group {
    id: string;
    name: string;
    balance: string;
    thresholdAmount: string;
    memberCount: number;
    maxMembers: number;
    isJoined: boolean;
    bankAccountCreated: boolean;
    userContributions: Record<string, string>;
    userApprovals: string[];
    description: string;
    bankAccount?: {
        accountName: string;
        bankName: string;
        accountNumber: string;
        creationDate: string;
        balance: string;
    } | null;
} 