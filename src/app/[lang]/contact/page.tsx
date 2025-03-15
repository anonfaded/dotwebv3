"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lato } from 'next/font/google';
import { Nunito_Sans } from 'next/font/google';

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

const nunitoSans = Nunito_Sans({
  weight: '700',
  subsets: ['latin'],
});

export default function ContactPage() {
  return (
    <div className="flex-grow">
      <section className="relative min-h-screen pb-[70px] pt-[170px] lg:pt-[85px] flex flex-col justify-start overflow-hidden z-[1]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-[#F6F2F0]">
          <Image
            src="/hero-bg.png"
            alt="Background pattern"
            fill
            className="object-cover w-full opacity-[0.25]"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-transparent z-[2]" />

        {/* Rectangle with rounded corners */}
        <div className="absolute top-[160px] sm:top-[160px] lg:top-[160px] left-[15px] sm:left-[20px] lg:left-[25px] right-[15px] sm:right-[20px] lg:right-[25px] bottom-[70px] bg-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] z-[3] opacity-100 overflow-hidden">
          {/* SVG Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 lg:top-[180px]">
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
                className={`w-full max-w-[564px] mx-auto px-4 text-center text-[#6B7280] ${lato.className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-[clamp(16px,2vw,22.16px)] leading-[1.5] sm:leading-[1.6] lg:leading-[33.24px]">
                  Ihre Fragen, unsere Antworten – gemeinsam schaffen wir die Grundlage für Ihren erfolgreichen Start.
                </p>
              </motion.div>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-20 w-full mb-[70px]">
                {/* Email Card */}
                <div className="relative w-full max-w-[320px] sm:max-w-[387px] mx-auto h-[200px] sm:h-[244px] border-[1.20949px] border-[#E4E5E7] rounded-[19.3518px] transition-transform hover:scale-[1.02]">
                  <div className="absolute inset-x-[11px] top-[11px] bottom-[10px] bg-white shadow-[0px_1.20949px_3.62846px_rgba(4,37,47,0.06),0px_14.5138px_38.7036px_-14.5138px_rgba(4,37,47,0.2)] rounded-[9.67589px]">
                    <div className="absolute left-[20px] sm:left-[29px] top-[25px] sm:top-[32px] font-nunito font-semibold text-[16px] sm:text-[18.8982px] leading-[24px] sm:leading-[29px] text-[#05313E]">
                      E-Mail Kontakt
                    </div>
                    <div className="absolute left-[20px] sm:left-[29px] top-[55px] sm:top-[66px] w-[190px] sm:w-[223px] h-[78px] font-lato font-normal text-[14px] sm:text-[16.9328px] leading-[22px] sm:leading-[27px] text-[#05313E]">
                      Für allgemeine oder Support-Anfragen erreichen Sie uns jederzeit per E-Mail.
                    </div>
                    <div className="absolute left-[20px] sm:left-[29.36px] right-[20px] sm:right-[29.43px] top-[140px] sm:top-[152.08px] h-[1.21px] bg-[#E4E5E7]" />
                    <div className="absolute left-[50px] sm:left-[63px] top-[150px] sm:top-[163px] font-nunito font-semibold text-[14px] sm:text-[16.9328px] leading-[22px] sm:leading-[27px] text-[#05313E]">
                      support@dotweb.com
                    </div>
                    <div className="absolute left-[15px] sm:left-[25px] top-[148px] sm:top-[162px] w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.375 10.1891V18.5625C3.375 19.4576 3.73058 20.316 4.36351 20.949C4.99645 21.5819 5.85489 21.9375 6.75 21.9375H20.25C21.1451 21.9375 22.0035 21.5819 22.6365 20.949C23.2694 20.316 23.625 19.4576 23.625 18.5625V8.4375C23.625 7.54239 23.2694 6.68395 22.6365 6.05101C22.0035 5.41808 21.1451 5.0625 20.25 5.0625H6.75C5.85489 5.0625 4.99645 5.41808 4.36351 6.05101C3.73058 6.68395 3.375 7.54239 3.375 8.4375V10.1891ZM6.75 6.75H20.25C20.6976 6.75 21.1268 6.92779 21.4432 7.24426C21.7597 7.56073 21.9375 7.98995 21.9375 8.4375V9.68625L13.5 14.229L5.0625 9.68625V8.4375C5.0625 7.98995 5.24029 7.56073 5.55676 7.24426C5.87322 6.92779 6.30245 6.75 6.75 6.75ZM5.0625 11.6033L13.1001 15.93C13.223 15.9962 13.3604 16.0308 13.5 16.0308C13.6396 16.0308 13.777 15.9962 13.8999 15.93L21.9375 11.6033V18.5625C21.9375 19.0101 21.7597 19.4393 21.4432 19.7557C21.1268 20.0722 20.6976 20.25 20.25 20.25H6.75C6.30245 20.25 5.87322 20.0722 5.55676 19.7557C5.24029 19.4393 5.0625 19.0101 5.0625 18.5625V11.6033Z" fill="#05313E" />
                        </svg>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="relative w-full max-w-[320px] sm:max-w-[387px] mx-auto h-[200px] sm:h-[244px] border-[1.20949px] border-[#E4E5E7] rounded-[19.3518px] transition-transform hover:scale-[1.02]">
                  <div className="absolute inset-x-[11px] top-[11px] bottom-[10px] bg-white shadow-[0px_1.20949px_3.62846px_rgba(4,37,47,0.06),0px_14.5138px_38.7036px_-14.5138px_rgba(4,37,47,0.2)] rounded-[9.67589px]">
                    <div className="absolute left-[20px] sm:left-[29px] top-[25px] sm:top-[32px] font-nunito font-semibold text-[16px] sm:text-[18.8982px] leading-[24px] sm:leading-[29px] text-[#05313E]">
                      WhatsApp Support
                    </div>
                    <div className="absolute left-[20px] sm:left-[29px] top-[55px] sm:top-[66px] w-[190px] sm:w-[223px] h-[78px] font-lato font-normal text-[14px] sm:text-[16.9328px] leading-[22px] sm:leading-[27px] text-[#05313E]">
                      Für schnellen Support nutzen Sie auch unseren WhatsApp-Dienst.
                    </div>
                    <div className="absolute left-[20px] sm:left-[29.36px] right-[20px] sm:right-[29.43px] top-[140px] sm:top-[152.08px] h-[1.21px] bg-[#E4E5E7]" />
                    <div className="absolute left-[50px] sm:left-[63px] top-[150px] sm:top-[163px] font-nunito font-semibold text-[14px] sm:text-[16.9328px] leading-[22px] sm:leading-[27px] text-[#05313E]">
                      (43) 650 1234
                    </div>
                    <div className="absolute left-[15px] sm:left-[25px] top-[148px] sm:top-[162px] w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 2.91005C16.0831 1.98416 14.991 1.25002 13.7875 0.750416C12.584 0.250812 11.2931 -0.00426317 9.99 5.38951e-05C4.53 5.38951e-05 0.0800002 4.45005 0.0800002 9.91005C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92005C19.9 7.27005 18.87 4.78005 17 2.91005ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17755 12.9771 1.74092 11.4593 1.74 9.91005C1.74 5.37005 5.44 1.67005 9.98 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5676 4.85392 17.1759 5.7626 17.5896 6.76338C18.0033 7.76417 18.2142 8.83714 18.21 9.92005C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63005 7.57 9.38005C7.43 9.13005 7.55 9.00005 7.68 8.87005C7.79 8.76005 7.93 8.58005 8.05 8.44005C8.17 8.30005 8.22 8.19005 8.3 8.03005C8.38 7.86005 8.34 7.72005 8.28 7.60005C8.22 7.48005 7.72 6.26005 7.52 5.76005C7.32 5.28005 7.11 5.34005 6.96 5.33005H6.48C6.31 5.33005 6.05 5.39005 5.82 5.64005C5.6 5.89005 4.96 6.49005 4.96 7.71005C4.96 8.93005 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z" fill="black" />
                        </svg>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="relative w-full max-w-[320px] sm:max-w-[387px] mx-auto h-[200px] sm:h-[244px] border-[1.20949px] border-[#E4E5E7] rounded-[19.3518px] transition-transform hover:scale-[1.02]">
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
                    <div className="absolute left-[15px] sm:left-[25px] top-[148px] sm:top-[162px] w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.25 14.25H8.75V10.8125H11.25V14.25H13.75V8.3125L10 5.8125L6.25 8.3125V14.25ZM10 22.1875C12.5417 19.8542 14.4271 17.7344 15.6563 15.8281C16.8854 13.9219 17.5 12.2292 17.5 10.75C17.5 8.47917 16.776 6.61979 15.3281 5.17188C13.8802 3.72396 12.1042 3 10 3C7.89583 3 6.11979 3.72396 4.67188 5.17188C3.22396 6.61979 2.5 8.47917 2.5 10.75C2.5 12.2292 3.11458 13.9219 4.34375 15.8281C5.57292 17.7344 7.45833 19.8542 10 22.1875ZM10 25.5C6.64583 22.6458 4.14062 19.9948 2.48438 17.5469C0.828125 15.099 0 12.8333 0 10.75C0 7.625 1.00521 5.13542 3.01563 3.28125C5.02604 1.42708 7.35417 0.5 10 0.5C12.6458 0.5 14.974 1.42708 16.9844 3.28125C18.9948 5.13542 20 7.625 20 10.75C20 12.8333 19.1719 15.099 17.5156 17.5469C15.8594 19.9948 13.3542 22.6458 10 25.5Z" fill="#05313E" />
                        </svg>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-10 pb-[30px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-[527px] px-4 sm:px-6 lg:px-0 lg:ml-[120px]">
              {/* Upper Heading */}
              <h3 className={`${nunitoSans.className} text-[14px] sm:text-[16px] font-bold leading-[140%] uppercase text-[#016ec6] tracking-wider`}>
                Ihr Kontakt zu mehr Verkaufsmandaten
              </h3>

              {/* Main Heading */}
              <h2 className="mt-4 sm:mt-6 font-nunito font-semibold text-[32px] sm:text-[42px] lg:text-[53px] leading-[120%] text-[#05313E]">
                Verwandeln Sie Interessenten in Kunden – wir liefern Ihnen die richtigen Tools
              </h2>

              {/* Social Icons */}
              <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
                {/* LinkedIn */}
                <div className="w-[41.19px] h-[41.19px] relative flex items-center justify-center">
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                    <rect width="41.19" height="41.19" rx="20.595" fill="#016ec6"/>
                    <path d="M28.9273 28.9289H25.1843V22.8449C25.1843 21.3159 25.1573 19.3669 23.0733 19.3669C20.9593 19.3669 20.6343 21.0319 20.6343 22.7539V28.9279H16.8913V16.8179H20.4813V18.4549H20.5353C21.0013 17.7649 21.6437 17.2033 22.3926 16.8335C23.1415 16.4637 23.9702 16.2998 24.7983 16.3579C28.5953 16.3579 28.9293 19.0429 28.9293 22.4979L28.9273 28.9289ZM13.5293 15.1809C12.9901 15.1809 12.4633 15.0318 12.0104 14.7514C11.5575 14.471 11.1988 14.0714 10.9793 13.5997C10.7598 13.1281 10.6886 12.6042 10.7742 12.0974C10.8599 11.5906 11.0987 11.1214 11.4614 10.7487C11.824 10.376 12.2807 10.1249 12.7739 10.0261C13.2672 9.92722 13.777 9.98535 14.2357 10.1947C14.6943 10.404 15.084 10.7548 15.3576 11.2022C15.6313 11.6496 15.7773 12.1728 15.7773 12.7089C15.7773 13.4213 15.4963 14.1046 14.9972 14.6091C14.498 15.1136 13.8228 15.3982 13.1193 15.3989L13.5293 15.1809ZM15.4003 28.9289H11.6523V16.8179H15.4003V28.9289ZM30.7993 10.4189H10.8293C10.4903 10.4139 10.1633 10.5389 9.91731 10.7669C9.67131 10.9949 9.52531 11.3079 9.51331 11.6409V29.7069C9.52431 30.0409 9.66931 30.3559 9.91531 30.5859C10.1613 30.8159 10.4893 30.9419 10.8293 30.9379H30.7993C31.1413 30.9439 31.4713 30.8199 31.7203 30.5909C31.9693 30.3619 32.1173 30.0459 32.1303 29.7109V11.6369C32.1163 11.3019 31.9673 10.9869 31.7173 10.7589C31.4673 10.5309 31.1373 10.4079 30.7953 10.4149" fill="white"/>
                  </svg>
                </div>

                {/* Email */}
                <div className="w-[30.51px] h-[30.51px] relative flex items-center justify-center">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <path d="M25.425 5.08984H5.425C3.7625 5.08984 2.4375 6.42734 2.4375 8.08984L2.425 22.0898C2.425 23.7523 3.7625 25.0898 5.425 25.0898H25.425C27.0875 25.0898 28.425 23.7523 28.425 22.0898V8.08984C28.425 6.42734 27.0875 5.08984 25.425 5.08984ZM25.425 10.0898L15.425 16.0898L5.425 10.0898V8.08984L15.425 14.0898L25.425 8.08984V10.0898Z" fill="#05313E"/>
                  </svg>
                </div>

                {/* WhatsApp */}
                <div className="w-[35.08px] h-[35.08px] relative flex items-center justify-center">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path d="M29.75 5.09375C28.1454 3.47228 26.2342 2.18754 24.1281 1.31323C22.022 0.438914 19.7629 -0.00746055 17.4825 9.43164e-05C7.9275 9.43164e-05 0.14 7.78759 0.14 17.3426C0.14 20.4051 0.945 23.3801 2.45 25.9951L0 35.0001L9.1875 32.5851C11.725 33.9676 14.5775 34.7026 17.4825 34.7026C27.0375 34.7026 34.825 26.9151 34.825 17.3601C34.825 12.7226 33.0225 8.36509 29.75 5.09375ZM17.4825 31.7626C14.8925 31.7626 12.355 31.0626 10.1325 29.7501L9.6075 29.4351L4.1475 30.8701L5.6 25.5501L5.25 25.0076C3.81072 22.7099 3.04661 20.0537 3.045 17.3426C3.045 9.39759 9.52 2.92259 17.465 2.92259C21.315 2.92259 24.9375 4.42759 27.65 7.15759C28.9933 8.49436 30.0578 10.0846 30.7818 11.8359C31.5058 13.5873 31.8749 15.465 31.8675 17.3601C31.9025 25.3051 25.4275 31.7626 17.4825 31.7626ZM25.3925 20.9826C24.955 20.7726 22.82 19.7226 22.435 19.5651C22.0325 19.4251 21.7525 19.3551 21.455 19.7751C21.1575 20.2126 20.335 21.1926 20.09 21.4726C19.845 21.7701 19.5825 21.8051 19.145 21.5776C18.7075 21.3676 17.3075 20.8951 15.6625 19.4251C14.3675 18.2701 13.51 16.8526 13.2475 16.4151C13.0025 15.9776 13.2125 15.7501 13.44 15.5226C13.6325 15.3301 13.8775 15.0151 14.0875 14.7701C14.2975 14.5251 14.385 14.3326 14.525 14.0526C14.665 13.7551 14.595 13.5101 14.49 13.3001C14.385 13.0901 13.51 10.9551 13.16 10.0801C12.81 9.24009 12.4425 9.34509 12.18 9.32759H11.34C11.0425 9.32759 10.5875 9.43259 10.185 9.87009C9.8 10.3076 8.68 11.3576 8.68 13.4926C8.68 15.6276 10.22 17.6926 10.4475 17.9726C10.6575 18.2701 13.51 22.6451 17.85 24.5176C18.9325 24.9726 19.775 25.2351 20.4225 25.4276C21.455 25.7601 22.4 25.7076 23.1525 25.6026C23.9875 25.4801 25.6325 24.5526 25.9825 23.5376C26.3375 22.5226 26.3375 21.6476 26.215 21.4726C26.0925 21.2976 25.83 21.1926 25.3925 20.9826Z" fill="#05313E"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-[557px] mt-12 lg:mt-0">
              <form className="space-y-4 sm:space-y-5 lg:space-y-6">
                {/* Company Name Field */}
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Firmenname"
                    className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-white border-2 border-[#E9E9E9] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] px-5 sm:px-6 lg:px-8 font-nunito font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-[#C2C2C2] focus:outline-none focus:border-[#016ec6] transition-colors"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="relative">
                  <input 
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-white border-2 border-[#E9E9E9] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] px-5 sm:px-6 lg:px-8 font-nunito font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-[#C2C2C2] focus:outline-none focus:border-[#016ec6] transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input 
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-white border-2 border-[#E9E9E9] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] px-5 sm:px-6 lg:px-8 font-nunito font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-[#C2C2C2] focus:outline-none focus:border-[#016ec6] transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea 
                    placeholder="Ihre Nachricht oder weitere Informationen…"
                    className="w-full h-[200px] sm:h-[225px] lg:h-[258px] bg-white border-2 border-[#E9E9E9] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 font-nunito font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-[#C2C2C2] focus:outline-none focus:border-[#016ec6] resize-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-[#016ec6] border-4 border-[rgba(1,110,198,0.32)] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] font-nunito font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-white hover:bg-[#016ec6cc] transition-colors"
                >
                  Absenden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
