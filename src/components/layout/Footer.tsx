"use client";

import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <section className="relative w-screen h-[724px]">
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

      <div className="relative max-w-[1440px] h-full mx-auto px-4">
        {/* Main Black Content Box */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[80px] w-[1297px] h-[508.06px] bg-[#0B0B0B] rounded-[12.5px_0_0_0] flex flex-col items-center justify-center px-8">
          {/* Text Content */}
          <div className="w-[852px] h-[192px] text-center mb-12">
            <h2 className="font-nunito text-[80px] font-semibold leading-[96px] tracking-[-2.67px] text-[#F7F2EF]">
              Our Expertise
              <br />
              Brings Your Vision to Life
            </h2>
          </div>

          {/* Buttons Container */}
          <div className="flex items-center gap-[30px]">
            <button className="flex items-center px-[39.95px] py-[19.97px] bg-[#F7F2EF] rounded-[87.38px_0_0_0] gap-[22.47px] transition-colors hover:bg-[#e7e2df]">
              <span className="font-nunitoSans text-[19.97px] font-semibold leading-[35.95px]">
                Start the Conversation
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link 
              href="#"
              className="text-[#F7F2EF] text-[19.97px] font-nunitoSans font-semibold leading-[35.95px] underline underline-offset-4 hover:text-[#e7e2df] transition-colors"
            >
              See What's Possible
            </Link>
          </div>
        </div>

        {/* Floating Footer Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[1297px] h-[64.85px] bg-white rounded-[10.81px_0_0_0] shadow-[0px_0px_15px_0px_#00000008] flex items-center justify-between px-[21.62px]">
          {/* Left side - Logo and Text */}
          <div className="flex items-center gap-[21.62px] h-[36.7px]">
            <Image 
              src="/footer.png" 
              alt="DotWeb Logo" 
              width={36.7} 
              height={36.7}
            />
            <span className="font-nunito text-[17.12px]"> 2024</span>
          </div>

          {/* Right side - Legal Information and Settings */}
          <div className="flex items-center gap-2 px-[15.84px] py-[9.9px] rounded-[7.92px_0_0_0]">
            <Link 
              href={`/${lang}/legal`}
              className="flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L12 19M12 5L19 12M12 5L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-nunito text-[17.12px] leading-[19.8px] text-[#0B0B0B]">
                Legal Information
              </span>
            </Link>
            <Image 
              src="/settings.png" 
              alt="Settings" 
              width={19.8} 
              height={19.8}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
