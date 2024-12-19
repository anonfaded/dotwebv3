"use client";

import { motion } from 'framer-motion';
import ChatBox from '../ui/ChatBox';

export default function ChatSection() {
  return (
    <section className="min-h-screen relative bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-[200px] w-full max-w-[800px]">
          <ChatBox />
        </div>
      </div>
    </section>
  );
}
