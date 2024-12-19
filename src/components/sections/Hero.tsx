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
    <section className="relative h-screen flex items-start justify-center overflow-x-hidden pt-[250px]">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            fill
            priority
            quality={100}
            unoptimized
            className="opacity-75"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black/25 z-[1]" />

      <div className="container mx-auto px-4 relative z-[2]">
        <div className="max-w-[1200px] mx-auto relative">
          {/* Title row with left and right icons */}
          <div className="relative">
            {/* Left icon group */}
            <motion.div 
              className="absolute -translate-x-full -left-8 md:-left-12 lg:-left-16 xl:-left-20 top-[20px] hidden md:block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div 
                className="w-[230px] bg-white rounded-3xl px-[21px] py-[0px] mb-1 shadow-[0px_4px_44px_0px_#E4F4FF] flex justify-center"
              >
                <p className="font-nunito-sans text-[12px] font-normal leading-[16.8px] text-center mt-3 text-[#016EC6]">
                  AI Provided Personalized Answers
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/hero-icon1.png"
                  alt="Hero Icon 1"
                  width={77}
                  height={62}
                  priority
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Right icon group */}
            <motion.div 
              className="absolute translate-x-full -right-8 md:-right-12 lg:-right-16 xl:-right-20 top-[20px] hidden md:block mt-[-27px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/hero-icon2.png"
                alt="Hero Icon Combined"
                width={125}
                height={110}
                priority
                unoptimized
              />
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="w-[812px] max-w-[90%] mx-auto space-y-[29.45px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-nunito text-[64px] font-semibold leading-[70.4px] tracking-[-0.03em] text-center">
                <span className="block">Workflows Built for</span>
                <span className="block">
                  <span className="bg-white text-[#016EC6] rounded-xl px-4 inline-block">Reduced Overhead</span> and
                </span>
                <span className="block">Better Results</span>
              </h1>
            </motion.div>

            {/* Button row with icons */}
            <div className="flex items-center justify-center gap-8 relative">
              {/* Left icon group */}
              <motion.div 
                className="absolute -translate-x-full -left-8 md:-left-12 lg:-left-16 xl:-left-20 hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src="/hero-icon3.png"
                    alt="Hero Icon Combined Left"
                    width={125}
                    height={55}
                    priority
                    unoptimized
                    className="mb-[0px] ml-[200px]"
                  />
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div 
                className="flex items-center gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href={`/${lang}/start`}
                  className="flex items-center gap-[21.21px] bg-[#0B0B0B] text-white rounded-xl px-[37.71px] py-[18.86px] hover:bg-black/90 transition-colors"
                >
                  <span className="text-[18.86px] font-semibold">
                    {dictionary.navigation.start}
                  </span>
                  <Image
                    src="/right-arrow.png"
                    alt="Arrow"
                    width={28.29}
                    height={28.29}
                    priority
                    unoptimized
                  />
                </Link>
                <Link
                  href={`/${lang}/learn`}
                  className="text-[18.86px] font-semibold leading-[33.94px] underline underline-offset-2 decoration-1"
                >
                  {dictionary.navigation.learn}
                </Link>
              </motion.div>

              {/* Right icon group */}
              <motion.div 
                className="absolute translate-x-full -right-8 md:-right-12 lg:-right-16 xl:-right-20 hidden md:block mt-[27px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div 
                  className="w-[230px] bg-white rounded-3xl px-[21px] py-[0px] mb-1 shadow-[0px_4px_44px_0px_#E4F4FF] flex justify-center mr-[130px]"
                >
                  <p className="font-nunito-sans text-[12px] font-normal leading-[16.8px] text-center mt-3">
                    Product Explained, Lead Captured.
                  </p>
                </div>
                <Image
                  src="/hero-icon4.png"
                  alt="Hero Icon 5"
                  width={89}
                  height={62}
                  priority
                  unoptimized
                  className="ml-[70px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
