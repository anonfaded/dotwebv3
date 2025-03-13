"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useState, useRef, useEffect, memo } from 'react';

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
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MobileMenu = memo(function MobileMenu() {
    const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false);

    // Decreased top margin from 100px to 70px and use header's container width.
    const mobileMenuStyle = {
      top: '80px',
      maxHeight: 'calc(100vh - 70px)'
    };

    return (
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            // Updated mobile menu backdrop styling for iOS compatibility
            className="fixed inset-x-0 bg-white/60 backdrop-blur-lg supports-[backdrop-filter]:bg-white/40 bg-clip-padding backdrop-filter z-50 px-6 py-6 rounded-[11.57px] overflow-y-auto"
            style={{
              ...mobileMenuStyle,
              WebkitBackdropFilter: 'blur(8px)', // Add explicit webkit support
            }}
          >
            {/* Container matching header's width */}
            <div className="max-w-[1200px] mx-auto">
              <div className="flex flex-col space-y-4">
                {/* Solutions Accordion */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setIsSolutionsExpanded(!isSolutionsExpanded)}
                    className="flex items-center justify-between w-full px-2 py-3"
                  >
                    <div className="flex items-center space-x-2">
                      <Image src="/home.png" alt="Solutions" width={22} height={22} priority className="filter brightness-0" />
                      <span className="font-nunito text-[17px] font-[400] text-[#2A2A2A]">
                        {navigation.solutions || 'Solutions'}
                      </span>
                    </div>
                    <Image 
                      src="/dropdown.png" 
                      alt="Dropdown" 
                      width={22} 
                      height={22} 
                      priority 
                      className={`transform transition-transform duration-300 ${isSolutionsExpanded ? 'rotate-180' : ''} filter brightness-0`}
                    />
                  </button>
                  
                  {/* Solutions submenu with animation */}
                  <AnimatePresence>
                    {isSolutionsExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white/40 backdrop-blur-sm rounded-lg mt-2"
                      >
                        <div className="pl-4 space-y-3 py-3">
                          {[
                            { 
                              title: 'Intelligent Automation Tools',
                              desc: 'Smart solutions for efficient operations',
                              icon: '/solutions1.png'
                            },
                            { 
                              title: 'Smart Lead Capture Systems',
                              desc: 'Efficient tools for capturing leads',
                              icon: '/solutions2.png'
                            },
                            { 
                              title: 'AI-Powered Process Optimization',
                              desc: 'Streamline tasks and boost productivity',
                              icon: '/solutions3.png'
                            }
                          ].map((item, index) => (
                            <Link 
                              key={index}
                              href="#" 
                              className="flex items-start space-x-2 px-2 py-2 hover:bg-white/60 rounded-lg transition-colors"
                            >
                              <Image 
                                src={item.icon}
                                alt={item.title} 
                                width={24} 
                                height={24} 
                                priority 
                                className="mt-1"
                              />
                              <div>
                                <h4 className="font-nunito text-[14px] font-semibold text-[#2A2A2A]">
                                  {item.title}
                                </h4>
                                <p className="font-nunito-sans text-[12px] text-gray-600">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Navigation Links */}
                {['case-studies', 'contact'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${lang}/${item}`} 
                    className="flex items-center space-x-2 px-2 py-3 hover:bg-white/60 rounded-lg transition-colors"
                  >
                    <Image 
                      src={`/${item === 'case-studies' ? 'casestudies' : item}.png`}
                      alt={item} 
                      width={22} 
                      height={22} 
                      priority 
                      className="filter brightness-0"
                    />
                    <span className="font-nunito text-[17px] font-[400] text-[#2A2A2A]">
                      {navigation[item === 'case-studies' ? 'caseStudies' : 'contact'] || (item === 'case-studies' ? 'Case Studies' : 'Contact')}
                    </span>
                  </Link>
                ))}

                {/* Request Demo Button - Sticky at bottom (no shadow) */}
                <div className="sticky bottom-0 pt-4 mt-auto ">
                  <Link href={`/${lang}/demo`}>
                    <button className="w-full bg-[#2A2A2A] text-white px-4 py-3 rounded-lg font-nunito text-[17px] hover:bg-black transition-colors shadow-none">
                      {navigation.demo || 'Request a Demo'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  });

  MobileMenu.displayName = 'MobileMenu';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-6">
      <motion.header 
        className="relative w-full h-[69.4px] mt-[26.3px] flex items-center justify-between rounded-[11.57px] bg-white/60 supports-[backdrop-filter]:bg-white/40 backdrop-blur-lg shadow-[0_1px_2px_-1px_rgba(0,0,0,0.03)] px-3"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 1.7,
          ease: [0.21, 0.45, 0.32, 1]  // Smooth cubic easing
        }}
      >
        {/* Left section */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Link href={`/${lang}`}>
            <Image 
              src="/dotweb-transparent.png" 
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
                  className="flex items-center space-x-2 font-nunito text-[17px] font-[400] text-[#2A2A2A] hover:text-black transition-colors"
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
                  <motion.div
                    animate={{
                      rotate: showSolutionsDropdown ? 180 : 0
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <Image 
                      src="/dropdown.png" 
                      alt="Dropdown" 
                      width={22} 
                      height={22} 
                      priority 
                      className="filter brightness-0"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {showSolutionsDropdown && (
                    <>
                      {/* Invisible connection area between button and menu */}
                      <div 
                        className="absolute w-full h-[60px] bottom-0 translate-y-full"
                        style={{ pointerEvents: 'auto' }}
                      />
                      
                      {/* Desktop Dropdown menu with coordinated animation */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute w-full"
                        style={{
                          left: 0,
                          transform: 'translateX(0)',
                          top: '100%',
                        }}
                      >
                        {/* Desktop diamond cut arrow restored to original position */}
                        <motion.div 
                          className="absolute top-[52px] right-1 w-4 h-4 bg-white z-10"
                          style={{
                            transformOrigin: "center",
                            transform: "rotate(45deg)"
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />

                        {/* Menu content */}
                        <div className="absolute top-[60px] w-full min-w-[300px] max-w-[400px] rounded-[12px] bg-white shadow-lg py-2 px-3 z-20">
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
                </AnimatePresence>
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
          {!isMobile ? (
            <>
              <LanguageSwitcher currentLang={lang} />
              <Link href={`/${lang}/demo`}>
                <button className="bg-[#2A2A2A] text-white px-4 py-3 rounded-lg font-nunito text-[17px] hover:bg-black transition-colors whitespace-nowrap w-[165px] h-[44px]">
                  {navigation.demo || 'Request a Demo'}
                </button>
              </Link>
            </>
          ) : (
            <>
              <LanguageSwitcher currentLang={lang} isMobile={true} />
              <button 
                className="z-50 p-2" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="w-6 h-4 flex flex-col justify-between relative">
                  <span className={`w-full h-0.5 bg-black transition-all origin-center ${isMobileMenuOpen ? 'absolute rotate-45 top-1/2' : 'relative top-0'}`}></span>
                  <span className={`w-full h-0.5 bg-black transition-all origin-center ${isMobileMenuOpen ? 'absolute -rotate-45 top-1/2' : 'relative bottom-0'}`}></span>
                </div>
              </button>
            </>
          )}
        </div>

        <MobileMenu />
      </motion.header>
    </div>
  );
}
