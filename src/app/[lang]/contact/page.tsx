"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="flex-grow">
      <section className="relative h-[800px] sm:h-[900px] lg:h-[1030px] flex flex-col justify-start overflow-hidden z-[1]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-[#F6F2F0]">
          <Image
            src="/hero-bg.png"
            alt="Background pattern"
            fill
            className="object-cover w-full opacity-20"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-transparent z-[2]" />

        <div className="container mx-auto px-4 relative z-[3] flex flex-col items-center justify-start h-full pt-[175px]">
          <div className="w-full max-w-6xl mx-auto relative">
            <div className="relative flex flex-col items-center z-[4]">
              {/* Main Title */}
              <motion.div
                className="w-full max-w-[812px] mx-auto space-y-4 md:space-y-6 mb-8 md:mb-12 select-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-nunito text-center text-[#05313E] font-medium text-[71.36px] leading-[77.57px]">
                  <span className="block">Kontaktieren Sie uns</span>
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
