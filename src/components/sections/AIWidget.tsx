"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface AIWidgetProps {
  lang: string;
  dictionary: {
    aiWidget?: {
      title: string;
      questions: string[];
    };
  };
}

export default function AIWidget({ lang, dictionary }: AIWidgetProps) {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <motion.div
      className={`fixed bottom-8 right-8 z-50 ${isSticky ? 'bg-white shadow-lg' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-[12px] shadow-lg p-6 w-[300px]">
        <h3 className="text-lg font-semibold mb-4">{dictionary.aiWidget?.title}</h3>
        <div className="space-y-2">
          {dictionary.aiWidget?.questions.map((question, index) => (
            <button key={index} className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors">
              {question}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
