"use client";

import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import ChatBox from '../ui/ChatBox';
import ComparisonStats from '../ui/ComparisonStats';
import AIWidgetSection from './AIWidgetSection';
import AutomationSection from './AutomationSection';
import ScalableSection from './ScalableSection';
import CalculatorSection from './CalculatorSection';

export default function ChatSection() {
  const [transforms, setTransforms] = useState({
    chatbox: 0,
    stats: 0
  });
  const [isMounted, setIsMounted] = useState(false);
  const chatboxRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Wait for next tick to ensure scroll position is restored
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
  }, []);

  useLayoutEffect(() => {
    if (!isMounted) return;

    const updatePositions = () => {
      const heroSection = document.querySelector('.hero-section');
      const startButton = document.querySelector('.start-button');
      const chatboxElement = document.querySelector('.chatbox-wrapper');
      
      if (heroSection && startButton && chatboxElement) {
        const vh = window.innerHeight / 100;
        
        // Position chatbox below start button
        const startButtonRect = startButton.getBoundingClientRect();
        const startButtonBottom = startButtonRect.bottom + window.scrollY;
        const paddingBelowButton = 3 * vh;
        const targetTopChatbox = startButtonBottom + paddingBelowButton;
        
        // Calculate chatbox transform relative to hero height
        const heroTop = heroSection.getBoundingClientRect().top + window.scrollY;
        const heroHeight = heroSection.getBoundingClientRect().height;
        const chatboxTransform = -(heroHeight - (targetTopChatbox - heroTop));
        
        // Calculate stats transform based on chatbox position
        const statsTransform = chatboxTransform;
        
        setTransforms({
          chatbox: chatboxTransform,
          stats: statsTransform
        });
      }
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
      clearTimeout(timeoutId);
    };
  }, [isMounted]);

  return (
    <>
      <div className="bg-[#FAF8F7] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[1200px] mx-auto">
            <section className="relative">
              <div className="w-full flex flex-col items-center">
                {/* ChatBox wrapper */}
                <div 
                  style={{ transform: `translateY(${transforms.chatbox}px)` }} 
                  className="relative z-10 chatbox-wrapper w-full"
                  ref={chatboxRef}
                >
                  <ChatBox />
                </div>
                
                {/* ComparisonStats - positioned relative to chatbox */}
                <div 
                  ref={statsRef}
                  className="relative z-0 w-full mt-[6vh]"
                  style={{ transform: `translateY(${transforms.stats}px)` }}
                >
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
