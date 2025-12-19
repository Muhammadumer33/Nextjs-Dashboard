// 📍 Location: my-app/components/conversation/ThreadDetails.tsx
// Purpose: Right sidebar showing thread info

'use client';

import { MessageCircle } from 'lucide-react';
import { Thread } from '@/lib/types';

import { useState } from 'react';
import FeedbackModal from './FeedbackModal';

interface ThreadDetailsProps {
    thread: Thread | null;
}

export default function ThreadDetails({ thread }: ThreadDetailsProps) {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    if (!thread) {
        return (
            <div className="w-80 bg-white border-l border-gray-200 p-6">
                <p className="text-gray-500">Select a thread to view details</p>
            </div>
        );
    }

    return (
        <div className="w-80 bg-white border-l border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Thread Details</h2>
            <p className="text-sm text-gray-500 mb-6">
                Information about this conversation.
            </p>

            <div className="space-y-4">
                {/* User */}
                <div>
                    <label className="text-sm text-gray-600">User</label>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-800">
                            {thread.user}
                        </span>
                    </div>
                </div>

                {/* Status */}
                <div>
                    <label className="text-sm text-gray-600">Status</label>
                    <p className="text-sm font-medium text-gray-800 mt-1">
                        {thread.status.toLowerCase()}
                    </p>
                </div>

                {/* Created At */}
                <div>
                    <label className="text-sm text-gray-600">Created At</label>
                    <p className="text-sm font-medium text-gray-800 mt-1">
                        {thread.createdAt}
                    </p>
                </div>

                {/* Token Count */}
                <div>
                    <label className="text-sm text-gray-600">Token Count</label>
                    <p className="text-sm font-medium text-gray-800 mt-1">
                        {thread.tokens.toLocaleString()}
                    </p>
                </div>

                {/* Feedback Button */}
                <div className="pt-6 border-t border-gray-200">
                    <button
                        onClick={() => setIsFeedbackOpen(true)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Feedback the bot
                    </button>
                </div>
            </div>

            <FeedbackModal
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
            />
        </div>
    );
}