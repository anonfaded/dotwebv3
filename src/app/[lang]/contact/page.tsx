"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

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

        {/* Rectangle with rounded corners */}
        <div className="absolute top-[120px] left-[25px] right-[25px] bottom-[50px] bg-white rounded-[20px] z-[3] opacity-90 overflow-hidden">
          {/* SVG Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/contact-bg.svg"
              alt="Contact Background"
              width={1400} // Adjust the width to make the SVG smaller
              height={400} // Adjust the height to make the SVG smaller
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-[5] flex flex-col items-center justify-start h-full pt-[175px]">
          <div className="w-full max-w-6xl mx-auto relative">
            <div className="relative flex flex-col items-center z-[6]">
              {/* Main Title */}
              <motion.div
                className="w-full max-w-[812px] mx-auto space-y-4 md:space-y-6 select-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-nunito text-center text-[#05313E] font-medium text-[71.36px] leading-[77.57px]">
                  <span className="block">Kontaktieren Sie uns</span>
                </h1>
              </motion.div>
              {/* Descriptive text below title */}
              <motion.div
                className={`w-[564px] h-[67px] text-center text-[#A2AAAC] ${lato.className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-[22.16px] leading-[33.24px]">
                  Ihre Fragen, unsere Antworten – gemeinsam schaffen wir die Grundlage für Ihren erfolgreichen Start.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
