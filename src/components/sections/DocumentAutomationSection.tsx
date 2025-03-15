"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function DocAutomationSection() {
  return (
    <section className="bg-[#F6F2EF] relative overflow-hidden min-h-[671px] py-16 lg:h-[671px] lg:py-0">
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content - Text Section */}
            <div className="w-full lg:w-1/2 lg:mr-auto lg:max-w-[480px] mb-8 lg:mb-0 order-1">
              <div
                className="w-[216px] h-[35px] bg-[#EDE9E6] rounded-[12.54px] mb-8 flex items-center justify-center"
              >
                <span className="uppercase text-sm font-bold tracking-wider text-[#2A2A2A]">
                  DOCUMENT AUTOMATION
                </span>
              </div>
              <h2 className="font-nunito text-[32px] lg:text-[41.2px] font-bold leading-tight lg:leading-[41.2px] tracking-[-2.17px] text-[#2A2A2A] mb-6">
                Automate Document Creation, Across Any Industry
              </h2>
              <p className="font-lato text-[16px] lg:text-[19.51px] leading-relaxed lg:leading-[29.27px] text-[#2A2A2A] mb-8">
                {`Eliminate manual paperwork and accelerate your workflows with automated document generation tailored specifically for your business. Whether it's proposals, contracts, invoices, or reports, our solution ensures consistency, accuracy, and professional presentation—so your team can focus on what truly matters.`}
              </p>
              <Link
                href="#"
                className="group inline-flex items-center bg-[#0B0B0B] text-white px-6 lg:px-[40.89px] py-4 lg:py-[20.44px] rounded-[13.01px] hover:opacity-90 transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
              >
                <span className="text-[16px] lg:text-[19.51px]">Discover Document Creation</span>
                <svg
                  className="ml-4 lg:ml-6 w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-3/4 mt-8 lg:mt-0 order-2">
              <div className="relative w-full aspect-[16/10] max-w-[900px] mx-auto lg:mx-0">
                <Image
                  src="/document-automation.png"
                  alt="Document Automation Interface"
                  fill
                  className="object-contain rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}