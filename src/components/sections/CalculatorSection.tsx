"use client";

import { useState, useEffect, useCallback } from 'react';
import { Input, Slider, Button, Typography } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

export default function CalculatorSection() {
  const [inputs, setInputs] = useState({
    hourlyWage: "",
    taskHours: "",
    employeeCosts: "",
    taskVolume: "",
    numEmployees: 3
  });

  const [results, setResults] = useState({
    timeSavings: "120 Hours",
    costSavings: "$15,000",
    annualSavings: "$180,000"
  });

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (value: number) => {
    setInputs(prev => ({ ...prev, numEmployees: value }));
  };

  const calculateResults = useCallback(() => {
    const { hourlyWage, taskHours, numEmployees } = inputs;

    if (hourlyWage && taskHours) {
      const timeSavings = parseFloat(taskHours) * parseInt(numEmployees.toString());
      const costSavings = timeSavings * parseFloat(hourlyWage);
      const annualSavings = costSavings * 12;

      setResults({
        timeSavings: `${Math.round(timeSavings)} Hours`,
        costSavings: `$${Math.round(costSavings).toLocaleString()}`,
        annualSavings: `$${Math.round(annualSavings).toLocaleString()}`
      });
    }
  }, [inputs]);

  useEffect(() => {
    calculateResults();
  }, [calculateResults]);

  return (
    <section className="w-full bg-[#0B0B0B] py-16">
      <div className="container mx-auto px-4 max-w-[1400px]">
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
                    placeholder="Hourly wage in USD"
                    value={inputs.hourlyWage}
                    onChange={(e) => handleInputChange('hourlyWage', e.target.value)}
                    className="w-full h-[48px] px-4 rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-inter text-[14px] text-gray-700">
                    Hours Spent on Task Handling
                  </label>
                  <Input
                    type="number"
                    placeholder="Monthly hours"
                    value={inputs.taskHours}
                    onChange={(e) => handleInputChange('taskHours', e.target.value)}
                    className="w-full h-[48px] px-4 rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-inter text-[14px] text-gray-700">
                    Monthly Employee Costs
                  </label>
                  <Input
                    type="number"
                    placeholder="Total costs in USD"
                    value={inputs.employeeCosts}
                    onChange={(e) => handleInputChange('employeeCosts', e.target.value)}
                    className="w-full h-[48px] px-4 rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-inter text-[14px] text-gray-700">
                    Current or Planned Task Volume
                  </label>
                  <Input
                    type="number"
                    placeholder="Task volume per employee"
                    value={inputs.taskVolume}
                    onChange={(e) => handleInputChange('taskVolume', e.target.value)}
                    className="w-full h-[48px] px-4 rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px]"
                  />
                </div>
              </div>
            </div>

            {/* Employees Section */}
            <div className="border border-[#DDDCE0] rounded-[12.65px] bg-white p-6">
              <div className="space-y-4">
                <label className="block font-nunito text-[16px] font-semibold text-gray-800">
                  Number of Employees
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <Slider
                      min={1}
                      max={100}
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
                      src="/employee.png"
                      alt="Employee"
                      width={20}
                      height={20}
                      className="inline-block"
                    />
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
              <Button 
                type="primary"
                className="w-full h-[54px] rounded-[12.65px] bg-[#016EC6] hover:bg-[#016EC6]/90 flex items-center justify-center shadow-none border-none"
              >
                <span className="font-nunito text-[16px] font-bold text-white">
                  Let Us Design Your Solution
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
