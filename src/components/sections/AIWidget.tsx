"use client";

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AIWidgetProps {
  dictionary: any; // Add proper typing based on your dictionary structure
}

export default function AIWidget({ dictionary }: AIWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  const presetQuestions = [
    "How can automation save my time?",
    "What does DotWeb offer?",
    "Can I integrate with my existing tools?",
    "How secure is the platform?"
  ];

  return (
    <section ref={containerRef} className="min-h-screen relative py-20">
      <motion.div 
        style={{ opacity, scale }}
        className="sticky top-20 p-6"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Ask About Smarter Automation</h2>
            <p className="text-primary-dark/70">
              Get instant answers about our automation solutions and how they can help your business
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Type your question here..."
              className="w-full p-4 pr-12 border border-neutral-base rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                className="w-6 h-6 text-primary-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-primary-dark/60 mb-4">
              Common Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {presetQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  className="text-left p-4 bg-neutral-base rounded-lg hover:bg-accent-blue/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
