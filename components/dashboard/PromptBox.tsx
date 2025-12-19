// 📍 Location: my-app/components/dashboard/PromptBox.tsx
// Purpose: Display current bot prompt

'use client';

export default function PromptBox() {
    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Current Prompt</h2>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed overflow-y-auto max-h-64">
                <p className="mb-3">
                    You are a helpful and friendly customer support agent for
                    &quot;InnovateTech&quot;. Your goal is to assist users with their
                    questions about our products and services.
                </p>
                <p className="mb-2">- Always maintain a positive and professional tone.</p>
                <p className="mb-2">
                    - Use the provided RAG context to answer questions accurately.
                </p>
                <p className="mb-2">
                    - If you don&apos;t know the answer, say &quot;I&apos;m not sure about
                    that, but I can connect you with a human agent who can help.&quot;
                </p>
                <p className="mb-2">- Keep your responses concise and easy to understand.</p>
                <p>
                    - Start every new conversation with &quot;Hello! I&apos;m your
                    InnovateTech assistant. How can I help you today?&quot;
                </p>
            </div>
        </div>
    );
}