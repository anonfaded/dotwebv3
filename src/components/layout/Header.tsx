"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useState } from 'react';

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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-8">
      <motion.header 
        className="mx-auto mt-6 flex items-center justify-between rounded-2xl bg-white shadow-lg px-8 py-4"
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
          
          <div className="flex items-center space-x-8">
            {/* Solutions dropdown */}
            <div className="relative">
              <button 
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
                <span>{dictionary.navigation?.solutions || 'Solutions'}</span>
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
                  className="absolute left-0 mt-4 w-[374px] rounded-xl bg-white p-6 shadow-lg"
                  style={{ top: '100%' }}
                  onMouseEnter={() => setShowSolutionsDropdown(true)}
                  onMouseLeave={() => setShowSolutionsDropdown(false)}
                >
                  <div className="absolute left-[20px] top-[-8px] h-4 w-4 rotate-45 transform bg-white" />
                  <p className="font-nunito text-[12px] font-[600] leading-[18px] tracking-[0.5px] text-[#97A3B7] mb-4">
                    Werkzeuge für Immobilienprofis
                  </p>
                  
                  {[
                    {
                      icon: '/KI-Widget.png',
                      title: 'KI-Widget',
                      desc: 'Intelligente Tools für Verkaufsmandate.'
                    },
                    {
                      icon: '/mandatscout.png',
                      title: 'Mandatscout',
                      desc: 'Private Verkäufer effizient finden.'
                    },
                    {
                      icon: '/ki-schreibwerkzeuge.png',
                      title: 'KI-Schreibwerkzeuge',
                      desc: 'Texte automatisch und präzise erstellen.'
                    },
                    {
                      icon: '/kundenwebseiten.png',
                      title: 'Kundenwebseiten',
                      desc: 'Lead-Magnete für mehr Kundenanfragen.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 mb-6 last:mb-0">
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={24} 
                        height={24} 
                        priority 
                        unoptimized
                      />
                      <div>
                        <h3 className="font-nunito text-[16.03px] font-[500] leading-[26.72px] text-[#111B29]">
                          {item.title}
                        </h3>
                        <p className="font-nunito-sans text-[13px] font-[500] leading-[19.5px] text-[#677489]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Case Studies */}
            <Link href={`/${lang}/case-studies`} className="flex items-center space-x-2">
              <Image 
                src="/casestudies.png" 
                alt="Case Studies" 
                width={24} 
                height={24} 
                priority 
                unoptimized
              />
              <span className="font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black">{dictionary.navigation?.caseStudies || 'Case Studies'}</span>
            </Link>

            {/* Contact */}
            <Link href={`/${lang}/contact`} className="flex items-center space-x-2">
              <Image 
                src="/contact.png" 
                alt="Contact" 
                width={24} 
                height={24} 
                priority 
                unoptimized
              />
              <span className="font-nunito text-[16px] font-[400] text-[#2A2A2A] hover:text-black">{dictionary.navigation?.contact || 'Contact'}</span>
            </Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-6">
          <LanguageSwitcher currentLang={lang} />
          <button className="bg-[#2A2A2A] text-white px-6 py-2 rounded-lg font-nunito hover:bg-black transition-colors">
            {dictionary.navigation?.demo || 'Request a Demo'}
          </button>
        </div>
      </motion.header>
    </div>
  );
}
