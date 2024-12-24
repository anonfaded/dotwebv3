"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComparisonStats() {
  return (
    <motion.div 
      className="w-full bg-[#F6F2EF] rounded-2xl p-[clamp(10px,1.2vw,20px)] sm:p-[clamp(12px,1.5vw,22px)] lg:p-[clamp(16px,1.5vw,24px)] min-w-[320px] max-w-[1200px] mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-4">
        {/* Left Stat */}
        <div className="text-center lg:w-1/4 w-full space-y-2 sm:space-y-4">
          <h2 className="font-nunito text-[clamp(20px,3.2vw,47px)] font-bold leading-tight tracking-[-2px] text-[#2E2F35]">15h</h2>
          <p className="font-lato text-[clamp(10px,1.1vw,14px)] leading-relaxed text-[#2E2F35] max-w-[180px] mx-auto">
            Time saved per employee each month through optimized workflows.
          </p>
        </div>

        {/* Middle Comparison */}
        <div className="flex-1 w-full lg:w-auto flex items-center justify-center flex-col px-4 lg:px-0 relative">
            <h3 className="font-nunito text-[clamp(18px,2.5vw,39.48px)] font-bold leading-none tracking-[-2.32px] text-[#2E2F35] text-center whitespace-nowrap relative top-0">
                Legacy Systems vs. Modern Workflows
            </h3>
          <div className="relative w-full max-w-[651.36px] mx-auto mt-[clamp(40px,6vh,80px)]">
            {/* Middle icon */}
            <div className="absolute left-[35%] -top-[clamp(30px,4vh,50px)]">
              <Image
                src="/bar.png"
                alt="Progress Bar Icon"
                width={24}
                height={24}
                priority
                unoptimized
                className="transform translate-x-[-50%]"
              />
            </div>

            {/* Right icon with spacing */}
            <div className="absolute" style={{ left: '95%', top: '-30px' }}>
              <div className="relative w-[29px] h-[29px]">
                <Image
                  src="/bar2.png"
                  alt="End Bar Icon"
                  fill
                  sizes="29px"
                  priority
                  unoptimized
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Base bar */}
            <div className="h-3 bg-[#016EC6] rounded-full" />
            
            {/* Overlay bar */}
            <div className="absolute left-0 top-0 w-[37%] h-3 bg-[#055DA3] rounded-full" />
          </div>
        </div>

        {/* Right Stat */}
        <div className="text-center lg:w-1/4 w-full space-y-2 sm:space-y-4">
          <h2 className="font-nunito text-[clamp(20px,3.2vw,47px)] font-bold leading-tight tracking-[-2px] text-[#2E2F35]">2x</h2>
          <p className="font-lato text-[clamp(10px,1.1vw,14px)] leading-relaxed text-[#2E2F35] max-w-[180px] mx-auto">
            Accelerated project completion rates through intelligent automation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}