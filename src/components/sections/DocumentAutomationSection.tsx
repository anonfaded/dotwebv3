"use client";
import Image from 'next/image';
import Link from 'next/link';
export default function DocAutomationSection() {
  return (
    <section className="bg-[#F6F2EF] relative overflow-hidden min-h-[671px] py-10 md:py-14 lg:h-[750px] lg:py-0">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex items-center">
        <div className="max-w-[1144px] mx-auto w-full">
          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content - Text Section */}
            <div className="w-full lg:w-[55%] mb-10 md:mb-12 lg:mb-0 order-1 px-2 sm:px-4 lg:pr-24 lg:-ml-10">
              <div
                className="w-[216px] h-[35px] bg-[#EDE9E6] rounded-[12.54px] mb-6 md:mb-8 flex items-center justify-center"
              >
                <span className="uppercase text-sm font-bold tracking-wider text-[#2A2A2A]">
                  DOCUMENT AUTOMATION
                </span>
              </div>
              <h2 className="font-nunito text-[28px] sm:text-[32px] lg:text-[41.2px] font-bold leading-tight lg:leading-[48px] tracking-[-1.5px] lg:tracking-[-2.17px] text-[#2A2A2A] mb-4 md:mb-6">
                Automate Document Creation, Across Any Industry
              </h2>
              <p className="font-lato text-[16px] lg:text-[19.51px] leading-relaxed lg:leading-[29.27px] text-[#2A2A2A] mb-6 md:mb-8">
                {`Eliminate manual paperwork and accelerate your workflows with automated document generation tailored specifically for your business. Whether it's proposals, contracts, invoices, or reports, our solution ensures consistency, accuracy, and professional presentation—so your team can focus on what truly matters.`}
              </p>
              <Link
                href="#"
                className="group inline-flex items-center bg-[#0B0B0B] text-white px-5 sm:px-6 lg:px-[40.89px] py-3 sm:py-4 lg:py-[20.44px] rounded-[13.01px] hover:opacity-90 transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
              >
                <span className="text-[15px] sm:text-[16px] lg:text-[19.51px]">Discover Document Creation</span>
                <svg
                  className="ml-3 sm:ml-4 lg:ml-6 w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            {/* Right Content - Image */}
            <div className="w-full md:w-[80%] lg:w-[50%] mt-4 md:mt-6 lg:mt-0 order-2 lg:translate-x-[20%]">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] mx-auto lg:mx-0">
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