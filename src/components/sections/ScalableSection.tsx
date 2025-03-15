"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'antd';

export default function ScalableSection() {
  return (
    <section className="bg-[#F6F2EF] relative overflow-hidden min-h-[671px] py-16 lg:h-[671px] lg:py-0">
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content - Text Section */}
            <div className="w-full lg:w-1/2 lg:mr-auto lg:max-w-[480px] mb-8 lg:mb-0 order-1">
              <div 
                className="w-[216px] h-[35px] bg-[#EDE9E6] rounded-[12.54px] mb-8 flex items-center justify-center"
              >
                <span className="uppercase text-sm font-bold tracking-wider text-[#2A2A2A]">
                  SCALABLE DESIGN
                </span>
              </div>
              <h2 className="font-nunito text-[32px] lg:text-[41.2px] font-bold leading-tight lg:leading-[41.2px] tracking-[-2.17px] text-[#2A2A2A] mb-6">
                Platforms Designed for Scalable Business Growth
              </h2>
              <p className="font-lato text-[16px] lg:text-[19.51px] leading-relaxed lg:leading-[29.27px] text-[#2A2A2A] mb-8">
                A custom-designed platform built for IMMOIQ ensures long-term scalability and efficiency. The solution is intuitive, future-ready, and reflects a professional, modern brand image tailored for the real estate industry.
              </p>
              <Link 
                href="#"
                className="group inline-flex items-center bg-[#0B0B0B] text-white px-6 lg:px-[40.89px] py-4 lg:py-[20.44px] rounded-[13.01px] hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="text-[16px] lg:text-[19.51px]">Find Out About Scalable Tools</span>
                <svg 
                  className="ml-4 lg:ml-6 w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Right Content - Window Frame */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2">
              <div className="relative w-full max-w-[680px] mx-auto lg:mx-0">
                {/* Background layers */}
                <div className="absolute -right-4 lg:-right-8 -top-3 lg:-top-5 -bottom-3 lg:bottom-0 w-[calc(100%+32px)] lg:w-[calc(100%+64px)] bg-[#e2ddd8] rounded-xl" />
                <div className="absolute -right-2 lg:-right-4 top-6 lg:top-12 -bottom-1 lg:-bottom-3 w-[calc(100%+16px)] lg:w-[calc(100%+32px)] bg-[#f5f1ee] rounded-xl" />
                
                {/* Card container */}
                <div className="relative">
                  <Card
                    className="overflow-hidden w-full [&_.ant-card-head-wrapper]:after:hidden !border-0 [&_.ant-card]:border-0 [&_.ant-card-head]:border-b-0 shadow-none"
                    bodyStyle={{ 
                      padding: 0,
                      background: '#1E1E1E',
                      height: '500px',
                      border: 'none',
                    }}
                    headStyle={{
                      background: '#2A2A2A',
                      border: 'none',
                      borderBottom: 0,
                      padding: '12px 16px',
                      minHeight: 'auto',
                      marginBottom: 0,
                    }}
                    title={
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#f7f7f8]" />
                        <div className="w-3 h-3 rounded-full bg-[#565b5d]" />
                        <div className="w-3 h-3 rounded-full bg-[#565b5d]" />
                      </div>
                    }
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/widget-screenshot3.png"
                        alt="Scalable Platform Interface"
                        fill
                        className="object-cover object-right"
                        priority
                      />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

