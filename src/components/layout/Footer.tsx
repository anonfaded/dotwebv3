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
    <section className="relative w-full h-[724px]">
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

      <div className="relative max-w-[1440px] h-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Black Content Box */}
        <Card 
          className="absolute left-1/2 -translate-x-1/2 top-[60px] w-full max-w-[1297px] bg-[#0B0B0B]"
          style={{ 
            borderRadius: '12.5px',
            minHeight: '508.06px',
            paddingBottom: '2rem'
          }}
          bodyStyle={{ 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            paddingTop: '0'
          }}
        >
          {/* Text Content */}
          <div className="w-full max-w-[852px] text-center mb-12 pt-16">
            <h2 className="font-nunito text-[40px] sm:text-[60px] lg:text-[80px] font-semibold leading-[1.2] lg:leading-[96px] tracking-[-2.67px] text-[#F7F2EF]">
              Our Expertise
              <br />
              Brings Your Vision to Life
            </h2>
          </div>

          {/* Buttons Container */}
          <div className="flex items-center justify-center gap-[30px] w-[565.32px] h-[69.91px]">
            <Button 
              type="text"
              className="flex items-center w-[565.32px] h-[69.91px] bg-[#F7F2EF] rounded-[87.38px] hover:bg-[#e7e2df] group"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '22.47px',
              }}
            >
              <span className="font-nunitoSans text-[19.97px] font-semibold leading-none text-black group-hover:text-white whitespace-nowrap">
                Start the Conversation
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            <Link 
              href="#"
              className="flex items-center w-[187px] h-[14px] font-nunitoSans text-[19.97px] font-normal text-[#F7F2EF] text-left hover:text-[#e7e2df] transition-colors whitespace-nowrap"
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none'
              }}
            >
              See What's Possible
            </Link>
          </div>
        </Card>

        {/* Floating Footer Bar */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-8 w-full max-w-[1297px] h-[64.85px] bg-white flex items-center justify-between px-4 sm:px-[21.62px] mx-auto"
          style={{
            borderRadius: '10.81px',
            boxShadow: '0px 0px 15px 0px #00000008'
          }}
        >
          {/* Left side - Logo */}
          <div className="flex items-center gap-[7.21px] w-[145px] h-[43px]">
            <Image 
              src="/footer.png" 
              alt="DotWeb Logo" 
              width={145}
              height={43}
              className="object-contain"
            />
          </div>

          {/* Right side - Legal Information Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2">
              <button 
                className="flex items-center gap-2 px-[15.84px] py-[9.9px] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setShowLegalDropdown(!showLegalDropdown)}
                onBlur={() => setTimeout(() => setShowLegalDropdown(false), 200)}
              >
                <Image 
                  src="/footer-arrowup.png" 
                  alt="Legal" 
                  width={19.8} 
                  height={19.8}
                />
                <span className="font-nunito text-[17.12px] leading-[19.8px] text-[#0B0B0B]">
                  Legal Information
                </span>
              </button>
              <Link href={`/${lang}/settings`} className="rounded-lg p-2 transition-colors hover:bg-[#F6F2EF]">
                <Image
                  src="/settings.png"
                  alt="Settings"
                  width={20}
                  height={20}
                />
              </Link>
            </div>

            {showLegalDropdown && (
              <div 
                className="absolute right-0 min-w-[250px] rounded-xl bg-white p-4 shadow-lg"
                style={{ bottom: 'calc(100% + 16px)', zIndex: 100 }}
                onMouseEnter={() => setShowLegalDropdown(true)}
                onMouseLeave={() => setShowLegalDropdown(false)}
              >
                <div 
                  className="absolute bottom-[-8px] h-4 w-4 rotate-45 transform bg-white shadow-lg"
                  style={{ right: '205px', zIndex: -1 }}
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
        </div>
      </div>
    </section>
  );
}
