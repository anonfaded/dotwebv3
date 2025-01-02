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
    <section className="relative w-full min-h-[500px] md:min-h-[724px]">
      {/* Background Image - same as hero */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.png"
          alt="Background pattern"
          fill
          className="object-cover w-full opacity-20"
          priority
        />
      </div>

      <div className="relative w-full max-w-[1440px] h-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Black Content Box */}
        <Card 
          className="absolute left-1/2 -translate-x-1/2 top-[40px] sm:top-[60px] w-[calc(100%-32px)] max-w-[1297px] bg-[#0B0B0B]"
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
            <Button 
              type="text"
              className="flex items-center w-full md:w-[565.32px] h-[50px] md:h-[69.91px] bg-[#F7F2EF] rounded-[87.38px] hover:bg-[#e7e2df] group"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <span className="font-nunitoSans text-[16px] md:text-[19.97px] font-semibold leading-none text-black group-hover:text-white whitespace-nowrap">
                Start the Conversation
              </span>
              <svg 
                width={20} 
                height={20} 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="group-hover:text-white w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
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
      </div>

      {/* Floating Footer Bar - Moved below CTA section */}
      <div 
        className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-[calc(350px+40px+32px)] sm:mt-[calc(508.06px+60px+32px)]"
      >
        <div 
          className="w-[calc(100%-32px)] max-w-[1297px] mx-auto h-auto md:h-[64.85px] bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-[21.62px] py-4 md:py-0 relative"
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
              width={120}
              height={36}
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
