"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  lang: string;
  dictionary: {
    hero: {
      title: string;
      subtitle: string;
    };
    navigation: {
      start: string;
      learn: string;
    };
  };
}

export default function Hero({ lang, dictionary }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center">
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
      
      <div className="absolute inset-0 bg-black/25 z-[1]" /> {/* Overlay for better text readability */}

      <div className="container mx-auto px-4 relative z-[2]">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {dictionary.hero.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {dictionary.hero.subtitle}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href={`/${lang}#contact`}
              className="bg-white text-primary-darker px-8 py-3 text-center hover:bg-primary-darker hover:text-white transition-colors"
            >
              {dictionary.navigation.start}
            </Link>
            <Link
              href={`/${lang}#features`}
              className="border-2 border-white text-white px-8 py-3 text-center hover:bg-white hover:text-primary-darker transition-colors"
            >
              {dictionary.navigation.learn}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
