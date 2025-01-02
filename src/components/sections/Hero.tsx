"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  lang: string;
  dictionary: {
    hero: {
      title: string;
      description: string;
    };
    navigation: {
      start: string;
      learn: string;
    };
  };
}

export default function Hero({ lang, dictionary }: HeroProps) {
  return (
    
    <section className="relative h-[800px] sm:h-[900px] lg:h-[1030px] flex flex-col justify-start overflow-hidden z-[-9]">
      {/* adjust above height to make the hero shorter, and the z index is making the overlap of chatsection smooth else the color would be dull visible */}
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.png"
          alt="Background pattern"
          fill
          className="object-cover w-full opacity-20"
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-black/25 z-[1]" />

      <div className="container mx-auto px-4 relative z-[2] flex flex-col items-center justify-start h-full pt-[175px]">
        <div className="w-full max-w-6xl mx-auto relative">
          {/* Title row with left and right icons */}
          <div className="relative flex flex-col items-center">
            {/* Left icon group */}
            <motion.div 
              className="absolute left-0 top-0 hidden lg:block -translate-x-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-[0px_4px_44px_0px_#E4F4FF] p-2 mb-2">
                <p className="font-nunito-sans text-xs sm:text-sm text-[#016EC6] whitespace-nowrap">
                  AI Provided Personalized Answers
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/hero-icon1.png"
                  alt="Hero Icon 1"
                  width={77}
                  height={62}
                  className="w-auto h-auto max-w-[clamp(50px,6vw,77px)]"
                  priority
                />
              </div>
            </motion.div>

            {/* Right icon group */}
            <motion.div 
              className="absolute right-0 top-0 hidden lg:block translate-x-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/hero-icon2.png"
                alt="Hero Icon Combined"
                width={125}
                height={110}
                className="w-auto h-auto max-w-[clamp(80px,8vw,125px)]"
                priority
              />
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="w-full max-w-[812px] mx-auto space-y-4 md:space-y-6 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-nunito text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-center">
                <span className="block">Workflows Built for</span>
                <span className="block mt-2">
                  <span className="bg-white text-[#016EC6] rounded-xl px-2 sm:px-4 inline-block">Reduced Overhead</span> and
                </span>
                <span className="block mt-2">Better Results</span>
              </h1>
            </motion.div>

            {/* Button row with icons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 relative w-full">
              {/* Left icon group */}
              <motion.div 
                className="absolute left-0 top-0 hidden lg:block -translate-x-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Image
                  src="/hero-icon3.png"
                  alt="Hero Icon Combined Left"
                  width={125}
                  height={55}
                  className="w-auto h-auto max-w-[clamp(80px,8vw,125px)]"
                  priority
                />
              </motion.div>

              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-8 sm:mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href={`/${lang}/start`}
                  className="start-button flex items-center justify-center gap-2 sm:gap-4 bg-[#0B0B0B] text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 hover:bg-black/90 transition-colors z-20 w-full sm:w-auto"
                >
                  <span className="text-base sm:text-lg font-semibold whitespace-nowrap">
                    {dictionary.navigation.start}
                  </span>
                  <Image
                    src="/right-arrow.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
                <Link
                  href={`/${lang}/learn`}
                  className="text-base sm:text-lg font-semibold underline underline-offset-2 decoration-1 mt-2 sm:mt-0"
                >
                  {dictionary.navigation.learn}
                </Link>
              </motion.div>

              {/* Right icon group */}
              <motion.div 
                className="absolute right-0 top-0 hidden lg:block translate-x-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-white rounded-3xl shadow-[0px_4px_44px_0px_#E4F4FF] p-2 mb-2">
                  <p className="font-nunito-sans text-xs sm:text-sm whitespace-nowrap">
                    Product Explained, Lead Captured.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Image
                    src="/hero-icon4.png"
                    alt="Hero Icon 5"
                    width={89}
                    height={62}
                    className="w-auto h-auto max-w-[clamp(50px,6vw,89px)]"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Chat Section */}
      <motion.div
        className="relative mt-16 md:mt-24 lg:mt-32 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Add your chat component here */}
      </motion.div>
    </section>
  );
}

