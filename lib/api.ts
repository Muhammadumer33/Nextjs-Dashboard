// 📍 Location: my-app/lib/api.ts
// Purpose: Handle all API calls to FastAPI backend

import { Thread, Message, DashboardStats } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Fetch all threads
export async function fetchThreads(): Promise<Thread[]> {
    try {
        const response = await fetch(`${API_URL}/threads`);
        if (!response.ok) throw new Error('Failed to fetch threads');
        return await response.json();
    } catch (error) {
        console.error('Error fetching threads:', error);
        return [];
    }
}

// Fetch messages for a specific thread
export async function fetchMessages(threadId: number): Promise<Message[]> {
    try {
        const response = await fetch(`${API_URL}/threads/${threadId}/messages`);
        if (!response.ok) throw new Error('Failed to fetch messages');
        return await response.json();
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
}

// Send a new message
export async function sendMessage(
    threadId: number,
    content: string
): Promise<Message | null> {
    try {
        const response = await fetch(`${API_URL}/threads/${threadId}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });
        if (!response.ok) throw new Error('Failed to send message');
        return await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
        return null;
    }
}

// Fetch dashboard stats
export async function fetchDashboardStats(): Promise<DashboardStats | null> {
    try {
        const response = await fetch(`${API_URL}/stats`);
        if (!response.ok) throw new Error('Failed to fetch stats');
        return await response.json();
    } catch (error) {
        console.error('Error fetching stats:', error);
        return null;
    }
}

// Create a new thread
export async function createThread(title: string): Promise<Thread | null> {
    try {
        const response = await fetch(`${API_URL}/threads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });
        if (!response.ok) throw new Error('Failed to create thread');
        return await response.json();
    } catch (error) {
        console.error('Error creating thread:', error);
        return null;
    }
}