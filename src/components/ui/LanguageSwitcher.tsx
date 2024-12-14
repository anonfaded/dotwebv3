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
        <div 
          className="absolute right-0 w-[200px] rounded-xl bg-white p-4 shadow-lg"
          style={{ top: 'calc(100% + 45px)', zIndex: 100 }}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div 
            className="absolute right-[20px] top-[-8px] h-4 w-4 rotate-45 transform bg-white shadow-lg"
            style={{ zIndex: -1 }}
          />
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
