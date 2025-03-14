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
      <section className="relative min-h-screen pb-[70px] pt-[120px] lg:pt-0 flex flex-col justify-start overflow-hidden z-[1]">
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
        <div className="absolute top-[120px] sm:top-[120px] lg:top-[120px] left-[15px] sm:left-[20px] lg:left-[25px] right-[15px] sm:right-[20px] lg:right-[25px] bottom-[50px] bg-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] z-[3] opacity-90 overflow-hidden">
          {/* SVG Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src="/contact-bg.svg"
              alt="Contact Background"
              width={1400}
              height={400}
              className="object-contain scale-50 sm:scale-75 lg:scale-100"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-[5] flex flex-col items-center justify-start h-full pt-[40px] sm:pt-[60px] lg:pt-[175px]">
          <div className="w-full max-w-[1400px] mx-auto relative px-3 sm:px-4 lg:px-6">
            <div className="relative flex flex-col items-center z-[6]">
              {/* Main Title */}
              <motion.div
                className="w-full max-w-[812px] mx-auto space-y-4 md:space-y-6 select-text px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-nunito text-center text-[#05313E] font-medium text-[clamp(2.5rem,5vw,71.36px)] leading-[1.2] sm:leading-[1.3] lg:leading-[77.57px]">
                  <span className="block">Kontaktieren Sie uns</span>
                </h1>
              </motion.div>
              {/* Descriptive text below title */}
              <motion.div
                className={`w-full max-w-[564px] mx-auto px-4 text-center text-[#A2AAAC] ${lato.className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-[clamp(16px,2vw,22.16px)] leading-[1.5] sm:leading-[1.6] lg:leading-[33.24px]">
                  Ihre Fragen, unsere Antworten – gemeinsam schaffen wir die Grundlage für Ihren erfolgreichen Start.
                </p>
              </motion.div>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12 w-full mb-12 sm:mb-14 lg:mb-16">
                {[1, 2, 3].map((card, index) => (
                  <div key={index} className="relative w-full max-w-[320px] sm:max-w-[387px] mx-auto h-[200px] sm:h-[244px] border-[1.20949px] border-[#E4E5E7] rounded-[19.3518px] transition-transform hover:scale-[1.02]">
                    <div className="absolute inset-x-[11px] top-[11px] bottom-[10px] bg-white shadow-[0px_1.20949px_3.62846px_rgba(4,37,47,0.06),0px_14.5138px_38.7036px_-14.5138px_rgba(4,37,47,0.2)] rounded-[9.67589px]">
                      <div className="absolute left-[20px] sm:left-[29px] top-[25px] sm:top-[32px] font-nunito font-semibold text-[16px] sm:text-[18.8982px] leading-[24px] sm:leading-[29px] text-[#05313E]">
                        Adresse
                      </div>
                      <div className="absolute left-[20px] sm:left-[29px] top-[55px] sm:top-[66px] w-[190px] sm:w-[223px] h-[78px] font-lato font-normal text-[14px] sm:text-[16.9328px] leading-[22px] sm:leading-[27px] text-[#05313E]">
                        ImmoIQ<br />
                        ELK Media LLC<br />
                        WY 82801, USA
                      </div>
                      <div className="absolute left-[20px] sm:left-[29.36px] right-[20px] sm:right-[29.43px] top-[140px] sm:top-[152.08px] h-[1.21px] bg-[#E4E5E7]" />
                      <div className="absolute left-[50px] sm:left-[63px] top-[150px] sm:top-[163px] font-nunito font-semibold text-[14px] sm:text-[16.9328px] leading-[22px] sm:leading-[27px] text-[#05313E]">
                        30 N Gould St, Sheridan
                      </div>
                      <div className="absolute left-[15px] sm:left-[25px] top-[148px] sm:top-[162px] w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] bg-[#05313E]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9C5 13.25 12 22 12 22C12 22 19 13.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
