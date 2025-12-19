// 📍 Location: my-app/components/conversation/MessageBubble.tsx
// Purpose: Individual message bubble

'use client';

import { MessageCircle, User, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Message } from '@/lib/types';

interface MessageBubbleProps {
    message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
    const isUser = message.type === 'user';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            {/* Bot Avatar */}
            {!isUser && (
                <div className="mr-3 mt-1">
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-gray-600" />
                    </div>
                </div>
            )}

            {/* Message Content */}
            <div className={`max-w-2xl ${isUser ? 'ml-auto' : ''}`}>
                <div
                    className={`px-4 py-3 rounded-lg ${isUser
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-gray-200 text-gray-800'
                        }`}
                >
                    {message.content}
                </div>

                {/* Bot Feedback Buttons */}
                {!isUser && (
                    <div className="flex gap-2 mt-2">
                        <button className="p-1 hover:bg-gray-200 rounded">
                            <ThumbsUp className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-1 hover:bg-gray-200 rounded">
                            <ThumbsDown className="w-4 h-4 text-gray-500" />
                        </button>
                    </div>
                )}
            </div>

            {/* User Avatar */}
            {isUser && (
                <div className="ml-3 mt-1">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                    </div>
                </div>
            )}
        </div>
    );
}