"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const path = pathname.split('/').slice(2).join('/');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const langs = {
    de: 'Deutsch',
    fr: 'Français',
    en: 'English'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button
        ref={buttonRef}
        className="flex items-center space-x-2 font-nunito text-[17px] font-[400] text-[#2A2A2A] hover:text-black"
      >
        <Image
          src="/language.png"
          alt="Language"
          width={22}
          height={22}
          className="w-[22px] h-[22px]"
          priority
          unoptimized
        />
        <span>{langs[currentLang as keyof typeof langs]}</span>
        <Image
          src="/language-dropdown.png"
          alt="Dropdown"
          width={22}
          height={22}
          className={`w-[22px] h-[22px] transform ${showDropdown ? 'rotate-180' : ''} filter brightness-0`}
          priority
          unoptimized
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
              className="absolute w-[120px]"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                top: '100%',
              }}
            >
              <div className="absolute top-[50px] w-full rounded-[12px] bg-white shadow-[0px_0px_12.4px_0px_#0000000D] z-50">
                {/* Triangular Arrow */}
                <div
                  className="absolute top-[-10px] left-1/2 -translate-x-1/2
                           border-l-[10px] border-l-transparent
                           border-r-[10px] border-r-transparent
                           border-b-[10px] border-b-white"
                />

                <div className="flex flex-col h-[180px]">
                  {Object.entries(langs).map(([code, name], index) => (
                    <div
                      key={code}
                      className="flex flex-col flex-1 items-center justify-center"
                    >
                      <Link
                        href={`/${code}/${path}`}
                        className={`
                          w-full h-full
                          flex items-center justify-center
                          font-nunito text-[17px] font-[500]
                          leading-[16.67px] text-center
                          text-[#0B0B0B]
                          transition-colors
                          ${currentLang === code
                            ? 'bg-[#F6F2EF] text-[#2A2A2A] font-medium'
                            : 'hover:bg-[#F6F2EF] text-[#677489]'
                          }
                          ${index === 0 ? 'rounded-t-[12px]' : ''}
                          ${index === Object.keys(langs).length - 1 ? 'rounded-b-[12px]' : ''}
                        `}
                        style={{
                          textUnderlinePosition: 'from-font',
                          textDecorationSkipInk: 'none'
                        }}
                      >
                        {name}
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