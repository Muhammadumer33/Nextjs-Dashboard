// 📍 Location: my-app/components/conversation/Conversation.tsx
// Purpose: Main chat interface

'use client';

import { ChevronLeft } from 'lucide-react';
import { Thread, Message } from '@/lib/types';
import MessageBubble from './MessageBubble';
import ThreadDetails from './ThreadDetails';

interface ConversationProps {
    thread: Thread | null;
    messages: Message[];
    onBack: () => void;
}

export default function Conversation({ thread, messages, onBack }: ConversationProps) {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onBack}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-xl font-semibold text-gray-800">
                            {thread?.title || 'Conversation'}
                        </h1>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {messages.map((msg) => (
                            <MessageBubble key={msg.id} message={msg} />
                        ))}
                    </div>
                </div>

                {/* Input Area Removed for Read-Only Mode */}
            </div>

            {/* Right Sidebar */}
            <ThreadDetails thread={thread} />
        </div>
    );
}