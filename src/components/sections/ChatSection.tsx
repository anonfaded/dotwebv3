"use client";

import React, { useState, useEffect, useLayoutEffect } from 'react';
import ChatBox from '../ui/ChatBox';
import ComparisonStats from '../ui/ComparisonStats';
import AIWidgetSection from './AIWidgetSection';
import AutomationSection from './AutomationSection';
import ScalableSection from './ScalableSection';
import CalculatorSection from './CalculatorSection';

export default function ChatSection() {
    const [chatboxMarginTop, setChatboxMarginTop] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Wait for next tick to ensure scroll position is restored
        setTimeout(() => {
            setIsMounted(true);
        }, 0);
    }, []);

  useLayoutEffect(() => {
        if (!isMounted) return;

        const updatePositions = () => {
            const vh = window.innerHeight / 100;

            // Calculate dynamic margin top for chatbox
            const baseMargin = -18 * vh;
            const screenHeightFactor = window.innerHeight / 1080; // Base height for scaling
            const dynamicMargin = baseMargin - (10 * vh * (screenHeightFactor - 1));
            setChatboxMarginTop(dynamicMargin);
        };

      // Initial update with a small delay to ensure scroll position is restored
        const timeoutId = setTimeout(updatePositions, 0);

        // Update on resize only
        const handleResize = () => {
            requestAnimationFrame(updatePositions);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
             clearTimeout(timeoutId)
        };
    }, [isMounted]);

    return (
        <>
            <div className="bg-[##f5faff] relative -mb-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[1200px] mx-auto">
                        <section className="relative">
                            <div className="w-full flex flex-col items-center">
                                {/* ChatBox wrapper */}
                                <div
                                    className="relative z-10 w-full"
                                     style={{marginTop: `${chatboxMarginTop}px`}}
                                >
                                    <ChatBox />
                                </div>

                                {/* ComparisonStats - positioned relative to chatbox */}
                                <div className="relative z-0 w-full mt-[6vh] mb-[4rem]">
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