"use client";

import React from "react";
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  weight: '700',
  subsets: ['latin'],
});
export default function ContactForm() {
  return (
    <>
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
                    className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-white border-2 border-[#E9E9E9] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] px-5 sm:px-6 lg:px-8 font-nunito font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-[#C2C2C2] focus:outline-none focus:border-[#0b0b0b] transition-colors"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-white border-2 border-[#E9E9E9] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] px-5 sm:px-6 lg:px-8 font-nunito font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-[#C2C2C2] focus:outline-none focus:border-[#0b0b0b] transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-white border-2 border-[#E9E9E9] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] px-5 sm:px-6 lg:px-8 font-nunito font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-[#C2C2C2] focus:outline-none focus:border-[#0b0b0b] transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    placeholder="Ihre Nachricht oder weitere Informationen…"
                    className="w-full h-[200px] sm:h-[225px] lg:h-[258px] bg-white border-2 border-[#E9E9E9] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 font-nunito font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-[#C2C2C2] focus:outline-none focus:border-[#0b0b0b] resize-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-[50px] sm:h-[60px] lg:h-[66px] bg-[#0b0b0b] border-4 border-[rgba(0,0,0,0.15)] rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] font-nunito font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] text-white hover:bg-[#333333] transition-colors"
                >
                  Absenden
                </button>
              </form>
            </div>

            {/* Left Content - Moved down on mobile */}
            <div className="w-full lg:w-[527px] px-4 sm:px-6 lg:pd-0 lg:ml-[110px] py-3 sm:py-10 lg:py-24 order-2 lg:order-1 hidden lg:block">
              {/* Upper Heading */}
              <h3
                className={`${nunitoSans.className} text-[14px] sm:text-[16px] font-bold leading-[140%] uppercase text-[#016ec6] tracking-wider`}
              >
                Ihr Kontakt zu mehr Verkaufsmandaten
              </h3>

              {/* Main Heading */}
              <h2 className="mt-4 sm:mt-6 font-nunito font-semibold text-[32px] sm:text-[42px] lg:text-[53px] leading-[120%] text-[#0b0b0b]">
                Verwandeln Sie Interessenten in Kunden – wir liefern Ihnen die
                richtigen Tools
              </h2>

              {/* Social Icons */}
              <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[41.19px] h-[41.19px] relative flex items-center justify-center"
                >
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.6061 5.14844C33.5163 5.14844 34.3893 5.51004 35.033 6.15371C35.6767 6.79737 36.0383 7.67036 36.0383 8.58064V32.6061C36.0383 33.5163 35.6767 34.3893 35.033 35.033C34.3893 35.6767 33.5163 36.0383 32.6061 36.0383H8.58064C7.67036 36.0383 6.79737 35.6767 6.15371 35.033C5.51004 34.3893 5.14844 33.5163 5.14844 32.6061V8.58064C5.14844 7.67036 5.51004 6.79737 6.15371 6.15371C6.79737 5.51004 7.67036 5.14844 8.58064 5.14844H32.6061ZM31.748 31.748V22.6527C31.748 21.1689 31.1586 19.7459 30.1094 18.6968C29.0603 17.6476 27.6373 17.0582 26.1535 17.0582C24.6948 17.0582 22.9959 17.9506 22.1722 19.2891V17.3842H17.3842V31.748H22.1722V23.2876C22.1722 21.9662 23.2361 20.8851 24.5575 20.8851C25.1947 20.8851 25.8058 21.1382 26.2564 21.5888C26.707 22.0393 26.9601 22.6504 26.9601 23.2876V31.748H31.748ZM11.8069 14.69C12.5715 14.69 13.3049 14.3862 13.8455 13.8455C14.3862 13.3049 14.69 12.5715 14.69 11.8069C14.69 10.2109 13.4029 8.9067 11.8069 8.9067C11.0377 8.9067 10.3 9.21226 9.75615 9.75615C9.21226 10.3 8.9067 11.0377 8.9067 11.8069C8.9067 13.4029 10.2109 14.69 11.8069 14.69ZM14.1923 31.748V17.3842H9.43869V31.748H14.1923Z"
                      fill="#0b0b0b"
                    />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:support@dotweb.com"
                  className="w-[30.51px] h-[30.51px] relative flex items-center justify-center"
                >
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_299_789)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.1506 0.553193C26.782 0.323094 27.4661 0.278028 28.1223 0.423293C28.7785 0.568557 29.3795 0.898115 29.8549 1.37323C30.3302 1.84835 30.6601 2.44929 30.8057 3.10541C30.9513 3.76154 30.9065 4.44559 30.6767 5.07716L22.8883 28.4205C22.6989 28.9941 22.3653 29.5095 21.9197 29.9174C21.4741 30.3253 20.9312 30.612 20.3431 30.75C19.7563 30.8927 19.1426 30.8806 18.5619 30.7148C17.9813 30.549 17.4537 30.2353 17.0307 29.8043L12.8511 25.6442L8.4622 27.9149C8.29396 28.0022 8.10587 28.044 7.91652 28.0364C7.72716 28.0287 7.54308 27.9718 7.38245 27.8712C7.22181 27.7706 7.09019 27.6299 7.00056 27.4629C6.91094 27.296 6.86642 27.1085 6.8714 26.9191L7.05227 19.9806L22.4046 8.82971C22.5494 8.72454 22.672 8.59188 22.7656 8.4393C22.8591 8.28672 22.9217 8.11722 22.9497 7.94046C22.9777 7.7637 22.9707 7.58315 22.9289 7.40913C22.8872 7.2351 22.8116 7.071 22.7064 6.92619C22.6012 6.78139 22.4686 6.65872 22.316 6.56518C22.1634 6.47165 21.9939 6.40908 21.8171 6.38106C21.6404 6.35303 21.4598 6.36009 21.2858 6.40184C21.1118 6.44359 20.9477 6.51921 20.8029 6.62438L5.19125 17.9648L1.42127 14.1948C1.01497 13.7884 0.715427 13.2879 0.549284 12.7378C0.383141 12.1876 0.355553 11.6049 0.468975 11.0416C0.583015 10.4257 0.85888 9.85117 1.26826 9.37707C1.67764 8.90297 2.20579 8.54633 2.79851 8.34375H2.80505L26.1484 0.551014L26.1506 0.553193Z"
                        fill="#0b0b0b"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_299_789">
                        <rect
                          width="30.5085"
                          height="30.5085"
                          fill="white"
                          transform="translate(0.390625 0.339844)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/436501234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[35.08px] h-[35.08px] relative flex items-center justify-center"
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4605 2.97266C26.5343 2.97266 33.0791 9.51742 33.0791 17.5913C33.0791 25.6652 26.5343 32.2099 18.4605 32.2099C15.877 32.2144 13.3389 31.5307 11.1073 30.2291L3.84767 32.2099L5.82411 24.9474C4.52153 22.715 3.83729 20.1759 3.84182 17.5913C3.84182 9.51742 10.3866 2.97266 18.4605 2.97266ZM13.4784 10.7205L13.1861 10.7322C12.997 10.7453 12.8123 10.7949 12.6422 10.8784C12.4837 10.9683 12.339 11.0806 12.2125 11.2117C12.037 11.3769 11.9376 11.5202 11.8309 11.6591C11.2902 12.3621 10.9991 13.2252 11.0035 14.1121C11.0064 14.8284 11.1935 15.5257 11.4859 16.1777C12.0838 17.4963 13.0676 18.8924 14.3658 20.1861C14.6786 20.4975 14.9856 20.8103 15.316 21.1012C16.9291 22.5213 18.8512 23.5454 20.9296 24.0922L21.7599 24.2194C22.0303 24.234 22.3008 24.2135 22.5727 24.2004C22.9984 24.1779 23.414 24.0627 23.7904 23.8627C23.9817 23.7638 24.1685 23.6565 24.3503 23.5411C24.3503 23.5411 24.4122 23.4992 24.533 23.4095C24.7304 23.2633 24.8517 23.1595 25.0155 22.9885C25.1383 22.8618 25.2406 22.7146 25.3225 22.547C25.4365 22.3087 25.5505 21.8541 25.5973 21.4755C25.6324 21.186 25.6221 21.0281 25.6178 20.9302C25.6119 20.7738 25.4818 20.6115 25.34 20.5428L24.4892 20.1613C24.4892 20.1613 23.2174 19.6072 22.4397 19.2534C22.3582 19.218 22.2711 19.1977 22.1824 19.1935C22.0823 19.183 21.9812 19.1942 21.8859 19.2262C21.7905 19.2583 21.7032 19.3104 21.6298 19.3792C21.6225 19.3762 21.5245 19.4596 20.4676 20.7402C20.4069 20.8217 20.3234 20.8833 20.2276 20.9171C20.1318 20.951 20.028 20.9555 19.9296 20.9302C19.8344 20.9048 19.741 20.8726 19.6504 20.8337C19.4691 20.7577 19.4063 20.7285 19.282 20.6758C18.4427 20.3102 17.6659 19.8155 16.9796 19.2096C16.7954 19.0488 16.6244 18.8734 16.4489 18.7038C15.8739 18.153 15.3726 17.5299 14.9578 16.8501L14.8716 16.7113C14.8106 16.6174 14.7605 16.5168 14.7225 16.4116C14.6669 16.1967 14.8116 16.0242 14.8116 16.0242C14.8116 16.0242 15.1669 15.6353 15.3321 15.4248C15.4929 15.2202 15.6288 15.0213 15.7165 14.8795C15.889 14.6018 15.9431 14.3167 15.8525 14.096C15.4432 13.0961 15.0202 12.1015 14.5836 11.1123C14.4973 10.9164 14.2415 10.7761 14.0091 10.7483C13.9301 10.7386 13.8512 10.7308 13.7723 10.7249C13.576 10.7137 13.3792 10.7156 13.1831 10.7308L13.4784 10.7205Z"
                      fill="#0b0b0b"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
