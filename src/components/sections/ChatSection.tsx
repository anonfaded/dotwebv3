"use client";

import React, { useEffect, useState } from 'react';
import ChatBox from '../ui/ChatBox';
import ComparisonStats from '../ui/ComparisonStats';
import AIWidgetSection from './AIWidgetSection';
import AutomationSection from './AutomationSection';
import ScalableSection from './ScalableSection';

export default function ChatSection() {
  return (
    <>
      <div className="min-h-screen bg-[#FAF8F7] relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-[1200px] mx-auto">
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
          </div>
        </div>
      </div>
      <AIWidgetSection />
      <AutomationSection />
      <ScalableSection />
    </>
  );
}
