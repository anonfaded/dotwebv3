"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useState, useRef, useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const navigation = dictionary.navigation || {};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const MobileMenu = () => (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed inset-x-0 top-[80px] bg-white shadow-lg z-50 px-4 py-6 rounded-b-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <nav className="space-y-6">
            {/* Solutions Dropdown in Mobile */}
            <div className="relative">
              <button 
                className="w-full flex justify-between items-center font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black py-2"
                onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
              >
                <div className="flex items-center space-x-3">
                  <Image 
                    src="/home.png" 
                    alt="Solutions" 
                    width={20} 
                    height={20} 
                    priority 
                  />
                  <span>{navigation.solutions || 'Solutions'}</span>
                </div>
                <Image 
                  src="/dropdown.png" 
                  alt="Dropdown" 
                  width={20} 
                  height={20} 
                  priority 
                  className={`transform transition-transform ${showSolutionsDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {showSolutionsDropdown && (
                <div className="mt-4 bg-gray-50 rounded-lg p-4 space-y-4">
                  {['Intelligent Automation Tools', 'Smart Lead Capture Systems', 'AI-Powered Process Optimization'].map((item, index) => (
                    <Link 
                      key={index}
                      href="#" 
                      className="block py-3 px-2 hover:bg-gray-100 rounded flex items-center space-x-3"
                    >
                      <Image 
                        src={`/solutions${index + 1}.png`}
                        alt={item} 
                        width={24} 
                        height={24} 
                        priority 
                      />
                      <div>
                        <h4 className="font-nunito text-[14px] font-semibold text-[#2A2A2A]">
                          {item}
                        </h4>
                        <p className="font-nunito-sans text-[12px] text-gray-600">
                          {['Smart solutions for efficient operations', 'Efficient tools for capturing leads', 'Streamline tasks and boost productivity'][index]}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {['case-studies', 'contact'].map((item, index) => (
              <Link 
                key={item}
                href={`/${lang}/${item}`} 
                className="flex items-center space-x-3 py-2 font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black"
              >
                <Image 
                  src={`/${item === 'case-studies' ? 'casestudies' : item}.png`}
                  alt={item} 
                  width={20} 
                  height={20} 
                  priority 
                />
                <span>{navigation.caseStudies || item}</span>
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="pt-4 border-t">
              <LanguageSwitcher currentLang={lang} />
            </div>

            {/* Demo Button */}
            <Link 
              href={`/${lang}/demo`} 
              className="block mt-4"
            >
              <button className="w-full bg-[#2A2A2A] text-white px-4 py-3 rounded-lg font-nunito text-[16px] font-bold hover:bg-black transition-colors">
                {navigation.demo || 'Request a Demo'}
              </button>
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-6">
      <motion.header 
        className="relative w-full h-[69.4px] mt-[26.3px] flex items-center justify-between rounded-[11.57px] bg-white shadow-lg px-3"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left section */}
        <div className="flex items-center space-x-6 lg:space-x-12">
          <Link href={`/${lang}`}>
            <Image 
              src="/dotweb-light.png" 
              alt="DotWeb" 
              width={100} 
              height={33} 
              priority 
            />
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
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
                    width={20} 
                    height={20} 
                    priority 
                  />
                  <span>{navigation.solutions || 'Solutions'}</span>
                  <Image 
                    src="/dropdown.png" 
                    alt="Dropdown" 
                    width={20} 
                    height={20} 
                    priority 
                  />
                </button>

                {showSolutionsDropdown && (
                  <div 
                    className="absolute w-[374px] top-[40px] left-0 rounded-[12px] bg-white shadow-lg"
                    onMouseEnter={() => setShowSolutionsDropdown(true)}
                    onMouseLeave={() => setShowSolutionsDropdown(false)}
                  >
                    <div className="p-4 space-y-4">
                      {['Intelligent Automation Tools', 'Smart Lead Capture Systems', 'AI-Powered Process Optimization'].map((item, index) => (
                        <Link 
                          key={index}
                          href="#" 
                          className="block py-3 px-2 hover:bg-gray-100 rounded flex items-center space-x-3"
                        >
                          <Image 
                            src={`/solutions${index + 1}.png`}
                            alt={item} 
                            width={24} 
                            height={24} 
                            priority 
                          />
                          <div>
                            <h4 className="font-nunito text-[14px] font-semibold text-[#2A2A2A]">
                              {item}
                            </h4>
                            <p className="font-nunito-sans text-[12px] text-gray-600">
                              {['Smart solutions for efficient operations', 'Efficient tools for capturing leads', 'Streamline tasks and boost productivity'][index]}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {['case-studies', 'contact'].map((item) => (
                <Link 
                  key={item}
                  href={`/${lang}/${item}`} 
                  className="flex items-center space-x-2"
                >
                  <Image 
                    src={`/${item === 'case-studies' ? 'casestudies' : item}.png`}
                    alt={item} 
                    width={20} 
                    height={20} 
                    priority 
                  />
                  <span className="font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black">
                    {navigation.caseStudies || item}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {!isMobile && (
            <>
              <LanguageSwitcher currentLang={lang} />
              <Link href={`/${lang}/demo`}>
                <button className="bg-[#2A2A2A] text-white px-4 py-2 rounded-lg font-nunito text-sm hover:bg-black transition-colors whitespace-nowrap">
                  {navigation.demo || 'Request a Demo'}
                </button>
              </Link>
            </>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button 
              className="z-50 p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          )}
        </div>

        <MobileMenu />
      </motion.header>
    </div>
  );
}
