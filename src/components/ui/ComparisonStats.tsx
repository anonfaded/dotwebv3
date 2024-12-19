"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComparisonStats() {
  return (
    <motion.div 
      className="max-w-[1230px] mx-auto bg-[#F6F2EF] rounded-2xl p-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between">
        {/* Left Stat */}
        <div className="text-center">
          <h2 className="font-nunito text-[47px] font-bold leading-[75px] tracking-[-2px] text-[#2E2F35] mb-2">15h</h2>
          <p className="font-lato text-[13px] font-normal leading-[19.5px] text-[#2E2F35] max-w-[180px] mx-auto">
            Time saved per employee each month through optimized workflows.
          </p>
        </div>

        {/* Middle Comparison */}
        <div className="flex-1 mx-16">
          <h3 className="font-nunito text-[39.48px] font-bold leading-[59.21px] tracking-[-2.32px] text-[#2E2F35] mb-6 text-center">
            Legacy Systems vs. Modern Workflows
          </h3>
          <div className="relative w-[651.36px] mx-auto">
            {/* Middle icon */}
            <div className="absolute left-[240px] -top-8">
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
            <div className="absolute left-[620px] -top-8">
              <Image
                src="/bar2.png"
                alt="End Bar Icon"
                width={24}
                height={24}
                priority
                unoptimized
                className="transform translate-x-[-50%]"
              />
            </div>

            {/* Base bar */}
            <div className="h-[12.77px] bg-[#016EC6] rounded-[116.11px]" />
            
            {/* Overlay bar */}
            <div className="absolute left-0 top-0 w-[243.83px] h-[12.77px] bg-[#055DA3] rounded-[116.11px]" />
          </div>
        </div>

        {/* Right Stat */}
        <div className="text-center">
          <h2 className="font-nunito text-[47px] font-bold leading-[75px] tracking-[-2px] text-[#2E2F35] mb-2">2x</h2>
          <p className="font-lato text-[13px] font-normal leading-[19.5px] text-[#2E2F35] max-w-[180px] mx-auto">
            Accelerated project completion rates through intelligent automation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
