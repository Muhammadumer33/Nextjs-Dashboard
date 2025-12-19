// 📍 Location: my-app/components/dashboard/StatsCard.tsx
// Purpose: Individual stat card for dashboard

'use client';

import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    change: number;
    changeLabel: string;
}

export default function StatsCard({ title, value, change, changeLabel }: StatsCardProps) {
    const isPositive = change >= 0;

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-2">
                <span className="text-gray-600 text-sm">{title}</span>
                <Activity className="w-4 h-4 text-gray-400" />
            </div>

            <div className="text-3xl font-bold text-gray-800">
                {typeof value === 'number' ? value.toLocaleString() : value}
            </div>

            <div
                className={`flex items-center mt-2 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'
                    }`}
            >
                {isPositive ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {isPositive ? '+' : ''}
                {change}% {changeLabel}
            </div>
        </div>
    );
}