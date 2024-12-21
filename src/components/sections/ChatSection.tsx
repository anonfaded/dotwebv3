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
    chatbox: 'translateY(0px)',
    stats: 'translateY(0px)'
  });
  const [isMounted, setIsMounted] = useState(false);
  const chatboxRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!isMounted) return;

    const updatePositions = () => {
      const heroSection = document.querySelector('.hero-section');
      const startButton = document.querySelector('.start-button');
      const chatboxElement = document.querySelector('.chatbox-wrapper');
      const statsElement = statsRef.current;
      
      if (heroSection && startButton && chatboxElement && statsElement) {
        // Get viewport height for relative calculations
        const vh = window.innerHeight / 100;
        
        // Position chatbox below start button
        const startButtonRect = startButton.getBoundingClientRect();
        const startButtonBottom = startButtonRect.bottom + window.scrollY;
        const paddingBelowButton = 3 * vh; // 3vh padding
        const targetTopChatbox = startButtonBottom + paddingBelowButton;
        
        // Calculate chatbox transform
        const heroTop = heroSection.getBoundingClientRect().top + window.scrollY;
        const chatboxTransform = -(heroSection.getBoundingClientRect().height - (targetTopChatbox - heroTop));

        // Position stats below chatbox
        const chatboxRect = chatboxElement.getBoundingClientRect();
        const chatboxBottom = chatboxRect.bottom;
        const paddingBelowChatbox = 3 * vh; // 3vh padding
        const targetTopStats = chatboxBottom + paddingBelowChatbox;

        // Calculate stats transform relative to its original position
        const statsRect = statsElement.getBoundingClientRect();
        const statsOriginalTop = statsRect.top - parseFloat(getComputedStyle(statsElement).transform.split(',')[5] || '0');
        const statsTransform = targetTopStats - statsOriginalTop;

        setTransforms({
          chatbox: `translateY(${chatboxTransform}px)`,
          stats: `translateY(${statsTransform}px)`
        });
      }
    };

    // Initial update
    updatePositions();

    // Add event listeners with debounce
    let resizeTimeout: NodeJS.Timeout;
    let scrollTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        window.requestAnimationFrame(updatePositions);
      }, 100);
    };

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        window.requestAnimationFrame(updatePositions);
      }, 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(resizeTimeout);
      clearTimeout(scrollTimeout);
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
                  style={{ transform: transforms.chatbox }} 
                  className="relative z-10 chatbox-wrapper w-full"
                  ref={chatboxRef}
                >
                  <ChatBox />
                </div>
                
                {/* ComparisonStats - positioned relative to chatbox */}
                <div 
                  ref={statsRef}
                  className="relative z-0 w-full mt-[-2vh]"
                  style={{ 
                    transform: transforms.stats,
                    transition: 'transform 0.3s ease-out'
                  }}
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
