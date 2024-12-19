"use client";

import Image from 'next/image';

export default function ChatBox() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-[1230px] h-[868px] bg-white rounded-lg overflow-hidden shadow-lg z-[10] isolate">
      {/* Main white background wrapper */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex justify-between items-center px-12 py-8 bg-[#0B0B0B]">
          <div className="space-y-2">
            <h3 className="font-nunito text-[21.38px] font-bold leading-[29.16px] text-white">
              Ask About Smarter Automation Solutions 
            </h3>
            <p className="font-lato text-[17.81px] font-normal leading-[21.38px] text-[#E8E8E8]">
              Instant insights on workflows, cost savings, and efficiency.
            </p>
          </div>
          <Image
            src="/help.png"
            alt="Help"
            width={29}
            height={48.39}
            priority
            unoptimized
          />
        </div>

        {/* Main Content */}
        <div className="px-12 py-20 bg-white">
          <div className="flex flex-col items-center mb-20">
            <div className="w-[45.42px] h-[45.42px] mb-8">
              <Image
                src="/brain.png"
                alt="Brain"
                width={45.42}
                height={45.42}
                priority
                unoptimized
              />
            </div>
            <p className="font-nunito text-[23.16px] font-bold leading-[34.73px] text-[#2A2A2A] text-center max-w-[600px] mb-20">
              What do you want to know about automation today?
            </p>
          </div>

          {/* Pre-prompt Cards */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-10 max-w-[1008px] mx-auto">
            <div className="bg-white border border-[#D9D9D9] rounded-[10.01px] p-6 h-[98.14px] w-[490px] transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer">
              <h4 className="font-nunito-sans text-[16.02px] font-bold leading-[24.03px] text-[#0E0E0E]">
                How can automation save us money?
              </h4>
              <p className="font-lato text-[14.02px] font-normal leading-[21.03px] text-[#8C8C8C]">
                Discover how to cut costs and improve efficiency.
              </p>
            </div>
            
            <div className="bg-white border border-[#D9D9D9] rounded-[10.01px] p-6 h-[98.14px] w-[490px] transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer">
              <h4 className="font-nunito-sans text-[16.02px] font-bold leading-[24.03px] text-[#0E0E0E]">
                Can I reduce my team size with AI?
              </h4>
              <p className="font-lato text-[14.02px] font-normal leading-[21.03px] text-[#8C8C8C]">
                Achieve more with fewer resources.
              </p>
            </div>
            
            <div className="bg-white border border-[#D9D9D9] rounded-[10.01px] p-6 h-[98.14px] w-[490px] relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer">
              <h4 className="font-nunito-sans text-[16.02px] font-bold leading-[24.03px] text-[#0E0E0E]">
                What services does DOTWEB offer?
              </h4>
              <p className="font-lato text-[14.02px] font-normal leading-[21.03px] text-[#8C8C8C]">
                Explore tailored solutions for your business.
              </p>
              <Image
                src="/send.png"
                alt="Send"
                width={39.05}
                height={39.05}
                priority
                unoptimized
                className="absolute right-6 top-1/2 -translate-y-1/2"
              />
            </div>
            
            <div className="bg-white border border-[#D9D9D9] rounded-[10.01px] p-6 h-[98.14px] w-[490px] transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer">
              <h4 className="font-nunito-sans text-[16.02px] font-bold leading-[24.03px] text-[#0E0E0E]">
                How reliable are your solutions?
              </h4>
              <p className="font-lato text-[14.02px] font-normal leading-[21.03px] text-[#8C8C8C]">
                Learn about performance and dependability.
              </p>
            </div>
          </div>

          {/* Input Field */}
          <div className="relative mb-8">
            <div className="flex items-center border border-[#E5E5E5] rounded-[8.91px] h-[48px] mx-auto w-[1008px] bg-white">
              <input
                type="text"
                placeholder="Ask anything about automation here..."
                className="flex-1 px-6 font-nunito text-[15.14px] font-normal leading-[15.14px] placeholder-gray-400 focus:outline-none"
              />
              <div className="flex items-center gap-2 pr-4">
                <Image
                  src="/send2.png"
                  alt="Send"
                  width={32.06}
                  height={32.06}
                  priority
                  unoptimized
                />
                <Image
                  src="/send3.png"
                  alt="Send Alternative"
                  width={32.06}
                  height={32.06}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Powered By Logo */}
          <div className="flex justify-center mt-4">
            <Image
              src="/poweredby.png"
              alt="Powered By"
              width={181.69}
              height={33.84}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
