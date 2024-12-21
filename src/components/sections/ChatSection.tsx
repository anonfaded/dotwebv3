"use client";

import React, { useEffect, useState, useRef } from 'react';
import ChatBox from '../ui/ChatBox';
import ComparisonStats from '../ui/ComparisonStats';
import AIWidgetSection from './AIWidgetSection';
import AutomationSection from './AutomationSection';
import ScalableSection from './ScalableSection';
import CalculatorSection from './CalculatorSection';

export default function ChatSection() {
  const [chatboxStyle, setChatboxStyle] = useState({
    transform: 'translateY(0px)',
    sectionPadding: '0px'
  });
  const chatboxRef = useRef(null);

  useEffect(() => {
    const updateChatboxPosition = () => {
      const heroSection = document.querySelector('.hero-section');
      const startButton = document.querySelector('.start-button');
      const chatboxElement = document.querySelector('.chatbox-wrapper');
      
      if (heroSection && startButton && chatboxElement) {
        const startButtonRect = startButton.getBoundingClientRect();
        const startButtonBottom = startButtonRect.bottom + window.scrollY;
        const chatboxRect = chatboxElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Add padding below the button
        const paddingBelowButton = 40;
        const targetTop = startButtonBottom + paddingBelowButton;
        
        // Calculate transform needed to position chatbox below button
        const heroTop = heroSection.getBoundingClientRect().top + window.scrollY;
        const transformNeeded = -(heroSection.getBoundingClientRect().height - (targetTop - heroTop));
        
        // Calculate actual space needed between chatbox and stats
        const chatboxHeight = chatboxRect.height;
        const screenRatio = viewportHeight / chatboxHeight;
        
        // Base padding on screen size ratio
        let calculatedPadding = 0;
        
        if (screenRatio > 1.5) { // Large screens
          calculatedPadding = Math.max(0, Math.min(10, transformNeeded / 20));
        } else if (screenRatio > 1.2) { // Medium screens
          calculatedPadding = Math.max(10, Math.min(20, transformNeeded / 15));
        } else { // Small screens
          calculatedPadding = Math.max(20, Math.min(30, transformNeeded / 10));
        }

        setChatboxStyle({
          transform: `translateY(${transformNeeded}px)`,
          sectionPadding: `${calculatedPadding}px`
        });
      }
    };

    updateChatboxPosition();
    window.addEventListener('resize', updateChatboxPosition);
    window.addEventListener('scroll', updateChatboxPosition);

    return () => {
      window.removeEventListener('resize', updateChatboxPosition);
      window.removeEventListener('scroll', updateChatboxPosition);
    };
  }, []);

  return (
    <>
      <div className="bg-[#FAF8F7] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <section>
              <div className="w-full flex flex-col items-center">
                {/* ChatBox wrapper */}
                <div style={{ transform: chatboxStyle.transform }} className="relative z-10 chatbox-wrapper" ref={chatboxRef}>
                  <ChatBox />
                </div>
                
                {/* ComparisonStats with proper spacing */}
                <div style={{ paddingTop: chatboxStyle.sectionPadding }} className="relative z-0 w-full">
                  <div className="pb-16">
                    <ComparisonStats />
                  </div>
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
