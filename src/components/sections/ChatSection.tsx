"use client";

import React from 'react';
import ChatBox from '../ui/ChatBox';
import ComparisonStats from '../ui/ComparisonStats';
import AIWidgetSection from './AIWidgetSection';
import AutomationSection from './AutomationSection';
import ScalableSection from './ScalableSection';
import CalculatorSection from './CalculatorSection';

export default function ChatSection() {
  return (
    <>
      <div className="bg-[#FAF8F7]">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-[1200px] mx-auto">
            <section className="relative bg-gradient-to-b from-white to-gray-50">
              <div className="w-full relative">
                <div className="absolute left-0 right-0 -top-[350px]">
                  <ChatBox />
                </div>
                <div className="pt-[600px] pb-[80px]">
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
      <CalculatorSection />
    </>
  );
}
