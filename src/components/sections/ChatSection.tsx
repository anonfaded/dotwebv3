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
            <div className="bg-[#f5faff] min-h-[871px] -mt-40 relative z-0">
                <div className="container mx-auto px-4 pt-40 pb-20">
                    <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[1200px] mx-auto">
                        <section className="relative">
                            <div className="w-full flex flex-col items-center">
                                {/* ChatBox wrapper */}
                                <div className="relative z-10 w-full -mt-60 sm:-mt-80">
                                    <ChatBox />
                                </div>

                                {/* ComparisonStats - positioned relative to chatbox */}
                                <div className="relative z-0 w-full mt-8 sm:mt-12 lg:mt-20">
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

