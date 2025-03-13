"use client";

import { Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSwitcherProps {
  currentLang: string;
  isMobile?: boolean;
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' }
];

export default function LanguageSwitcher({ currentLang, isMobile = false }: LanguageSwitcherProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  const newPathname = (langCode: string) => {
    const segments = pathname.split('/');
    if (segments.length >= 2) {
      segments[1] = langCode;
    } else {
      segments.push(langCode);
    }
    return segments.join('/');
  };

  // Mobile version
  if (isMobile) {
    return (
      <div ref={dropdownRef} className="relative inline-block">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center justify-center w-8 h-8"
        >
          <Globe size={20} strokeWidth={1.5} className="text-[#2A2A2A]" />
        </button>

        <AnimatePresence>
          {showDropdown && (
            <>
              {/* Invisible connection area */}
              <div 
                className="absolute w-full h-[50px] bottom-0 translate-y-full"
                style={{ pointerEvents: 'auto' }}
              />
              
              {/* Dropdown menu with adjusted positioning for mobile */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute w-[120px] bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/40 bg-clip-padding backdrop-filter shadow-lg z-50"
                style={{
                  right: '-8px', // Adjusted to align with flag button
                  top: '159%',
                  WebkitBackdropFilter: 'blur(12px)',
                  backdropFilter: 'blur(12px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)'
                }}
              >
                {/* Triangular Arrow - Adjusted position */}
                <div
                  className="absolute top-[-10px] right-[14px]  // Adjusted to align with flag
                             border-l-[10px] border-l-transparent
                             border-r-[10px] border-r-transparent
                             border-b-[10px] border-b-white/60"
                />

                <div className="flex flex-col py-2">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={newPathname(lang.code)}
                      className={`
                        flex items-center space-x-2 px-3 py-2
                        transition-colors
                        ${currentLang === lang.code
                          ? 'bg-white/60 text-[#2A2A2A] font-medium'
                          : 'hover:bg-white/60 text-[#677489]'
                        }
                      `}
                      onClick={() => setShowDropdown(false)}
                    >
                      <span className="font-nunito text-[13px]">{lang.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div 
      ref={dropdownRef} 
      className="relative inline-block"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button className="flex items-center space-x-2 font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black">
        <Globe size={20} strokeWidth={1.5} />
        <span>{currentLanguage.name}</span>
        <Image
          src="/dropdown.png"
          alt="Dropdown"
          width={22}
          height={22}
          priority
          className={`transform transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''} filter brightness-0`}
        />
      </button>

      <AnimatePresence>
        {showDropdown && (
          <>
            {/* Invisible connection area between button and dropdown */}
            <div 
              className="absolute w-full h-[50px] bottom-0 translate-y-full"
              style={{ pointerEvents: 'auto' }}
            />
            
            {/* Dropdown menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute w-[120px] bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 bg-clip-padding backdrop-filter shadow-lg z-50"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                top: '100%',
                WebkitBackdropFilter: 'blur(12px)',
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(255, 255, 255, 0.85)'
              }}
            >
              <div className="absolute top-[40px] w-full rounded-[12px] bg-white shadow-[0px_0px_12.4px_0px_#0000000D] z-50">
                {/* Triangular Arrow */}
                <div
                  className="absolute top-[-8px] left-1/2 -translate-x-1/2
                           border-l-[8px] border-l-transparent
                           border-r-[8px] border-r-transparent
                           border-b-[8px] border-b-white"
                />

                <div className="flex flex-col h-[180px]">
                  {languages.map((lang, index) => (
                    <div
                      key={lang.code}
                      className="flex flex-col flex-1 items-center justify-center"
                    >
                      <Link
                        href={newPathname(lang.code)}
                        className={`
                          w-full h-full
                          flex items-center justify-center space-x-2
                          font-nunito text-[16px] font-[500]
                          leading-[16.67px] text-center
                          text-[#0B0B0B]
                          transition-colors
                          ${currentLang === lang.code
                            ? 'bg-[#F6F2EF] text-[#2A2A2A] font-medium'
                            : 'hover:bg-[#F6F2EF] text-[#677489]'
                          }
                          ${index === 0 ? 'rounded-t-[12px]' : ''}
                          ${index === languages.length - 1 ? 'rounded-b-[12px]' : ''}
                        `}
                      >
                        <span>{lang.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}