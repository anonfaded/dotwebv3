"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lato } from 'next/font/google';
import ContactForm from '../../../components/sections/ContactForm';


const lato = Lato({
  weight: '400',
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
            className="object-cover w-full opacity-[0.15]"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-transparent z-[2]" />

        {/* Rectangle with rounded corners */}
        <div className="absolute top-[125px]  lg:top-[125px] left-[15px] sm:left-[20px] lg:left-[25px] right-[15px] sm:right-[20px] lg:right-[25px] bottom-[70px] bg-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] z-[3] opacity-100 overflow-hidden">
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
                <h1 className="font-nunito text-center text-[#0b0b0b] font-medium text-[28px] xs:text-[32px] sm:text-[38px] md:text-[45px] lg:text-[53px] leading-none whitespace-nowrap">
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
                      <div className="font-nunito font-medium text-lg md:text-[18.44px] leading-tight md:leading-[29px] tracking-tight md:tracking-[-0.19px] text-[#0b0b0b] mb-4">
                        E-Mail Kontakt
                      </div>

                      {/* Description text - with flex-grow to push divider down */}
                      <div className="font-lato font-normal text-sm md:text-[16.93px] leading-relaxed md:leading-[27px] text-[#0b0b0b] mb-3 flex-grow mr-10 sm:mr-20">
                        Für allgemeine oder Support-Anfragen erreichen Sie uns jederzeit per E-Mail.
                      </div>

                      {/* Horizontal Divider */}
                      <div className="h-px w-full bg-[#E4E5E7] mb-2" />

                      {/* Email with icon */}
                      <div className="flex items-center">
                        <div className="mr-3">
                          <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
                            <path d="M3.375 10.1891V18.5625C3.375 19.4576 3.73058 20.316 4.36351 20.949C4.99645 21.5819 5.85489 21.9375 6.75 21.9375H20.25C21.1451 21.9375 22.0035 21.5819 22.6365 20.949C23.2694 20.316 23.625 19.4576 23.625 18.5625V8.4375C23.625 7.54239 23.2694 6.68395 22.6365 6.05101C22.0035 5.41808 21.1451 5.0625 20.25 5.0625H6.75C5.85489 5.0625 4.99645 5.41808 4.36351 6.05101C3.73058 6.68395 3.375 7.54239 3.375 8.4375V10.1891ZM6.75 6.75H20.25C20.6976 6.75 21.1268 6.92779 21.4432 7.24426C21.7597 7.56073 21.9375 7.98995 21.9375 8.4375V9.68625L13.5 14.229L5.0625 9.68625V8.4375C5.0625 7.98995 5.24029 7.56073 5.55676 7.24426C5.87322 6.92779 6.30245 6.75 6.75 6.75ZM5.0625 11.6033L13.1001 15.93C13.223 15.9962 13.3604 16.0308 13.5 16.0308C13.6396 16.0308 13.777 15.9962 13.8999 15.93L21.9375 11.6033V18.5625C21.9375 19.0101 21.7597 19.4393 21.4432 19.7557C21.1268 20.0722 20.6976 20.25 20.25 20.25H6.75C6.30245 20.25 5.87322 20.0722 5.55676 19.7557C5.24029 19.4393 5.0625 19.0101 5.0625 18.5625V11.6033Z" fill="#0b0b0b" />
                          </svg>
                        </div>
                        <div className="font-lato font-medium text-sm md:text-[16.93px] leading-tight md:leading-[27px] text-[#0b0b0b]">
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
                      <div className="font-nunito font-medium text-lg md:text-[18.44px] leading-tight md:leading-[29px] tracking-tight md:tracking-[-0.19px] text-[#0b0b0b] mb-4">
                        WhatsApp Support
                      </div>

                      {/* Description text - with flex-grow to push divider down */}
                      <div className="font-lato font-normal text-sm md:text-[16.93px] leading-relaxed md:leading-[27px] text-[#0b0b0b] mb-3 flex-grow mr-10 sm:mr-20">
                        Für schnellen Support nutzen Sie auch unseren WhatsApp-Dienst.
                        <br />
                        <br />
                      </div>


                      {/* Horizontal Divider */}
                      <div className="h-px w-full bg-[#E4E5E7] mb-2" />

                      {/* WhatsApp with icon */}
                      <div className="flex items-center">
                        <div className="mr-3">
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
                            <path d="M17 2.91005C16.0831 1.98416 14.991 1.25002 13.7875 0.750416C12.584 0.250812 11.2931 -0.00426317 9.99 5.38951e-05C4.53 5.38951e-05 0.0800002 4.45005 0.0800002 9.91005C0.0800002 11.6601 0.54 13.3601 1.4 14.8601L0 20.0001L5.25 18.6201C6.7 19.4101 8.33 19.8301 9.99 19.8301C15.45 19.8301 19.9 15.3801 19.9 9.92005C19.9 7.27005 18.87 4.78005 17 2.91005ZM9.99 18.1501C8.51 18.1501 7.06 17.7501 5.79 17.0001L5.49 16.8201L2.37 17.6401L3.2 14.6001L3 14.2901C2.17755 12.9771 1.74092 11.4593 1.74 9.91005C1.74 5.37005 5.44 1.67005 9.98 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5676 4.85392 17.1759 5.7626 17.5896 6.76338C18.0033 7.76417 18.2142 8.83714 18.21 9.92005C18.23 14.4601 14.53 18.1501 9.99 18.1501ZM14.51 11.9901C14.26 11.8701 13.04 11.2701 12.82 11.1801C12.59 11.1001 12.43 11.0601 12.26 11.3001C12.09 11.5501 11.62 12.1101 11.48 12.2701C11.34 12.4401 11.19 12.4601 10.94 12.3301C10.69 12.2101 9.89 11.9401 8.95 11.1001C8.21 10.4401 7.72 9.63005 7.57 9.38005C7.43 9.13005 7.55 9.00005 7.68 8.87005C7.79 8.76005 7.93 8.58005 8.05 8.44005C8.17 8.30005 8.22 8.19005 8.3 8.03005C8.38 7.86005 8.34 7.72005 8.28 7.60005C8.22 7.48005 7.72 6.26005 7.52 5.76005C7.32 5.28005 7.11 5.34005 6.96 5.33005H6.48C6.31 5.33005 6.05 5.39005 5.82 5.64005C5.6 5.89005 4.96 6.49005 4.96 7.71005C4.96 8.93005 5.85 10.1101 5.97 10.2701C6.09 10.4401 7.72 12.9401 10.2 14.0101C10.79 14.2701 11.25 14.4201 11.61 14.5301C12.2 14.7201 12.74 14.6901 13.17 14.6301C13.65 14.5601 14.64 14.0301 14.84 13.4501C15.05 12.8701 15.05 12.3801 14.98 12.2701C14.91 12.1601 14.76 12.1101 14.51 11.9901Z" fill="#0b0b0b" />
                          </svg>
                        </div>
                        <div className="font-lato font-medium text-sm md:text-[16.93px] leading-tight md:leading-[27px] text-[#0b0b0b]">
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
                      <div className="font-nunito font-medium text-lg md:text-[18.44px] leading-tight md:leading-[29px] tracking-tight md:tracking-[-0.19px] text-[#0b0b0b] mb-4">
                        Adresse
                      </div>

                      {/* Description text - with flex-grow to push divider down */}
                      <div className="font-lato font-normal text-sm md:text-[16.93px] leading-relaxed md:leading-[27px] text-[#0b0b0b] mb-3 flex-grow mr-10 sm:mr-20">
                        ImmoIQ<br />
                        ELK Media LLC<br />
                        WY 82801, USA
                      </div>

                      {/* Horizontal Divider */}
                      <div className="h-px w-full bg-[#E4E5E7] mb-2" />

                      {/* Address with icon */}
                      <div className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <svg width="18" height="22" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-6 md:w-6 md:h-7">
                            <path d="M6.25 14.25H8.75V10.8125H11.25V14.25H13.75V8.3125L10 5.8125L6.25 8.3125V14.25ZM10 22.1875C12.5417 19.8542 14.4271 17.7344 15.6563 15.8281C16.8854 13.9219 17.5 12.2292 17.5 10.75C17.5 8.47917 16.776 6.61979 15.3281 5.17188C13.8802 3.72396 12.1042 3 10 3C7.89583 3 6.11979 3.72396 4.67188 5.17188C3.22396 6.61979 2.5 8.47917 2.5 10.75C2.5 12.2292 3.11458 13.9219 4.34375 15.8281C5.57292 17.7344 7.45833 19.8542 10 22.1875ZM10 25.5C6.64583 22.6458 4.14062 19.9948 2.48438 17.5469C0.828125 15.099 0 12.8333 0 10.75C0 7.625 1.00521 5.13542 3.01563 3.28125C5.02604 1.42708 7.35417 0.5 10 0.5C12.6458 0.5 14.974 1.42708 16.9844 3.28125C18.9948 5.13542 20 7.625 20 10.75C20 12.8333 19.1719 15.099 17.5156 17.5469C15.8594 19.9948 13.3542 22.6458 10 25.5Z" fill="#0b0b0b" />
                          </svg>
                        </div>
                        <div className="font-lato font-medium text-sm md:text-[16.93px] leading-tight md:leading-[27px] text-[#0b0b0b]">
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

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
