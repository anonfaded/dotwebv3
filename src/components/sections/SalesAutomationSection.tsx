"use client";

import Image from 'next/image';
import Link from 'next/link';


export default function SalesAutomationSection() {
  return (
    <section className="bg-[#F5FAFF] relative overflow-hidden min-h-[671px] py-16 lg:h-[750px] lg:py-0">
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-[1144px] mx-auto w-full">
          {/* Content Grid - Updated spacing */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content - Image */}
            <div className="w-full lg:w-[50%] mt-8 lg:mt-0 order-2 lg:order-1 lg:translate-x-[-20%]">
              <div className="relative w-full aspect-[16/9] max-w-[800px] h-[800px] mx-auto">
                <Image
                  src="/sales-automation.png"
                  alt="Sales Automation Interface"
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* Right Content - Text Section */}
            <div className="w-full lg:w-[55%] mb-12 lg:mb-0 order-1 lg:order-2 pl-24 -mr-10">
              <div
                className="w-[216px] h-[35px] bg-[#d8e9f5] rounded-[12.54px] mb-8 flex items-center justify-center"
              >
                <span className="uppercase text-sm font-bold tracking-wider text-[#016EC6]">
                  SALES AUTOMATION
                </span>
              </div>
              <h2 className="font-nunito text-[32px] lg:text-[41.2px] font-bold leading-tight lg:leading-[41.2px] tracking-[-2.17px] text-[#2A2A2A] mb-6">
                Capture and Qualify Leads—Everywhere, Effortlessly
              </h2>
              <p className="font-lato text-[16px] lg:text-[19.51px] leading-relaxed lg:leading-[29.27px] text-[#2A2A2A] mb-8">
                Turn every interaction into an opportunity. Our omnichannel automation seamlessly connects WhatsApp, Messenger, Instagram, websites, and even phone calls into a unified lead-generation and qualification engine. AI-powered chat and voice agents automatically engage, pre-screen, and deliver qualified prospects directly into your sales funnel.
              </p>
              <Link
                href="#"
                className="group inline-flex items-center bg-[#016EC6] text-white px-6 lg:px-[40.89px] py-4 lg:py-[20.44px] rounded-[13.01px] hover:opacity-90 transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
              >
                <span className="text-[16px] lg:text-[19.51px]">Start Capturing More Leads</span>
                <svg
                  className="ml-4 lg:ml-6 w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}