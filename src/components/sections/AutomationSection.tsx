"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'antd';

export default function AutomationSection() {
  return (
    <section className="h-[671px] bg-[#F5FAFF] relative overflow-hidden">
      <div className="container mx-auto pl-4 relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:max-w-[480px]">
              <div 
                className="w-[216px] h-[35px] bg-[#d8e9f5] rounded-[12.54px] mb-8 flex items-center justify-center"
              >
                <span className="uppercase text-sm font-bold tracking-wider text-[#016EC6]">
                  WORKFLOW EFFICIENCY
                </span>
              </div>
              <h2 className="font-nunito text-[41.2px] font-bold leading-[41.2px] tracking-[-2.17px] text-[#2A2A2A] mb-6">
                Marketing Automation Made Simple for Teams
              </h2>
              <p className="font-lato text-[19.51px] leading-[29.27px] text-[#2A2A2A] mb-8">
                IMMOIQ's automation tools make it easy to generate exposé PDFs, open house invitations, follow-up emails, and polished client presentations. By eliminating manual tasks, real estate professionals can save time and focus on strengthening client relationships.
              </p>
              <Link 
                href="#"
                className="inline-flex items-center bg-[#016EC6] text-white px-[40.89px] py-[20.44px] rounded-[13.01px] hover:opacity-90 transition-opacity"
              >
                <span className="text-[19.51px]">See How Automation Saves Time</span>
                <svg className="ml-6 w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Right Content - Window Frame with Background Layers */}
            <div className="relative lg:ml-auto translate-x-[270px]">
              <div className="relative">
                {/* Background layers */}
                <div className="absolute -left-8 -top-5 bottom-0 w-[720px] bg-[#016EC6] rounded-xl" />
                <div className="absolute -left-4 top-12 -bottom-3 w-[645px] bg-[#f5faff] rounded-xl" />
                
                {/* Card container with overflow */}
                <div className="relative">
                  <Card
                    className="overflow-hidden w-[680px] [&_.ant-card-head-wrapper]:after:hidden !border-0 [&_.ant-card]:border-0 [&_.ant-card-head]:border-b-0 shadow-none"
                    styles={{ 
                      body: { 
                        padding: 0,
                        background: '#1E1E1E',
                        height: '500px',
                        border: 'none',
                      },
                      header: {
                        background: '#2A2A2A',
                        border: 'none',
                        borderBottom: 0,
                        padding: '12px 16px',
                        minHeight: 'auto',
                        marginBottom: 0,
                      }
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
                        src="/widget-screenshot2.png"
                        alt="Automation Interface"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
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
