"use client";

import { motion } from 'framer-motion';
import ChatBox from '../ui/ChatBox';

export default function ChatSection() {
  return (
    <section className="min-h-screen relative bg-gradient-to-b from-white to-gray-50">
      <div className="w-full relative">
        <div className="absolute left-0 right-0 -top-[200px]">
          <ChatBox />
        </div>
      </div>
    </section>
  );
}
