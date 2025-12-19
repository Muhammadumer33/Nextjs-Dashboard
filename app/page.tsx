// 📍 Location: my-app/app/page.tsx
// Purpose: Main page that connects all components (REPLACE existing file)

'use client';

import { useState } from 'react';
import { ViewType, Thread, Message } from '@/lib/types';
import Sidebar from '@/components/layout/Sidebar';
import Dashboard from '@/components/dashboard/Dashboard';
import ThreadsList from '@/components/threads/ThreadsList';
import Conversation from '@/components/conversation/Conversation';

// Mock data (replace with API calls later)
const mockThreads: Thread[] = [
  {
    id: 1,
    user: 'Alex Johnson',
    title: 'Issue with my recent order #12345',
    status: 'Active',
    lastActivity: 'over 1 year ago',
    tokens: 1250,
    createdAt: 'Jul 22, 2024, 3:00:00 PM',
  },
  {
    id: 2,
    user: 'Samantha Bee',
    title: 'How to reset my password?',
    status: 'Archived',
    lastActivity: 'over 1 year ago',
    tokens: 800,
    createdAt: 'Jul 20, 2024, 2:00:00 PM',
  },
  {
    id: 3,
    user: 'Marcus Aurelius',
    title: 'Billing inquiry for invoice #INV-007',
    status: 'Flagged',
    lastActivity: 'over 1 year ago',
    tokens: 2100,
    createdAt: 'Jul 19, 2024, 1:00:00 PM',
  },
  {
    id: 4,
    user: 'Jessica Rabbit',
    title: 'Product feature request for dashboard customization',
    status: 'Active',
    lastActivity: 'over 1 year ago',
    tokens: 1500,
    createdAt: 'Jul 18, 2024, 12:00:00 PM',
  },
  {
    id: 5,
    user: 'Chris P. Bacon',
    title: 'API integration problem',
    status: 'Archived',
    lastActivity: 'over 1 year ago',
    tokens: 3200,
    createdAt: 'Jul 17, 2024, 11:00:00 AM',
  },
];

const mockMessages: Message[] = [
  {
    id: 1,
    type: 'user',
    content: 'This is a sample user message number 1. Can you help me with my issue?',
  },
  {
    id: 2,
    type: 'bot',
    content: 'This is a bot response number 2. I am here to assist you.',
  },
  {
    id: 3,
    type: 'user',
    content: 'This is a sample user message number 3. Can you help me with my issue?',
  },
  {
    id: 4,
    type: 'bot',
    content: 'This is a bot response number 4. I am here to assist you.',
  },
  {
    id: 5,
    type: 'user',
    content: 'This is a sample user message number 5. Can you help me with my issue?',
  },
  {
    id: 6,
    type: 'bot',
    content: 'This is a bot response number 6. I am here to assist you.',
  },
];

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleThreadClick = (thread: Thread) => {
    setSelectedThread(thread);
    setCurrentView('conversation');
  };

  const handleBackToThreads = () => {
    setCurrentView('threads');
    setSelectedThread(null);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        isOpen={sidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {currentView === 'dashboard' && (
          <Dashboard
            threads={mockThreads}
            onThreadClick={handleThreadClick}
            onViewAllClick={() => setCurrentView('threads')}
          />
        )}
        {currentView === 'threads' && (
          <ThreadsList threads={mockThreads} onThreadClick={handleThreadClick} />
        )}
        {currentView === 'conversation' && (
          <Conversation
            thread={selectedThread}
            messages={mockMessages}
            onBack={handleBackToThreads}
          />
        )}
      </div>
    </div>
  );
}