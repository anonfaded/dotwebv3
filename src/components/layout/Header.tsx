"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useState, useRef } from 'react';

interface HeaderProps {
  lang: string;
  dictionary: {
    navigation?: {
      solutions: string;
      caseStudies: string;
      contact: string;
      demo: string;
    };
  };
}

export default function Header({ lang, dictionary }: HeaderProps) {
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <motion.header 
        className="relative w-full max-w-[1388px] h-[69.4px] mt-[26.3px] flex items-center justify-between rounded-[11.57px] bg-white shadow-lg px-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left section */}
        <div className="flex items-center space-x-12">
          <Link href={`/${lang}`}>
            <Image 
              src="/dotweb-light.png" 
              alt="DotWeb" 
              width={120} 
              height={40} 
              priority 
              unoptimized
            />
          </Link>
          
          <div className="flex items-center space-x-8">
            {/* Solutions dropdown */}
            <div className="relative">
              <button 
                ref={solutionsButtonRef}
                className="flex items-center space-x-2 font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black"
                onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
                onBlur={() => setTimeout(() => setShowSolutionsDropdown(false), 200)}
              >
                <Image 
                  src="/home.png" 
                  alt="Solutions" 
                  width={24} 
                  height={24} 
                  priority 
                  unoptimized
                />
                <span>{dictionary.navigation?.solutions || 'Solutions'}</span>
                <Image 
                  src="/dropdown.png" 
                  alt="Dropdown" 
                  width={24} 
                  height={24} 
                  priority 
                  unoptimized
                />
              </button>

              {showSolutionsDropdown && (
                <div 
                  className="fixed w-[374px] h-[272px] top-[124px] left-0 rounded-[12px] bg-white shadow-[0px_0px_12.4px_0px_#0000000D]"
                  style={{ 
                    zIndex: 100,
                    left: solutionsButtonRef.current ? `${solutionsButtonRef.current.getBoundingClientRect().left}px` : 'auto'
                  }}
                  onMouseEnter={() => setShowSolutionsDropdown(true)}
                  onMouseLeave={() => setShowSolutionsDropdown(false)}
                >
                  {/* Triangular Arrow */}
                  <div 
                    className="absolute top-[-10px] w-0 h-0 
                               border-l-[10px] border-l-transparent 
                               border-r-[10px] border-r-transparent 
                               border-b-[10px] border-b-white"
                    style={{
                      left: solutionsButtonRef.current 
                        ? `${solutionsButtonRef.current.getBoundingClientRect().width / 2 - 10}px` 
                        : '50%'
                    }}
                  />

                  <div className="w-[321px] h-[223px] mx-[18px] mt-[24px] flex flex-col gap-[16px]">
                    {/* Header */}
                    <h3 className="w-[321px] h-[18px] font-nunito text-[12px] font-[600] leading-[18px] tracking-[0.5px] text-left text-[#97A3B7]"
                        style={{
                          textUnderlinePosition: 'from-font',
                          textDecorationSkipInk: 'none'
                        }}
                    >
                      Tools for Automation Experts
                    </h3>

                    {/* Menu Items Container */}
                    <div className="w-[321px] h-[189px] flex flex-col gap-[20px]">
                      {/* Row 1 */}
                      <div className="w-[321px] h-[49px] flex items-start gap-[10px]">
                        <Image 
                          src="/solutions1.png" 
                          alt="Intelligent Automation" 
                          width={24} 
                          height={24} 
                          priority 
                          unoptimized
                        />
                        <div className="w-[287px] h-[49px] flex flex-col gap-[2px]">
                          <h4 className="w-[287px] h-[27px] font-nunito text-[16.03px] font-[500] leading-[26.72px] text-left text-[#111B29]"
                              style={{
                                textUnderlinePosition: 'from-font',
                                textDecorationSkipInk: 'none'
                              }}
                          >
                            Intelligent Automation Tools
                          </h4>
                          <p className="w-[248px] h-[20px] font-nunito-sans text-[13px] font-[500] leading-[19.5px] text-left text-[#677489]"
                             style={{
                               textUnderlinePosition: 'from-font',
                               textDecorationSkipInk: 'none'
                             }}
                          >
                            Smart solutions for efficient operations.
                          </p>
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="w-[321px] h-[49px] flex items-start gap-[10px]">
                        <Image 
                          src="/solutions2.png" 
                          alt="Smart Lead Capture" 
                          width={20} 
                          height={18.76} 
                          priority 
                          unoptimized
                        />
                        <div className="w-[287px] h-[49px] flex flex-col gap-[2px]">
                          <h4 className="w-[287px] h-[27px] font-nunito text-[16.03px] font-[500] leading-[26.72px] text-left text-[#111B29]"
                              style={{
                                textUnderlinePosition: 'from-font',
                                textDecorationSkipInk: 'none'
                              }}
                          >
                            Smart Lead Capture Systems
                          </h4>
                          <p className="w-[248px] h-[20px] font-nunito-sans text-[13px] font-[500] leading-[19.5px] text-left text-[#677489]"
                             style={{
                               textUnderlinePosition: 'from-font',
                               textDecorationSkipInk: 'none'
                             }}
                          >
                            Efficient tools for capturing leads.
                          </p>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="w-[321px] h-[49px] flex items-start gap-[10px]">
                        <Image 
                          src="/solutions3.png" 
                          alt="AI Process Optimization" 
                          width={20} 
                          height={20} 
                          priority 
                          unoptimized
                        />
                        <div className="w-[287px] h-[49px] flex flex-col gap-[2px]">
                          <h4 className="w-[287px] h-[27px] font-nunito text-[16.03px] font-[500] leading-[26.72px] text-left text-[#111B29]"
                              style={{
                                textUnderlinePosition: 'from-font',
                                textDecorationSkipInk: 'none'
                              }}
                          >
                            AI-Powered Process Optimization
                          </h4>
                          <p className="w-[248px] h-[20px] font-nunito-sans text-[13px] font-[500] leading-[19.5px] text-left text-[#677489]"
                             style={{
                               textUnderlinePosition: 'from-font',
                               textDecorationSkipInk: 'none'
                             }}
                          >
                            Streamline tasks and boost productivity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Case Studies */}
            <Link href={`/${lang}/case-studies`} className="flex items-center space-x-2">
              <Image 
                src="/casestudies.png" 
                alt="Case Studies" 
                width={24} 
                height={24} 
                priority 
                unoptimized
              />
              <span className="font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black">{dictionary.navigation?.caseStudies || 'Case Studies'}</span>
            </Link>

            {/* Contact */}
            <Link href={`/${lang}/contact`} className="flex items-center space-x-2">
              <Image 
                src="/contact.png" 
                alt="Contact" 
                width={24} 
                height={24} 
                priority 
                unoptimized
              />
              <span className="font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black">{dictionary.navigation?.contact || 'Contact'}</span>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-6">
          <LanguageSwitcher currentLang={lang} />
          <button className="bg-[#2A2A2A] text-white px-6 py-2 rounded-lg font-nunito hover:bg-black transition-colors">
            {dictionary.navigation?.demo || 'Request a Demo'}
          </button>
        </div>
      </motion.header>
    </div>
  );
}
