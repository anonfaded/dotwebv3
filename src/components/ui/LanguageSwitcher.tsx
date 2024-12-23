"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';

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
    <div className="relative">
      <button 
        ref={buttonRef}
        className="flex items-center space-x-2 font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black"
        onClick={() => setShowDropdown(!showDropdown)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      >
        <Image 
          src="/language.png" 
          alt="Language" 
          width={24} 
          height={24}
          className="w-6 h-6"
          priority
          unoptimized
        />
        <span>{langs[currentLang as keyof typeof langs]}</span>
        <Image 
          src="/language-dropdown.png" 
          alt="Dropdown" 
          width={24} 
          height={24}
          className="w-6 h-6"
          priority
          unoptimized
        />
      </button>

      {showDropdown && (
        <div 
          className="fixed w-[72px] h-[104px] top-[124px] rounded-[12px] bg-white shadow-[0px_0px_12.4px_0px_#0000000D]"
          style={{ 
            zIndex: 100,
            left: buttonRef.current 
              ? `${buttonRef.current.getBoundingClientRect().left + buttonRef.current.getBoundingClientRect().width - 72}px` 
              : 'auto'
          }}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {/* Triangular Arrow */}
          <div 
            className="absolute top-[-10px] w-0 h-0 
                       border-l-[10px] border-l-transparent 
                       border-r-[10px] border-r-transparent 
                       border-b-[10px] border-b-white"
            style={{
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />

          <div className="flex flex-col h-full">
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
                    font-nunito text-[11px] font-[500] 
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
                  onClick={() => setShowDropdown(false)}
                >
                  {name}
                </Link>
                {/* Divider - only for Deutsch and Français */}
                {index < Object.keys(langs).length - 1 && (
                  <div 
                    className="w-[47px] h-[0px] border-t border-[#F2F2F2] absolute"
                    style={{ top: `${(index + 1) * (100 / Object.keys(langs).length)}%` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
