// 📍 Location: my-app/components/threads/ThreadsList.tsx
// Purpose: Table view of all threads

'use client';

import { useState } from 'react';
import { Thread } from '@/lib/types';
import ThreadRow from './ThreadRow';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ThreadsListProps {
    threads: Thread[];
    onThreadClick: (thread: Thread) => void;
}

const ITEMS_PER_PAGE = 10;

export default function ThreadsList({ threads, onThreadClick }: ThreadsListProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(threads.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentThreads = threads.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Threads</h1>
            <p className="text-gray-500 mb-8">Browse and manage all conversations.</p>

            <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-800">All Conversations</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    User
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Last Activity
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Tokens
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {currentThreads.map((thread) => (
                                <ThreadRow
                                    key={thread.id}
                                    thread={thread}
                                    onView={onThreadClick}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, threads.length)} of {threads.length} results
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}