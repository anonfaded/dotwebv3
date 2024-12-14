"use client";

import { motion } from 'framer-motion';

interface AIWidgetProps {
  dictionary: {
    aiWidget?: {
      title: string;
      questions: string[];
    };
  };
}

export default function AIWidget({ dictionary }: AIWidgetProps) {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-[12px] shadow-lg p-6 w-[300px]">
        <h3 className="text-lg font-semibold mb-4">
          {dictionary.aiWidget?.title || 'Ask me anything'}
        </h3>
        <div className="space-y-2">
          {(dictionary.aiWidget?.questions || [
            'How can I improve my property listings?',
            'What are the best practices for real estate SEO?',
            'How to generate more leads?'
          ]).map((question, index) => (
            <button 
              key={index} 
              className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
