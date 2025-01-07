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
                  className="flex items-center space-x-2 font-nunito text-[17px] font-[400] text-[#2A2A2A] hover:text-black"
                >
                  <Image 
                    src="/home.png" 
                    alt="Solutions" 
                    width={22} 
                    height={22} 
                    priority 
                    className="filter brightness-0"
                  />
                  <span>{navigation.solutions || 'Solutions'}</span>
                  <Image 
                    src="/dropdown.png" 
                    alt="Dropdown" 
                    width={22} 
                    height={22} 
                    priority 
                    className={`transform ${showSolutionsDropdown ? 'rotate-180' : ''} filter brightness-0`}
                  />
                </button>

                {showSolutionsDropdown && (
                  <>
                    {/* Invisible connection area between button and menu */}
                    <div 
                      className="absolute w-full h-[60px] bottom-0 translate-y-full"
                      style={{ pointerEvents: 'auto' }}
                    />
                    
                    {/* Dropdown menu */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute w-auto"
                      style={{
                        left: 0,
                        transform: 'translateX(0)',
                        top: '100%',
                      }}
                    >
                      {/* Arrow */}
                      <div 
                        className="absolute top-[52px] right-[-129px] w-4 h-4 bg-white rotate-45 z-10"
                        style={{
                          transform: showSolutionsDropdown ? 'rotate(225deg)' : 'rotate(45deg)'
                        }}
                      />

                      {/* Menu content */}
                      <div className="absolute top-[60px] w-auto min-w-[300px] max-w-[400px] rounded-[12px] bg-white shadow-lg py-2 px-3 z-20">
                        <div className="space-y-1 pt-2 pb-0">
                          {['Intelligent Automation Tools', 'Smart Lead Capture Systems', 'AI-Powered Process Optimization'].map((item, index) => (
                            <Link 
                              key={index}
                              href="#" 
                              className={`block py-1 px-1 rounded flex items-center space-x-2 items-start group ${index === 2 ? 'pb-0' : 'pb-1'}`}
                            >
                              <Image 
                                src={`/solutions${index + 1}.png`}
                                alt={item} 
                                width={24} 
                                height={24} 
                                priority 
                                className="filter brightness-0 self-start mt-1 group-hover:filter-none group-hover:brightness-100"
                              />
                              <div>
                                <h4 className="font-nunito text-[14px] font-semibold text-[#2A2A2A] group-hover:text-[#2563EB]">
                                  {item}
                                </h4>
                                <p className="font-nunito-sans text-[12px] text-gray-600 group-hover:text-[#2563EB]">
                                  {['Smart solutions for efficient operations', 'Efficient tools for capturing leads', 'Streamline tasks and boost productivity'][index]}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
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
                    width={22} 
                    height={22} 
                    priority 
                    className="filter brightness-0"
                  />
                  <span className="font-nunito text-[17px] font-[400] text-[#2A2A2A] hover:text-black">
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