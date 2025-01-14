"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'antd';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  lang: string;
}

export default function Footer({  }: FooterProps) {
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
          <div className="w-full max-w-[852px] text-center mb-4 md:mb-6 pt-4 md:pt-8">
            <h2 className="font-nunito text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.2] tracking-[-1.5px] md:tracking-[-2.67px] text-[#F7F2EF]">
              Our Expertise
              <br />
              Brings Your Vision to Life
            </h2>
          </div>

          {/* Buttons Container - Reduced top spacing */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[30px] w-full max-w-[565px] pb-4 -mt-7">
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
          {/* Legal Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowLegalDropdown(true)}
            onMouseLeave={() => setShowLegalDropdown(false)}
          >
            <button
              className="flex items-center space-x-2 font-nunito text-[17px] font-[400] "
            >
              
              <Image
                src="/footer-arrowup.png"
                alt="Dropdown"
                width={16}
                height={16}
                priority
                className={` ${
                  showLegalDropdown ? "rotate-180" : ""
                }`}
              />
              <span className="font-nunito text-[17.12px] font-[400] " >Legal Information</span>
            </button>
            {/* Dropdown Menu */}
            {showLegalDropdown && (
                <>
                    {/* Invisible connection area between button and menu */}
                    <div 
                      className="absolute w-full h-[60px] bottom-16 translate-y-full"
                      style={{ pointerEvents: 'auto' }}
                    />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-full right-10 mb-10 bg-white rounded-lg shadow-lg z-10 whitespace-nowrap pt-2"
              >
                <ul className="pt-0 mb-2">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                    (item, index) => (
                      <li key={index} className="group">
                        <Link
                          href="#"
                          className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-[#F6F2EF] hover:text-gray-900 transition-all duration-200"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                {/* Downward pointing arrow */}
                <div className="absolute -bottom-2 right-[104px] w-4 h-4 bg-white transform rotate-45"/>
              </motion.div>
            </>
                             
            )}
          </div>
        
        </div>
      </div>
    </section>
  );
}
