"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComparisonStats() {
  return (
    <motion.div 
      className="w-full bg-[#F6F2EF] rounded-2xl p-4 sm:p-6 lg:p-8 min-w-[320px] max-w-[1200px] mx-auto my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-between gap-8 sm:gap-4 lg:gap-4">
        
        {/* Left Stat (15h) */}
        <div className="text-center sm:w-1/3 lg:w-1/4 w-full hidden sm:block">
          <h2 className="font-nunito text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#2E2F35] mt-4">15h</h2>
          <p className="font-lato text-sm sm:text-base leading-relaxed text-[#2E2F35] max-w-[180px] mx-auto -mt-3">
            Time saved per employee each month through optimized workflows.
          </p>
        </div>

        {/* Middle Stat (Legacy Systems) */}
        <div className="text-center sm:w-1/3 lg:w-auto w-full mt-8 sm:mt-0 lg:mt-0 hidden sm:block">
          <h3 className="font-nunito text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#2E2F35] text-center">
            Legacy Systems vs. Modern Workflows
          </h3>
          <div className="relative w-full max-w-[651.36px] mx-auto mt-8 sm:mt-12 lg:mt-16">
            {/* Middle icon */}
            <div className="absolute left-[35%] -top-6 sm:-top-8">
              <Image
                src="/bar.svg"
                alt="Progress Bar Icon"
                width={24}
                height={24}
                priority
                className="transform -translate-x-1/2"
              />
            </div>

            {/* Right icon with spacing */}
            <div className="absolute right-0 -top-6 sm:-top-8">
              <Image
                src="/bar2.svg"
                alt="End Bar Icon"
                width={29}
                height={29}
                priority
              />
            </div>

            {/* Base bar */}
            <div className="h-3 bg-[#016EC6] rounded-full" />
            
            {/* Overlay bar */}
            <div className="absolute left-0 top-0 w-[37%] h-3 bg-[#055DA3] rounded-full" />
          </div>
        </div>

        {/* Right Stat (2x) for large screens*/}
        <div className="text-center sm:w-1/3 lg:w-1/4 w-full hidden sm:block">
          <h2 className="font-nunito text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#2E2F35] mt-4">2x</h2>
          <p className="font-lato text-sm sm:text-base leading-relaxed text-[#2E2F35] max-w-[180px] mx-auto -mt-3">
            Accelerated project completion rates through intelligent automation.
          </p>
        </div>
      </div>

      {/* Mobile Version Layout */}
      <div className="sm:hidden flex flex-col mt-6">
                {/* Legacy section in second row */}
                <div className="text-center w-full">
          <h3 className="font-nunito text-[32px] font-bold leading-tight tracking-tight text-[#2E2F35] text-center mb-10">
            Legacy vs. Automation
          </h3>
          <div className="relative w-full max-w-[651.36px] mx-auto mb-14">
            {/* Middle icon */}
            <div className="absolute left-[35%] -top-8">
              <Image
                src="/bar.svg"
                alt="Progress Bar Icon"
                width={24}
                height={24}
                priority
                className="transform -translate-x-1/2"
              />
            </div>

            {/* Right icon with spacing */}
            <div className="absolute right-0 -top-8">
              <Image
                src="/bar2.svg"
                alt="End Bar Icon"
                width={29}
                height={29}
                priority
              />
            </div>

            {/* Base bar */}
            <div className="h-3 bg-[#016EC6] rounded-full" />
            
            {/* Overlay bar */}
            <div className="absolute left-0 top-0 w-[37%] h-3 bg-[#055DA3] rounded-full" />
          </div>
        </div>
        {/* Flex container for phone screens */}
        <div className="flex flex-row items-start justify-between w-full px-6">
          
          {/* Left Stat (15h) */}
          <div className="text-center w-1/2 pr-2">
            <h2 className="font-nunito text-[32px] font-bold leading-tight tracking-tight text-[#2E2F35] mb-3">15h</h2>
            <p className="font-lato text-[15px] leading-[1.4] text-[#2E2F35] mx-auto">
              Time saved per employee each month.
            </p>
          </div>

          {/* Right Stat (2x) */}
          <div className="text-center w-1/2 pl-2">
            <h2 className="font-nunito text-[32px] font-bold leading-tight tracking-tight text-[#2E2F35] mb-3">2x</h2>
            <p className="font-lato text-[15px] leading-[1.4] text-[#2E2F35] mx-auto">
              Accelerated project completion rates.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
