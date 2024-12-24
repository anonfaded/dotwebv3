"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const navigation = dictionary.navigation || {};

  const MobileMenu = () => (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed inset-x-0 top-[80px] bg-white shadow-lg z-50 px-8 py-10"
        >
          <nav className="space-y-8">
            {/* Solutions Dropdown in Mobile */}
            <div className="relative">
              <button 
                className="w-full flex justify-between items-center font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black py-3"
                onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
              >
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/home.png" 
                    alt="Solutions" 
                    width={24} 
                    height={24} 
                    priority 
                    unoptimized
                  />
                  <span>{navigation.solutions || 'Solutions'}</span>
                </div>
                <Image 
                  src="/dropdown.png" 
                  alt="Dropdown" 
                  width={24} 
                  height={24} 
                  priority 
                  unoptimized
                  className={`transform transition-transform ${showSolutionsDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {showSolutionsDropdown && (
                <div className="mt-6 bg-gray-50 rounded-lg p-6 space-y-6">
                  <Link 
                    href="#" 
                    className="block py-4 hover:bg-gray-100 rounded flex items-center space-x-4"
                  >
                    <Image 
                      src="/solutions1.png" 
                      alt="Intelligent Automation" 
                      width={28} 
                      height={28} 
                      priority 
                      unoptimized
                    />
                    <div>
                      <h4 className="font-nunito text-[16px] font-semibold text-[#2A2A2A]">
                        Intelligent Automation Tools
                      </h4>
                      <p className="font-nunito-sans text-[14px] text-gray-600">
                        Smart solutions for efficient operations
                      </p>
                    </div>
                  </Link>
                  <Link 
                    href="#" 
                    className="block py-4 hover:bg-gray-100 rounded flex items-center space-x-4"
                  >
                    <Image 
                      src="/solutions2.png" 
                      alt="Smart Lead Capture" 
                      width={28} 
                      height={28} 
                      priority 
                      unoptimized
                    />
                    <div>
                      <h4 className="font-nunito text-[16px] font-semibold text-[#2A2A2A]">
                        Smart Lead Capture Systems
                      </h4>
                      <p className="font-nunito-sans text-[14px] text-gray-600">
                        Efficient tools for capturing leads
                      </p>
                    </div>
                  </Link>
                  <Link 
                    href="#" 
                    className="block py-4 hover:bg-gray-100 rounded flex items-center space-x-4"
                  >
                    <Image 
                      src="/solutions3.png" 
                      alt="AI Process Optimization" 
                      width={28} 
                      height={28} 
                      priority 
                      unoptimized
                    />
                    <div>
                      <h4 className="font-nunito text-[16px] font-semibold text-[#2A2A2A]">
                        AI-Powered Process Optimization
                      </h4>
                      <p className="font-nunito-sans text-[14px] text-gray-600">
                        Streamline tasks and boost productivity
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            <Link 
              href={`/${lang}/case-studies`} 
              className="flex items-center space-x-4 py-3 font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black"
            >
              <Image 
                src="/casestudies.png" 
                alt="Case Studies" 
                width={24} 
                height={24} 
                priority 
                unoptimized
              />
              <span>{navigation.caseStudies || 'Case Studies'}</span>
            </Link>

            <Link 
              href={`/${lang}/contact`} 
              className="flex items-center space-x-4 py-3 font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black"
            >
              <Image 
                src="/contact.png" 
                alt="Contact" 
                width={24} 
                height={24} 
                priority 
                unoptimized
              />
              <span>{navigation.contact || 'Contact'}</span>
            </Link>

            {/* Language Switcher */}
            <div className="pt-6 border-t">
              <LanguageSwitcher currentLang={lang} />
            </div>

            {/* Demo Button */}
            <Link 
              href={`/${lang}/demo`} 
              className="w-full block mt-6"
            >
              <button className="w-full bg-[#2A2A2A] text-white px-6 py-4 rounded-lg font-nunito text-[16px] font-bold hover:bg-black transition-colors">
                {navigation.demo || 'Request a Demo'}
              </button>
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-[clamp(16px,4vw,40px)]">
      <motion.header 
        className="relative w-full h-[69.4px] mt-[26.3px] flex items-center justify-between rounded-[11.57px] bg-white shadow-lg px-8"
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
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
                <span>{navigation.solutions || 'Solutions'}</span>
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
                  {/* Original Solutions Dropdown Content */}
                  <div className="w-[321px] h-[223px] mx-[18px] mt-[24px] flex flex-col gap-[16px]">
                    {/* Existing dropdown content */}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href={`/${lang}/case-studies`} 
              className="flex items-center space-x-2"
            >
              <Image 
                src="/casestudies.png" 
                alt="Case Studies" 
                width={24} 
                height={24} 
                priority 
                unoptimized
              />
              <span className="font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black">
                {navigation.caseStudies || 'Case Studies'}
              </span>
            </Link>

            <Link 
              href={`/${lang}/contact`} 
              className="flex items-center space-x-2"
            >
              <Image 
                src="/contact.png" 
                alt="Contact" 
                width={24} 
                height={24} 
                priority 
                unoptimized
              />
              <span className="font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black">
                {navigation.contact || 'Contact'}
              </span>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-6">
            <LanguageSwitcher currentLang={lang} />
            <Link href={`/${lang}/demo`}>
              <button className="bg-[#2A2A2A] text-white px-6 py-2 rounded-lg font-nunito hover:bg-black transition-colors">
                {navigation.demo || 'Request a Demo'}
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden z-50" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <MobileMenu />
      </motion.header>
    </div>
  );
}
