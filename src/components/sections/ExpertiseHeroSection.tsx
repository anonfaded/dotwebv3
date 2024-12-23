"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function ExpertiseHeroSection() {
  return (
    <section className="relative h-[724px] w-full">
      {/* Background Image - same as hero */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <Image
          src="/images/hero-bg.webp"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto px-4 h-full flex flex-col items-center justify-center">
        {/* Black Box Container */}
        <div className="w-full max-w-[1297px] h-[508.06px] mx-auto bg-[#0B0B0B] rounded-[12.5px_0_0_0] flex flex-col items-center justify-center px-6">
          {/* Text Content */}
          <div className="w-full max-w-[852px] text-center mb-12">
            <h2 className="font-nunito text-[80px] font-semibold leading-[96px] tracking-[-2.67px] text-[#F7F2EF]">
              Our Expertise
              <br />
              Brings Your Vision to Life
            </h2>
          </div>

          {/* Buttons Container */}
          <div className="flex items-center gap-[30px]">
            {/* Left Button */}
            <button className="flex items-center px-[39.95px] py-[19.97px] bg-[#F7F2EF] rounded-[87.38px_0_0_0] gap-[22.47px] text-[19.97px] font-semibold">
              Start the Conversation
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Right Link */}
            <Link 
              href="#"
              className="text-[#F7F2EF] text-[19.97px] font-nunitoSans font-semibold leading-[35.95px] underline"
            >
              See What&rsquo;s Possible
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
