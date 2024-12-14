"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const path = pathname.split('/').slice(2).join('/');
  
  const langs = {
    de: 'Deutsch',
    en: 'English',
    fr: 'Français'
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center gap-2 hover:text-black"
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
        <span className="text-[16px] font-[400] font-nunito text-[#2A2A2A]">
          {langs[currentLang as keyof typeof langs]}
        </span>
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
        <div className="absolute top-[60px] right-0 w-[200px] bg-white/95 backdrop-blur-sm rounded-[12px] shadow-lg p-4">
          <div className="absolute top-[-8px] right-[20px] w-4 h-4 bg-white transform rotate-45" />
          <div className="space-y-3">
            {Object.entries(langs).map(([code, name]) => (
              <Link
                key={code}
                href={`/${code}/${path}`}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  currentLang === code
                    ? 'bg-[#F6F2EF] text-[#2A2A2A] font-medium'
                    : 'hover:bg-[#F6F2EF] text-[#677489]'
                }`}
                onClick={() => setShowDropdown(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
