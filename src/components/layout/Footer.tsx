"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const [showLegalDropdown, setShowLegalDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Add mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLegalDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle interaction based on device type
  const handleInteraction = () => {
    if (isMobile) {
      setShowLegalDropdown(!showLegalDropdown);
    }
  };

  return (
    <section className="relative w-full bg-white py-10">
      {/* Background Image - same as hero */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt="Background pattern"
          fill
          className="object-cover w-full h-full opacity-20"
          style={{ 
            objectPosition: 'center', 
            objectFit: 'cover' 
          }}
          priority
        />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Black Content Box */}
        <Card 
          className="w-full max-w-[1297px] mx-auto bg-[#0B0B0B] mb-10"
          style={{ 
            borderRadius: '12.5px',
            minHeight: 'auto',
            height: 'auto',
            paddingBottom: '1rem'
          }}
          bodyStyle={{ 
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            paddingTop: '1rem',
            paddingBottom: '1rem'
          }}
        >
          {/* Text Content */}
          <div className="w-full max-w-[852px] text-center mb-4 md:mb-6 pt-4 md:pt-8">
            <h2 className="font-nunito text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.2] tracking-[-1.5px] md:tracking-[-2.67px] text-[#F7F2EF]">
              Our Expertise
              <br />
              Brings Your Vision to Life
            </h2>
          </div>

          {/* Buttons Container - Reduced top spacing */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[30px] w-full max-w-[565px] pb-2 md:pb-4 pt-6 md:pt-0 -mt-7">
          <Link 
                href="#"
                className="group inline-flex items-center bg-[#ffffff] text-black px-6 lg:px-[40.89px] py-4 lg:py-[20.44px] rounded-[13.01px] hover:text-black hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="font-nunitoSans text-[16px] md:text-[19.51px] font-semibold leading-none whitespace-nowrap">Start the Conversation</span>
                <svg 
                  className="ml-4 lg:ml-6 w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            <Link 
              href="#"
              className="mt-4 md:mt-0 text-center text-base sm:text-lg  text-[#F7F2EF] hover:text-[#e7e2df] transition-colors whitespace-nowrap"
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none'
              }}
            >
              See What&rsquo;s Possible
            </Link>
          </div>
        </Card>

        {/* Floating Footer Bar */}
        <div 
          className="w-full max-w-[1297px] mx-auto h-auto md:h-[64.85px] 
                     bg-white flex flex-row items-center justify-between 
                     px-4 sm:px-[21.62px] py-4 md:py-0 relative"
          style={{
            borderRadius: '10.81px',
            boxShadow: '0px 0px 15px 0px #00000008'
          }}
        >
          {/* Left side - Logo */}
          <div className="flex items-center justify-start">
            <Image 
              src="/dotweb-transparent.png" 
              alt="DotWeb Logo" 
              width={140}
              height={45}
              className="object-contain"
            />
          </div>

          {/* Right side - Legal Information Dropdown */}
          {/* Legal Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onClick={handleInteraction}
            onMouseEnter={() => !isMobile && setShowLegalDropdown(true)}
            onMouseLeave={() => !isMobile && setShowLegalDropdown(false)}
          >
            <button
              className="flex items-center space-x-2 font-nunito text-[17px] font-[400]"
            >
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: showLegalDropdown ? 0 : 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src="/footer-arrowup.png"
                  alt="Dropdown"
                  width={16}
                  height={16}
                  priority
                  className="transition-transform duration-300"
                />
              </motion.div>
              <span className="font-nunito text-[17.12px] font-[400]">
                <span className="hidden md:inline">Policies</span>
                <span className="md:hidden">Policies</span>
              </span>
            </button>
            {/* Dropdown Menu */}
            {showLegalDropdown && (
                <>
                    {/* Invisible connection area between button and menu */}
                    <div 
                      className="absolute w-full h-[90px] bottom-20 translate-y-full"
                      style={{ pointerEvents: 'auto' }}
                    />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-full right-0 mb-14 bg-white rounded-[12px] shadow-lg z-10 whitespace-nowrap"
                style={{ minWidth: '160px' }} // Increased to match "Legal Information" text width
              >
                <ul className="flex flex-col h-[180px]">
                  {[
                    { title: "Privacy Policy", href: `/${lang}/legal/privacy-policy` },
                    { title: "Terms of Service", href: `/${lang}/legal/terms-of-service` },
                    { title: "Cookie Policy", href: `/${lang}/legal/cookie-policy` }
                  ].map((item, index) => (
                    <li key={index} className="group flex-1">
                      <Link
                        href={item.href}
                        className={`
                          flex items-center justify-center h-full w-full px-4 py-2
                          text-sm text-gray-700 hover:bg-[#F6F2EF] hover:text-gray-900 
                          transition-all duration-200
                          ${index === 0 ? 'rounded-t-[12px]' : ''}
                          ${index === 2 ? 'rounded-b-[12px]' : ''}
                        `}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="absolute -bottom-2 right-[65px] w-4 h-4 bg-white transform rotate-45"/>
              </motion.div>
            </>
                             
            )}
          </div>
        
        </div>
      </div>
    </section>
  );
}
