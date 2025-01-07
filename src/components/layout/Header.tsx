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
          {/* Mobile menu content remains the same */}
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
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Link href={`/${lang}`}>
            <Image 
              src="/dotweb-light.png" 
              alt="DotWeb" 
              width={130} 
              height={43} 
              priority 
              className="object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <div 
                className="relative inline-block"
                onMouseEnter={() => setShowSolutionsDropdown(true)}
                onMouseLeave={() => setShowSolutionsDropdown(false)}
              >
                <button 
                  ref={solutionsButtonRef}
                  className="flex items-center space-x-2 font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black"
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
                  <>
                    {/* Invisible connection area between button and menu */}
                    <div 
                      className="absolute w-full h-[69px] bottom-0 translate-y-full"
                      style={{ pointerEvents: 'auto' }}
                    />
                    
                    {/* Dropdown menu */}
                    <div 
                      className="absolute w-[374px]"
                      style={{
                        left: '50%',
                        transform: 'translateX(-30%)',
                        top: '100%',
                      }}
                    >
                      {/* Arrow */}
                      <div 
                        className="absolute top-[60px] left-[20%] transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 z-10"
                      />

                      {/* Menu content */}
                      <div className="absolute top-[69px] w-full rounded-[12px] bg-white shadow-lg py-4 px-4 z-20">
                        <div className="space-y-4">
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
                    </div>
                  </>
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
                    {navigation[item === 'case-studies' ? 'caseStudies' : 'contact'] || (item === 'case-studies' ? 'Case Studies' : 'Contact')}
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
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span className={`w-full h-0.5 bg-black transition-all origin-center ${isMobileMenuOpen ? 'absolute rotate-45 top-1/2' : 'relative top-0'}`}></span>
                <span className={`w-full h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-black transition-all origin-center ${isMobileMenuOpen ? 'absolute -rotate-45 top-1/2' : 'relative bottom-0'}`}></span>
              </div>
            </button>
          )}
        </div>

        <MobileMenu />
      </motion.header>
    </div>
  );
}