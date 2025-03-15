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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 sm:mt-10 lg:mt-16 w-full mb-10 px-3 sm:px-4">
                {/* Email Card */}
                <div className="relative w-full mx-auto">
                  {/* Border container */}
                  <div className="border border-[#E4E5E7] rounded-xl md:rounded-[19.35px] transition-transform hover:scale-[1.02]">
                    {/* Background+Shadow container */}
                    <div className="m-2 md:m-3 bg-white shadow-md rounded-lg md:rounded-[9.68px] p-4 md:p-6 flex flex-col">
                      {/* Title */}
                      <div className="font-nunito font-medium text-lg md:text-[18.44px] leading-tight md:leading-[29px] tracking-tight md:tracking-[-0.19px] text-[#05313E] mb-4">
                        E-Mail Kontakt
                      </div>

                      {/* Description text - with flex-grow to push divider down */}
                      <div className="font-lato font-normal text-sm md:text-[16.93px] leading-relaxed md:leading-[27px] text-[#05313E] mb-6 flex-grow">
                        Für allgemeine oder Support-Anfragen erreichen Sie uns jederzeit per E-Mail.
                      </div>

                      {/* Horizontal Divider */}
                      <div className="h-px w-full bg-[#E4E5E7] mb-4" />

                      {/* Email with icon */}
                      <div className="flex items-center">
                        <div className="mr-3">
                          <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
                            <path d="M3.375 10.1891V18.5625C3.375 19.4576 3.73058 20.316 4.36351 20.949C4.99645 21.5819 5.85489 21.9375 6.75 21.9375H20.25C21.1451 21.9375 22.0035 21.5819 22.6365 20.949C23.2694 20.316 23.625 19.4576 23.625 18.5625V8.4375C23.625 7.54239 23.2694 6.68395 22.6365 6.05101C22.0035 5.41808 21.1451 5.0625 20.25 5.0625H6.75C5.85489 5.0625 4.99645 5.41808 4.36351 6.05101C3.73058 6.68395 3.375 7.54239 3.375 8.4375V10.1891ZM6.75 6.75H20.25C20.6976 6.75 21.1268 6.92779 21.4432 7.24426C21.7597 7.56073 21.9375 7.98995 21.9375 8.4375V9.68625L13.5 14.229L5.0625 9.68625V8.4375C5.0625 7.98995 5.24029 7.56073 5.55676 7.24426C5.87322 6.92779 6.30245 6.75 6.75 6.75ZM5.0625 11.6033L13.1001 15.93C13.223 15.9962 13.3604 16.0308 13.5 16.0308C13.6396 16.0308 13.777 15.9962 13.8999 15.93L21.9375 11.6033V18.5625C21.9375 19.0101 21.7597 19.4393 21.4432 19.7557C21.1268 20.0722 20.6976 20.25 20.25 20.25H6.75C6.30245 20.25 5.87322 20.0722 5.55676 19.7557C5.24029 19.4393 5.0625 19.0101 5.0625 18.5625V11.6033Z" fill="#05313E" />
                          </svg>
                        </div>
                        <div className="font-lato font-medium text-sm md:text-[16.93px] leading-tight md:leading-[27px] text-[#05313E]">
                          support@dotweb.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="relative w-full mx-auto">
                  {/* Border container */}
                  <div className="border border-[#E4E5E7] rounded-xl md:rounded-[19.35px] transition-transform hover:scale-[1.02]">
                    {/* Background+Shadow container */}
                    <div className="m-2 md:m-3 bg-white shadow-md rounded-lg md:rounded-[9.68px] p-4 md:p-6 flex flex-col">
                      {/* Title */}
                      <div className="font-nunito font-medium text-lg md:text-[18.44px] leading-tight md:leading-[29px] tracking-tight md:tracking-[-0.19px] text-[#05313E] mb-4">
                        WhatsApp Support
                      </div>

                      {/* Description text - with flex-grow to push divider down */}
                      <div className="font-lato font-normal text-sm md:text-[16.93px] leading-relaxed md:leading-[27px] text-[#05313E] mb-6 flex-grow">
                        Für schnellen Support nutzen Sie auch unseren WhatsApp-Dienst.
                      </div>

                      {/* Horizontal Divider */}
                      <div className="h-px w-full bg-[#E4E5E7] mb-4" />

                      {/* WhatsApp with icon */}
                      <div className="flex items-center">
                        <div className="mr-3">
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
                            <path d="M17 2.91005C16.0831 1.98416 14.991 1.25002 13.7875 0.750416C12.584 0.250812 11.2931 -0.00426317 9.99 5.38951e-05C4.53 5.38951e-05 0.0800002 4.45005 0.0800002 9.91005C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92005C19.9 7.27005 18.87 4.78005 17 2.91005ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17755 12.9771 1.74092 11.4593 1.74 9.91005C1.74 5.37005 5.44 1.67005 9.98 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5676 4.85392 17.1759 5.7626 17.5896 6.76338C18.0033 7.76417 18.2142 8.83714 18.21 9.92005C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63005 7.57 9.38005C7.43 9.13005 7.55 9.00005 7.68 8.87005C7.79 8.76005 7.93 8.58005 8.05 8.44005C8.17 8.30005 8.22 8.19005 8.3 8.03005C8.38 7.86005 8.34 7.72005 8.28 7.60005C8.22 7.48005 7.72 6.26005 7.52 5.76005C7.32 5.28005 7.11 5.34005 6.96 5.33005H6.48C6.31 5.33005 6.05 5.39005 5.82 5.64005C5.6 5.89005 4.96 6.49005 4.96 7.71005C4.96 8.93005 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z" fill="#05313E" />
                          </svg>
                        </div>
                        <div className="font-lato font-medium text-sm md:text-[16.93px] leading-tight md:leading-[27px] text-[#05313E]">
                          (43) 650 1234
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="relative w-full mx-auto">
                  {/* Border container */}
                  <div className="border border-[#E4E5E7] rounded-xl md:rounded-[19.35px] transition-transform hover:scale-[1.02]">
                    {/* Background+Shadow container */}
                    <div className="m-2 md:m-3 bg-white shadow-md rounded-lg md:rounded-[9.68px] p-4 md:p-6 flex flex-col">
                      {/* Title */}
                      <div className="font-nunito font-medium text-lg md:text-[18.44px] leading-tight md:leading-[29px] tracking-tight md:tracking-[-0.19px] text-[#05313E] mb-4">
                        Adresse
                      </div>

                      {/* Description text - with flex-grow to push divider down */}
                      <div className="font-lato font-normal text-sm md:text-[16.93px] leading-relaxed md:leading-[27px] text-[#05313E] mb-6 flex-grow">
                        ImmoIQ<br />
                        ELK Media LLC<br />
                        WY 82801, USA
                      </div>

                      {/* Horizontal Divider */}
                      <div className="h-px w-full bg-[#E4E5E7] mb-4" />

                      {/* Address with icon */}
                      <div className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <svg width="18" height="22" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 md:w-6 md:h-7">
                            <path d="M6.25 14.25H8.75V10.8125H11.25V14.25H13.75V8.3125L10 5.8125L6.25 8.3125V14.25ZM10 22.1875C12.5417 19.8542 14.4271 17.7344 15.6563 15.8281C16.8854 13.9219 17.5 12.2292 17.5 10.75C17.5 8.47917 16.776 6.61979 15.3281 5.17188C13.8802 3.72396 12.1042 3 10 3C7.89583 3 6.11979 3.72396 4.67188 5.17188C3.22396 6.61979 2.5 8.47917 2.5 10.75C2.5 12.2292 3.11458 13.9219 4.34375 15.8281C5.57292 17.7344 7.45833 19.8542 10 22.1875ZM10 25.5C6.64583 22.6458 4.14062 19.9948 2.48438 17.5469C0.828125 15.099 0 12.8333 0 10.75C0 7.625 1.00521 5.13542 3.01563 3.28125C5.02604 1.42708 7.35417 0.5 10 0.5C12.6458 0.5 14.974 1.42708 16.9844 3.28125C18.9948 5.13542 20 7.625 20 10.75C20 12.8333 19.1719 15.099 17.5156 17.5469C15.8594 19.9948 13.3542 22.6458 10 25.5Z" fill="#05313E" />
                          </svg>
                        </div>
                        <div className="font-lato font-medium text-sm md:text-[16.93px] leading-tight md:leading-[27px] text-[#05313E]">
                          30 N Gould St, Sheridan
                        </div>
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
            {/* Contact Form - Moved up on mobile */}
            <div className="w-full lg:w-[557px] mt-0 lg:mt-0 order-1 lg:order-2">
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
                  className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-[#016ec6] border-4 border-[rgba(82,138,243,0.4)] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] font-nunito font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-white hover:bg-[#016ec6cc] transition-colors"
                >
                  Absenden
                </button>
              </form>
            </div>

            {/* Left Content - Moved down on mobile */}
            <div className="w-full lg:w-[527px] px-4 sm:px-6 lg:pd-0 lg:ml-[110px] py-3 sm:py-10 lg:py-24 order-2 lg:order-1">
              {/* Upper Heading */}
              <h3 className={`${nunitoSans.className} text-[14px] sm:text-[16px] font-bold leading-[140%] uppercase text-[#016ec6] tracking-wider`}>
                Ihr Kontakt zu mehr Verkaufsmandaten
              </h3>

              {/* Main Heading */}
              <h2 className="mt-4 sm:mt-6 font-nunito font-semibold text-[32px] sm:text-[42px] lg:text-[53px] leading-[120%] text-[#0b0b0b]">
                Verwandeln Sie Interessenten in Kunden – wir liefern Ihnen die richtigen Tools
              </h2>

              {/* Social Icons */}
              <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[41.19px] h-[41.19px] relative flex items-center justify-center">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.6061 5.14844C33.5163 5.14844 34.3893 5.51004 35.033 6.15371C35.6767 6.79737 36.0383 7.67036 36.0383 8.58064V32.6061C36.0383 33.5163 35.6767 34.3893 35.033 35.033C34.3893 35.6767 33.5163 36.0383 32.6061 36.0383H8.58064C7.67036 36.0383 6.79737 35.6767 6.15371 35.033C5.51004 34.3893 5.14844 33.5163 5.14844 32.6061V8.58064C5.14844 7.67036 5.51004 6.79737 6.15371 6.15371C6.79737 5.51004 7.67036 5.14844 8.58064 5.14844H32.6061ZM31.748 31.748V22.6527C31.748 21.1689 31.1586 19.7459 30.1094 18.6968C29.0603 17.6476 27.6373 17.0582 26.1535 17.0582C24.6948 17.0582 22.9959 17.9506 22.1722 19.2891V17.3842H17.3842V31.748H22.1722V23.2876C22.1722 21.9662 23.2361 20.8851 24.5575 20.8851C25.1947 20.8851 25.8058 21.1382 26.2564 21.5888C26.707 22.0393 26.9601 22.6504 26.9601 23.2876V31.748H31.748ZM11.8069 14.69C12.5715 14.69 13.3049 14.3862 13.8455 13.8455C14.3862 13.3049 14.69 12.5715 14.69 11.8069C14.69 10.2109 13.4029 8.9067 11.8069 8.9067C11.0377 8.9067 10.3 9.21226 9.75615 9.75615C9.21226 10.3 8.9067 11.0377 8.9067 11.8069C8.9067 13.4029 10.2109 14.69 11.8069 14.69ZM14.1923 31.748V17.3842H9.43869V31.748H14.1923Z" fill="#0b0b0b" />
                  </svg>
                </a>

                {/* Email */}
                <a href="mailto:support@dotweb.com" className="w-[30.51px] h-[30.51px] relative flex items-center justify-center">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_299_789)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1506 0.553193C26.782 0.323094 27.4661 0.278028 28.1223 0.423293C28.7785 0.568557 29.3795 0.898115 29.8549 1.37323C30.3302 1.84835 30.6601 2.44929 30.8057 3.10541C30.9513 3.76154 30.9065 4.44559 30.6767 5.07716L22.8883 28.4205C22.6989 28.9941 22.3653 29.5095 21.9197 29.9174C21.4741 30.3253 20.9312 30.612 20.3431 30.75C19.7563 30.8927 19.1426 30.8806 18.5619 30.7148C17.9813 30.549 17.4537 30.2353 17.0307 29.8043L12.8511 25.6442L8.4622 27.9149C8.29396 28.0022 8.10587 28.044 7.91652 28.0364C7.72716 28.0287 7.54308 27.9718 7.38245 27.8712C7.22181 27.7706 7.09019 27.6299 7.00056 27.4629C6.91094 27.296 6.86642 27.1085 6.8714 26.9191L7.05227 19.9806L22.4046 8.82971C22.5494 8.72454 22.672 8.59188 22.7656 8.4393C22.8591 8.28672 22.9217 8.11722 22.9497 7.94046C22.9777 7.7637 22.9707 7.58315 22.9289 7.40913C22.8872 7.2351 22.8116 7.071 22.7064 6.92619C22.6012 6.78139 22.4686 6.65872 22.316 6.56518C22.1634 6.47165 21.9939 6.40908 21.8171 6.38106C21.6404 6.35303 21.4598 6.36009 21.2858 6.40184C21.1118 6.44359 20.9477 6.51921 20.8029 6.62438L5.19125 17.9648L1.42127 14.1948C1.01497 13.7884 0.715427 13.2879 0.549284 12.7378C0.383141 12.1876 0.355553 11.6049 0.468975 11.0416C0.583015 10.4257 0.85888 9.85117 1.26826 9.37707C1.67764 8.90297 2.20579 8.54633 2.79851 8.34375H2.80505L26.1484 0.551014L26.1506 0.553193Z" fill="#0b0b0b" />
                    </g>
                    <defs>
                      <clipPath id="clip0_299_789">
                        <rect width="30.5085" height="30.5085" fill="white" transform="translate(0.390625 0.339844)" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/436501234" target="_blank" rel="noopener noreferrer" className="w-[35.08px] h-[35.08px] relative flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.4605 2.97266C26.5343 2.97266 33.0791 9.51742 33.0791 17.5913C33.0791 25.6652 26.5343 32.2099 18.4605 32.2099C15.877 32.2144 13.3389 31.5307 11.1073 30.2291L3.84767 32.2099L5.82411 24.9474C4.52153 22.715 3.83729 20.1759 3.84182 17.5913C3.84182 9.51742 10.3866 2.97266 18.4605 2.97266ZM13.4784 10.7205L13.1861 10.7322C12.997 10.7453 12.8123 10.7949 12.6422 10.8784C12.4837 10.9683 12.339 11.0806 12.2125 11.2117C12.037 11.3769 11.9376 11.5202 11.8309 11.6591C11.2902 12.3621 10.9991 13.2252 11.0035 14.1121C11.0064 14.8284 11.1935 15.5257 11.4859 16.1777C12.0838 17.4963 13.0676 18.8924 14.3658 20.1861C14.6786 20.4975 14.9856 20.8103 15.316 21.1012C16.9291 22.5213 18.8512 23.5454 20.9296 24.0922L21.7599 24.2194C22.0303 24.234 22.3008 24.2135 22.5727 24.2004C22.9984 24.1779 23.414 24.0627 23.7904 23.8627C23.9817 23.7638 24.1685 23.6565 24.3503 23.5411C24.3503 23.5411 24.4122 23.4992 24.533 23.4095C24.7304 23.2633 24.8517 23.1595 25.0155 22.9885C25.1383 22.8618 25.2406 22.7146 25.3225 22.547C25.4365 22.3087 25.5505 21.8541 25.5973 21.4755C25.6324 21.186 25.6221 21.0281 25.6178 20.9302C25.6119 20.7738 25.4818 20.6115 25.34 20.5428L24.4892 20.1613C24.4892 20.1613 23.2174 19.6072 22.4397 19.2534C22.3582 19.218 22.2711 19.1977 22.1824 19.1935C22.0823 19.183 21.9812 19.1942 21.8859 19.2262C21.7905 19.2583 21.7032 19.3104 21.6298 19.3792C21.6225 19.3762 21.5245 19.4596 20.4676 20.7402C20.4069 20.8217 20.3234 20.8833 20.2276 20.9171C20.1318 20.951 20.028 20.9555 19.9296 20.9302C19.8344 20.9048 19.741 20.8726 19.6504 20.8337C19.4691 20.7577 19.4063 20.7285 19.282 20.6758C18.4427 20.3102 17.6659 19.8155 16.9796 19.2096C16.7954 19.0488 16.6244 18.8734 16.4489 18.7038C15.8739 18.153 15.3726 17.5299 14.9578 16.8501L14.8716 16.7113C14.8106 16.6174 14.7605 16.5168 14.7225 16.4116C14.6669 16.1967 14.8116 16.0242 14.8116 16.0242C14.8116 16.0242 15.1669 15.6353 15.3321 15.4248C15.4929 15.2202 15.6288 15.0213 15.7165 14.8795C15.889 14.6018 15.9431 14.3167 15.8525 14.096C15.4432 13.0961 15.0202 12.1015 14.5836 11.1123C14.4973 10.9164 14.2415 10.7761 14.0091 10.7483C13.9301 10.7386 13.8512 10.7308 13.7723 10.7249C13.576 10.7137 13.3792 10.7156 13.1831 10.7308L13.4784 10.7205Z" fill="#0b0b0b" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
