"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, Button } from 'antd';
import { useState } from 'react';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const [showLegalDropdown, setShowLegalDropdown] = useState(false);

  return (
    <section className="relative w-full bg-white py-10">
      {/* Background Image - same as hero */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt="Background pattern"
          fill
          className="object-cover w-full h-full opacity-20"
          style={{ 
            objectPosition: 'center', 
            objectFit: 'cover' 
          }}
          priority
        />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Black Content Box */}
        <Card 
          className="w-full max-w-[1297px] mx-auto bg-[#0B0B0B] mb-10"
          style={{ 
            borderRadius: '12.5px',
            minHeight: 'auto',
            height: 'auto',
            paddingBottom: '1rem'
          }}
          bodyStyle={{ 
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            paddingTop: '1rem',
            paddingBottom: '1rem'
          }}
        >
          {/* Text Content */}
          <div className="w-full max-w-[852px] text-center mb-6 md:mb-8 pt-6 md:pt-12">
            <h2 className="font-nunito text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-semibold leading-[1.2] tracking-[-1.5px] md:tracking-[-2.67px] text-[#F7F2EF]">
              Our Expertise
              <br />
              Brings Your Vision to Life
            </h2>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[30px] w-full max-w-[565px] pb-2">
          <Link 
                href="#"
                className="group inline-flex items-center bg-[#ffffff] text-black px-6 lg:px-[40.89px] py-4 lg:py-[20.44px] rounded-[13.01px] hover:text-black hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="font-nunitoSans text-[16px] md:text-[19.97px] font-semibold leading-none whitespace-nowrap">Start the Conversation</span>
                <svg 
                  className="ml-4 lg:ml-6 w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            <Link 
              href="#"
              className="mt-4 md:mt-0 text-center font-nunitoSans text-[16px] md:text-[19.97px] font-normal text-[#F7F2EF] hover:text-[#e7e2df] transition-colors whitespace-nowrap"
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none'
              }}
            >
              See What&rsquo;s Possible
            </Link>
          </div>
        </Card>

        {/* Floating Footer Bar */}
        <div 
          className="w-full max-w-[1297px] mx-auto h-auto md:h-[64.85px] 
                     bg-white flex flex-col md:flex-row items-center justify-between 
                     px-4 sm:px-[21.62px] py-4 md:py-0 relative"
          style={{
            borderRadius: '10.81px',
            boxShadow: '0px 0px 15px 0px #00000008'
          }}
        >
          {/* Left side - Logo */}
          <div className="flex items-center justify-center w-full md:w-auto mb-4 md:mb-0">
            <Image 
              src="/footer.png" 
              alt="DotWeb Logo" 
              width={170}
              height={55}
              className="object-contain"
            />
          </div>

          {/* Right side - Legal Information Dropdown */}
          <div className="relative w-full md:w-auto flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <button 
                  className="flex items-center gap-2 px-[10px] py-[6px] md:px-[15.84px] md:py-[9.9px] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setShowLegalDropdown(!showLegalDropdown)}
                  onBlur={() => setTimeout(() => setShowLegalDropdown(false), 200)}
                >
                  <Image 
                    src="/footer-arrowup.png" 
                    alt="Legal" 
                    width={16} 
                    height={16}
                    className="md:w-[19.8px] md:h-[19.8px]"
                  />
                  <span className="font-nunito text-[14px] md:text-[17.12px] leading-[19.8px] text-[#0B0B0B]">
                    Legal Information
                  </span>
                </button>

                {showLegalDropdown && (
                  <div 
                    className="absolute bottom-full right-0 mb-2 min-w-[250px] rounded-xl bg-white p-4 shadow-lg z-50"
                    onMouseEnter={() => setShowLegalDropdown(true)}
                    onMouseLeave={() => setShowLegalDropdown(false)}
                  >
                    <div 
                      className="absolute bottom-[-8px] h-4 w-4 rotate-45 transform bg-white shadow-lg"
                      style={{ 
                        left: '110px', 
                        zIndex: -1 
                      }}
                    />
                    <div className="space-y-2">
                      {[
                        { title: 'Privacy Policy', href: `/${lang}/privacy` },
                        { title: 'Terms & Conditions', href: `/${lang}/terms` },
                        { title: 'Impressum', href: `/${lang}/impressum` },
                      ].map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block whitespace-nowrap px-4 py-2 rounded-lg transition-colors hover:bg-[#F6F2EF] text-[#677489]"
                          onClick={() => setShowLegalDropdown(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link href={`/${lang}/settings`} className="rounded-lg p-2 transition-colors hover:bg-[#F6F2EF]">
                <Image
                  src="/settings.png"
                  alt="Settings"
                  width={16}
                  height={16}
                  className="md:w-[20px] md:h-[20px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
