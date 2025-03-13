"use client";

import { useState, useEffect, useCallback } from 'react';
import { Input, Slider, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const { Title, Text } = Typography;

export default function CalculatorSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  
  const [inputs, setInputs] = useState({
    hourlyWage: "",
    taskHours: "",
    employeeCosts: "",
    taskVolume: "",
    numEmployees: 3,
    automationPercentage: 50
  });

  const [results, setResults] = useState({
    timeSavings: "120 Hours",
    costSavings: "$15,000",
    annualSavings: "$180,000"
  });

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (name: string, value: string) => {
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, '');
    setInputs(prev => ({ ...prev, [name]: numericValue }));
  };

  const handleSliderChange = (value: number) => {
    setInputs(prev => ({ ...prev, numEmployees: value }));
  };

  const calculateResults = useCallback(() => {
    const { hourlyWage, taskHours, numEmployees, automationPercentage } = inputs;

    if (hourlyWage && taskHours) {
      // Calculate daily time savings based on automation percentage
      const dailyTimeSavings = (parseFloat(taskHours) * parseFloat(automationPercentage) / 100) * parseInt(numEmployees.toString());
      
      // Calculate monthly time savings (assuming 22 working days)
      const monthlyTimeSavings = dailyTimeSavings * 22;
      
      // Calculate monthly cost savings
      const monthlyCostSavings = monthlyTimeSavings * parseFloat(hourlyWage);
      
      // Calculate annual savings
      const annualSavings = monthlyCostSavings * 12;

      setResults({
        timeSavings: `${Math.round(monthlyTimeSavings)} Hours`,
        costSavings: `$${Math.round(monthlyCostSavings).toLocaleString()}`,
        annualSavings: `$${Math.round(annualSavings).toLocaleString()}`
      });
    }
  }, [inputs]);

  useEffect(() => {
    calculateResults();
  }, [calculateResults]);

  // Mobile step content
  const renderMobileStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="font-nunito text-xl font-bold">Step 1: Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-inter text-[14px] text-gray-700">
                  Average Hourly Wage
                </label>
                <Input
                  type="number"
                  min={0}
                  step={1}
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && 
                        e.key !== 'Backspace' && 
                        e.key !== 'Delete' && 
                        e.key !== 'ArrowLeft' && 
                        e.key !== 'ArrowRight' && 
                        e.key !== 'Tab') {
                      e.preventDefault();
                    }
                  }}
                  value={inputs.hourlyWage}
                  onChange={(e) => handleInputChange('hourlyWage', e.target.value)}
                  className="w-full h-[48px] px-4 rounded-[12.65px]"
                />
              </div>
              <div>
                <label className="block mb-2 font-inter text-[14px] text-gray-700">
                  Number of Employees
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Slider
                      min={1}
                      max={15}
                      value={inputs.numEmployees}
                      onChange={handleSliderChange}
                      trackStyle={{ backgroundColor: '#0B0B0B' }}
                      railStyle={{ backgroundColor: '#E5E5E5' }}
                      handleStyle={{ 
                        borderColor: '#0B0B0B', 
                        backgroundColor: '#0B0B0B' 
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#F4F4F5] rounded-full">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/employee.svg"
                        alt="Employees"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="font-nunito text-[16px] font-semibold min-w-[24px]">
                    {inputs.numEmployees}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setCurrentStep(2)}
              className="w-full bg-[#0B0B0B] text-white py-4 rounded-[13.01px]"
            >
              Next Step
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="font-nunito text-xl font-bold">Step 2: Task Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-inter text-[14px] text-gray-700">
                  Daily Hours on Tasks
                </label>
                <Input
                  type="number"
                  min={0}
                  step={1}
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && 
                        e.key !== 'Backspace' && 
                        e.key !== 'Delete' && 
                        e.key !== 'ArrowLeft' && 
                        e.key !== 'ArrowRight' && 
                        e.key !== 'Tab') {
                      e.preventDefault();
                    }
                  }}
                  value={inputs.taskHours}
                  onChange={(e) => handleInputChange('taskHours', e.target.value)}
                  className="w-full h-[48px] px-4 rounded-[12.65px]"
                />
              </div>
              <div>
                <label className="block mb-2 font-inter text-[14px] text-gray-700">
                  Automation Percentage
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Slider
                      min={0}
                      max={100}
                      value={inputs.automationPercentage}
                      onChange={(value) => handleInputChange('automationPercentage', value.toString())}
                      trackStyle={{ backgroundColor: '#0B0B0B' }}
                      railStyle={{ backgroundColor: '#E5E5E5' }}
                      handleStyle={{ 
                        borderColor: '#0B0B0B', 
                        backgroundColor: '#0B0B0B' 
                      }}
                    />
                  </div>
                  <div className="w-[90px] h-[50px] flex items-center justify-center border border-[#DDDCE0] rounded-[12.65px]">
                    <span className="font-nunito text-[16px] font-semibold">
                      {inputs.automationPercentage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCurrentStep(1)}
                className="w-1/2 bg-gray-200 text-black py-4 rounded-[13.01px]"
              >
                Back
              </button>
              <button 
                onClick={() => setCurrentStep(3)}
                className="w-1/2 bg-[#0B0B0B] text-white py-4 rounded-[13.01px]"
              >
                See Results
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="font-nunito text-xl font-bold">Your Savings Overview</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                <Text className="block mb-2 font-lato text-[14px] font-semibold text-center text-gray-700">
                  Time Savings (Hours/Month)
                </Text>
                <Title 
                  level={3}
                  className="text-center font-nunito text-[20px] font-semibold text-[#2A2A2A]"
                >
                  {results.timeSavings}
                </Title>
              </div>

              <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                <Text className="block mb-2 font-lato text-[14px] font-semibold text-center text-gray-700">
                  Cost Savings (Monthly)
                </Text>
                <Title 
                  level={3}
                  className="text-center font-nunito text-[20px] font-semibold text-[#2A2A2A]"
                >
                  {results.costSavings}
                </Title>
              </div>

              <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                <Text className="block mb-2 font-lato text-[14px] font-semibold text-center text-gray-700">
                  Annual Cost Savings
                </Text>
                <Title 
                  level={3}
                  className="text-center font-nunito text-[20px] font-semibold text-[#2A2A2A]"
                >
                  {results.annualSavings}
                </Title>
              </div>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCurrentStep(2)}
                className="w-1/3 bg-gray-200 text-black py-4 rounded-[13.01px]"
              >
                Back
              </button>
              <Link 
                href="#"
                className="group w-2/3 bg-[#0B0B0B] text-white px-4 py-4 rounded-[13.01px] hover:opacity-90 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center whitespace-nowrap"
              >
                <span className="font-nunito text-[14px] sm:text-[15px] font-bold text-white">
                  <span className="block sm:hidden">Get Started</span>
                  <span className="hidden sm:block text-[14px] md:text-[16px]">Let Us Design Your Solution</span>
                </span>
                <svg 
                  className="ml-4 w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                  viewBox="0 0 16 16" 
                  fill="none"
                >
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        );
    }
  };

  // Return different layouts for mobile and desktop
  return (
    <section className="w-full bg-[#0B0B0B] py-24">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {isMobile ? (
          // Mobile step-by-step layout
          <div className="bg-white rounded-[12.65px] p-6">
            {renderMobileStep()}
          </div>
        ) : (
          // Your existing desktop layout
          <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
            {/* Left Column - Calculator Inputs */}
            <div className="w-full md:w-[837.85px] bg-white rounded-[12.65px] border border-[#DDDCE0] p-6 md:p-8 space-y-6">
              <div className="text-center">
                <h2 className="mb-4 font-nunito text-[22px] md:text-[25.3px] font-bold leading-tight tracking-[-0.02em]">
                  Estimate Your Savings with Smart Automation
                </h2>
                
                <p className="mb-6 font-nunito-sans text-[14px] md:text-[14.76px] text-gray-600 leading-relaxed">
                  Discover how much time and money your team can save by automating repetitive tasks
                  and focusing on what matters most.
                </p>
              </div>

              {/* Details Section */}
              <div className="border border-[#DDDCE0] rounded-[12.65px] bg-white p-6 space-y-6">
                <h3 className="font-nunito text-[18px] md:text-[19.46px] font-medium text-left">
                  Enter Your Details to Calculate Savings
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-inter text-[14px] text-gray-700">
                      Average Hourly Wage
                    </label>
                    <Input
                      type="number"
                      min={0}
                      step={1}
                      onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && 
                            e.key !== 'Backspace' && 
                            e.key !== 'Delete' && 
                            e.key !== 'ArrowLeft' && 
                            e.key !== 'ArrowRight' && 
                            e.key !== 'Tab') {
                          e.preventDefault();
                        }
                      }}
                      placeholder="Hourly wage in USD"
                      value={inputs.hourlyWage}
                      onChange={(e) => handleInputChange('hourlyWage', e.target.value)}
                      className="w-full h-[48px] px-4 rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-inter text-[14px] text-gray-700">
                      Hours Spent on Task Handling (Daily)
                    </label>
                    <Input
                      type="number"
                      min={0}
                      step={1}
                      onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && 
                            e.key !== 'Backspace' && 
                            e.key !== 'Delete' && 
                            e.key !== 'ArrowLeft' && 
                            e.key !== 'ArrowRight' && 
                            e.key !== 'Tab') {
                          e.preventDefault();
                        }
                      }}
                      placeholder="Daily hours"
                      value={inputs.taskHours}
                      onChange={(e) => handleInputChange('taskHours', e.target.value)}
                      className="w-full h-[48px] px-4 rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px]"
                    />
                  </div>
                </div>
              </div>

              {/* Employees and Automation Section */}
              <div className="border border-[#DDDCE0] rounded-[12.65px] bg-white p-6 space-y-6">
                <div className="space-y-4">
                  <label className="block font-nunito text-[16px] font-semibold text-gray-800">
                    Number of Employees
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex-grow">
                      <Slider
                        min={1}
                        max={15}
                        value={inputs.numEmployees}
                        onChange={handleSliderChange}
                        trackStyle={{ backgroundColor: '#0B0B0B' }}
                        railStyle={{ backgroundColor: '#E5E5E5' }}
                        handleStyle={{ 
                          borderColor: '#0B0B0B', 
                          backgroundColor: '#0B0B0B' 
                        }}
                      />
                    </div>
                    <div className="w-[90px] h-[50px] flex items-center justify-center border border-[#DDDCE0] rounded-[12.65px] px-2">
                      <span className="font-nunito text-[16px] font-semibold mr-2">
                        {inputs.numEmployees}×
                      </span>
                      <Image
                        src="/employee.svg"
                        alt="Employee"
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block font-nunito text-[16px] font-semibold text-gray-800">
                    Automation Percentage
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex-grow">
                      <Slider
                        min={0}
                        max={100}
                        value={inputs.automationPercentage}
                        onChange={(value) => handleInputChange('automationPercentage', value.toString())}
                        trackStyle={{ backgroundColor: '#0B0B0B' }}
                        railStyle={{ backgroundColor: '#E5E5E5' }}
                        handleStyle={{ 
                          borderColor: '#0B0B0B', 
                          backgroundColor: '#0B0B0B' 
                        }}
                      />
                    </div>
                    <div className="w-[90px] h-[50px] flex items-center justify-center border border-[#DDDCE0] rounded-[12.65px]">
                      <span className="font-nunito text-[16px] font-semibold">
                        {inputs.automationPercentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="w-full md:w-[422px] bg-white rounded-[12.65px] border border-[#DDDCE0] p-6 md:p-8 flex flex-col">
              <div className="text-center mb-6">
                <h3 className="font-nunito text-[22px] md:text-[25.3px] font-bold leading-tight tracking-[-0.02em]">
                  Your Savings Overview
                </h3>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                  <Text className="block mb-2 font-lato text-[14px] font-semibold text-center text-gray-700">
                    Time Savings (Hours/Month)
                  </Text>
                  <Title 
                    level={3}
                    className="text-center font-nunito text-[20px] font-semibold text-[#2A2A2A]"
                  >
                    {results.timeSavings}
                  </Title>
                </div>

                <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                  <Text className="block mb-2 font-lato text-[14px] font-semibold text-center text-gray-700">
                    Cost Savings (Monthly)
                  </Text>
                  <Title 
                    level={3}
                    className="text-center font-nunito text-[20px] font-semibold text-[#2A2A2A]"
                  >
                    {results.costSavings}
                  </Title>
                </div>

                <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                  <Text className="block mb-2 font-lato text-[14px] font-semibold text-center text-gray-700">
                    Annual Cost Savings
                  </Text>
                  <Title 
                    level={3}
                    className="text-center font-nunito text-[20px] font-semibold text-[#2A2A2A]"
                  >
                    {results.annualSavings}
                  </Title>
                </div>
              </div>

              <div className="mt-6">
              <Link 
                  href="#"
                  className="group bg-[#0B0B0B] text-white px-6 lg:px-[40.89px] py-4 lg:py-[20.44px] rounded-[13.01px] hover:opacity-90 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center shadow-none border-none w-full h-[54px]"
                >
                  <span className="font-nunito text-[15px] md:text-[16px] font-bold text-white whitespace-nowrap">
                    Let Us Design Your Solution
                  </span>
                  <svg 
                    className="ml-6 w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
