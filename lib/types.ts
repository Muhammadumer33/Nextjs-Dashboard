// 📍 Location: my-app/lib/types.ts
// Purpose: Define all TypeScript interfaces and types

export interface Thread {
    id: number;
    user: string;
    title: string;
    status: 'Active' | 'Archived' | 'Flagged';
    lastActivity: string;
    tokens: number;
    createdAt: string;
}

export interface Message {
    id: number;
    type: 'user' | 'bot';
    content: string;
    timestamp?: string;
}

export interface DashboardStats {
    totalThreads: number;
    totalTokens: number;
    avgTokensPerThread: number;
    last30DaysTokens: number;
    threadsChange: number;
    tokensChange: number;
    avgTokensChange: number;
    last30DaysChange: number;
}

export type ViewType = 'dashboard' | 'threads' | 'conversation';