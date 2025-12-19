// 📍 Location: my-app/components/layout/Sidebar.tsx
// Purpose: Left sidebar navigation

'use client';

import { Home, MessageSquare, MessageCircle } from 'lucide-react';
import { ViewType } from '@/lib/types';

interface SidebarProps {
    currentView: ViewType;
    onViewChange: (view: ViewType) => void;
    isOpen: boolean;
}

export default function Sidebar({ currentView, onViewChange, isOpen }: SidebarProps) {
    return (
        <div
            className={`${isOpen ? 'w-64' : 'w-16'
                } bg-white border-r border-gray-200 transition-all duration-300`}
        >
            <div className="p-4">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                    <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    {isOpen && <span className="font-bold text-lg">Chatbot UI</span>}
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    <button
                        onClick={() => onViewChange('dashboard')}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${currentView === 'dashboard'
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <Home className="w-5 h-5 flex-shrink-0" />
                        {isOpen && <span>Dashboard</span>}
                    </button>

                    <button
                        onClick={() => onViewChange('threads')}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${currentView === 'threads'
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <MessageSquare className="w-5 h-5 flex-shrink-0" />
                        {isOpen && <span>Threads</span>}
                    </button>
                </nav>
            </div>
        </div>
    );
}