// 📍 Location: my-app/components/threads/ThreadRow.tsx
// Purpose: Single thread row in table

'use client';

import { Thread } from '@/lib/types';

interface ThreadRowProps {
    thread: Thread;
    onView: (thread: Thread) => void;
}

export default function ThreadRow({ thread, onView }: ThreadRowProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-blue-100 text-blue-700';
            case 'Flagged':
                return 'bg-red-100 text-red-700';
            case 'Archived':
                return 'bg-gray-100 text-gray-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const initials = thread.user
        .split(' ')
        .map((n) => n[0])
        .join('');

    return (
        <tr className="hover:bg-gray-50">
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-gray-600">{initials}</span>
                    </div>
                    <span className="text-sm text-gray-800">{thread.user}</span>
                </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-800">{thread.title}</td>
            <td className="px-6 py-4">
                <span
                    className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        thread.status
                    )}`}
                >
                    {thread.status}
                </span>
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">{thread.lastActivity}</td>
            <td className="px-6 py-4 text-sm text-gray-800">
                {thread.tokens.toLocaleString()}
            </td>
            <td className="px-6 py-4">
                <button
                    onClick={() => onView(thread)}
                    className="text-blue-600 hover:underline text-sm"
                >
                    View →
                </button>
            </td>
        </tr>
    );
}