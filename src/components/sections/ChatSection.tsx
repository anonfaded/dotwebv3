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
            <div className="bg-[#f5faff] min-h-[600px] relative z-1 top-[0px]">
                <div className="absolute top-0 left-0 right-0 h-40 bg-[#f5faff]"></div>
                <div className="container mx-auto px-4 pt-0 pb-10">
                    <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[1200px] mx-auto">
                        <section className="relative">
                            <div className="grid grid-cols-1 gap-8">
                                {/* ChatBox wrapper */}
                                <div className="relative z-10 w-full -mt-80 sm:-mt-100">
                                    <ChatBox />
                                </div>
                                {/* ComparisonStats - positioned relative to chatbox */}
                                <div className="relative z-0 w-full mt-0 sm:mt-2 lg:mt-4">
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
