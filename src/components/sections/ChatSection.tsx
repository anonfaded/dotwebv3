"use client";

import React from 'react';
import ChatBox from '../ui/ChatBox';
import ComparisonStats from '../ui/ComparisonStats';
import AIWidgetSection from './AIWidgetSection';

export default function ChatSection() {
  return (
    <>
      <section className="min-h-[150vh] relative bg-gradient-to-b from-white to-gray-50">
        <div className="w-full relative">
          <div className="absolute left-0 right-0 -top-[200px]">
            <ChatBox />
          </div>
          <div className="pt-[800px] pb-12">
            <ComparisonStats />
          </div>
        </div>
      </section>
      <AIWidgetSection />
    </>
  );
}
