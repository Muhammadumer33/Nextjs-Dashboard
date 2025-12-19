// 📍 Location: my-app/components/dashboard/Dashboard.tsx
// Purpose: Main dashboard view with stats and threads

'use client';

import { MessageCircle } from 'lucide-react';
import { Thread } from '@/lib/types';
import StatsCard from './StatsCard';
import PromptBox from './PromptBox';

interface DashboardProps {
    threads: Thread[];
    onThreadClick: (thread: Thread) => void;
    onViewAllClick: () => void;
}

export default function Dashboard({ threads, onThreadClick, onViewAllClick }: DashboardProps) {
    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <p className="text-gray-500 mt-1">
                        Overview of your chatbot&apos;s performance and usage.
                    </p>
                </div>
                <div className="flex gap-3">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                        <option>Last 1 year</option>
                    </select>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <StatsCard
                    title="Total Threads"
                    value={892}
                    change={2.1}
                    changeLabel="from last month"
                />
                <StatsCard
                    title="Total Tokens Used"
                    value="1,578,320"
                    change={10.3}
                    changeLabel="from last month"
                />
                <StatsCard
                    title="Avg Tokens / Thread"
                    value={1770}
                    change={-0.5}
                    changeLabel="from last month"
                />
                <StatsCard
                    title="Last 30d Tokens"
                    value="345,670"
                    change={12.8}
                    changeLabel="from last month"
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Prompt Box */}
                <div className="lg:col-span-2">
                    <PromptBox />
                </div>

                {/* Recent Threads */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Recent Threads</h2>
                        <button
                            onClick={onViewAllClick}
                            className="text-blue-600 text-sm hover:underline"
                        >
                            View all →
                        </button>
                    </div>
                    <div className="space-y-3">
                        {threads.slice(0, 4).map((thread) => (
                            <div
                                key={thread.id}
                                className="pb-3 border-b border-gray-100 last:border-0"
                            >
                                <div className="flex items-start gap-2">
                                    <MessageCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">
                                            {thread.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            by {thread.user.split(' ')[0]}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => onThreadClick(thread)}
                                        className="text-blue-600 text-sm hover:underline flex-shrink-0"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}