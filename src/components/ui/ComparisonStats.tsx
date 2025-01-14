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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
        {/* Left Stat */}
        <div className="text-center lg:w-1/4 w-full">
          <h2 className="font-nunito text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#2E2F35] mt-4">15h</h2>
          <p className="font-lato text-sm sm:text-base leading-relaxed text-[#2E2F35] max-w-[180px] mx-auto -mt-3">
            Time saved per employee each month through optimized workflows.
          </p>
        </div>

        {/* Middle Comparison */}
        <div className="flex-1 w-full lg:w-auto flex items-center justify-center flex-col px-4 lg:px-0">
          <h3 className="font-nunito text-xl sm:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-[#2E2F35] text-center">
            Legacy Systems vs. Modern Workflows
          </h3>
          <div className="relative w-full max-w-[651.36px] mx-auto mt-12 sm:mt-16 lg:mt-20">
            {/* Middle icon */}
            <div className="absolute left-[35%] -top-8 sm:-top-10">
              <Image
                src="/bar.png"
                alt="Progress Bar Icon"
                width={24}
                height={24}
                priority
                className="transform -translate-x-1/2"
              />
            </div>

            {/* Right icon with spacing */}
            <div className="absolute right-0 -top-8 sm:-top-10">
              <Image
                src="/bar2.png"
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

        {/* Right Stat */}
        <div className="text-center lg:w-1/4 w-full">
          <h2 className="font-nunito text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#2E2F35] mt-4">2x</h2>
          <p className="font-lato text-sm sm:text-base leading-relaxed text-[#2E2F35] max-w-[180px] mx-auto -mt-3">
            Accelerated project completion rates through intelligent automation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

