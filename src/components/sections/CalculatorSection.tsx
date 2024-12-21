"use client";

import { useState, useEffect } from 'react';
import { Card, Input, Slider, Button, Typography } from 'antd';
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

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
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
  };

  return (
    <section className="w-full bg-[#0B0B0B] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8">
          {/* Left Column - Calculator Inputs */}
          <div className="w-[837.85px] h-[616.84px] bg-white rounded-[12.65px] border border-[#DDDCE0] p-8">
            <h2 className="text-center mb-8 px-8 font-nunito text-[25.3px] font-bold leading-[27.83px] tracking-[-0.02em]">
              Estimate Your Savings with Smart Automation
            </h2>
            
            <p className="text-center mb-8 font-nunito-sans text-[14.76px] leading-[22.14px]">
              Discover how much time and money your team can save by automating repetitive tasks
              and focusing on what matters most.
            </p>

            {/* Details Section */}
            <div className="w-[785.95px] h-[279.98px] pt-[25.95px] border border-[#DDDCE0] rounded-[12.65px] bg-white">
              <h3 className="mb-[25.95px] px-[25.95px] font-nunito text-[19.46px] font-medium leading-[26.54px] text-left">
                Enter Your Details to Calculate Savings
              </h3>

              <div className="w-[734.06px] h-[74.6px] mx-auto gap-[12.97px] grid grid-cols-2">
                <div>
                  <label className="block mb-2 w-[361.08px] h-[28px] font-inter text-[15.14px] leading-[27.55px]">
                    Average Hourly Wage
                  </label>
                  <Input
                    type="number"
                    placeholder="Hourly wage in USD"
                    value={inputs.hourlyWage}
                    onChange={(e) => handleInputChange('hourlyWage', e.target.value)}
                    className="w-[361.08px] h-[47.57px] px-[12.97px] py-[15.14px] rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px] leading-[17.3px]"
                  />
                </div>

                <div>
                  <label className="block mb-2 w-[361.08px] h-[28px] font-inter text-[15.14px] leading-[27.55px]">
                    Hours Spent on Task Handling
                  </label>
                  <Input
                    type="number"
                    placeholder="Monthly hours"
                    value={inputs.taskHours}
                    onChange={(e) => handleInputChange('taskHours', e.target.value)}
                    className="w-[361.08px] h-[47.57px] px-[12.97px] py-[15.14px] rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px] leading-[17.3px]"
                  />
                </div>

                <div>
                  <label className="block mb-2 w-[361.08px] h-[28px] font-inter text-[15.14px] leading-[27.55px]">
                    Monthly Employee Costs
                  </label>
                  <Input
                    type="number"
                    placeholder="Total costs in USD"
                    value={inputs.employeeCosts}
                    onChange={(e) => handleInputChange('employeeCosts', e.target.value)}
                    className="w-[361.08px] h-[47.57px] px-[12.97px] py-[15.14px] rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px] leading-[17.3px]"
                  />
                </div>

                <div>
                  <label className="block mb-2 w-[361.08px] h-[28px] font-inter text-[15.14px] leading-[27.55px]">
                    Current or Planned Task Volume
                  </label>
                  <Input
                    type="number"
                    placeholder="Task volume per employee"
                    value={inputs.taskVolume}
                    onChange={(e) => handleInputChange('taskVolume', e.target.value)}
                    className="w-[361.08px] h-[47.57px] px-[12.97px] py-[15.14px] rounded-[12.65px] border border-[#DDDCE0] font-nunito-sans text-[14px] leading-[17.3px]"
                  />
                </div>
              </div>
            </div>

            {/* Employees Section */}
            <div className="w-[785.95px] border border-[#DDDCE0] rounded-[12.65px] mt-4 bg-white py-3">
              <div className="w-[734.06px] mx-auto">
                <label className="block mb-2 font-nunito text-[15.14px] font-semibold leading-[27.55px]">
                  Number of Employees
                </label>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-[604.33px]">
                    <Slider
                      min={1}
                      max={100}
                      value={inputs.numEmployees}
                      onChange={handleSliderChange}
                      className="[&_.ant-slider-track]:!bg-[#0B0B0B] [&_.ant-slider-handle]:border-[#0B0B0B] [&_.ant-slider-handle:hover]:!border-[#0B0B0B]"
                      styles={{
                        rail: {
                          backgroundColor: '#E5E5E5'
                        }
                      }}
                    />
                  </div>
                  <div className="w-[82.16px] h-[50.92px] flex items-center justify-center border border-[#DDDCE0] rounded-[12.65px]">
                    <span className="font-nunito text-[16px] font-semibold leading-[21.62px] tracking-[0.108px]">
                      {inputs.numEmployees}×
                    </span>
                    <Image
                      src="/employee.png"
                      alt="Employee"
                      width={14.76}
                      height={14.76}
                      className="ml-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="w-[422px] h-[617px] bg-white rounded-[12.65px] border border-[#DDDCE0] p-8">
            <h3 className="mb-8 font-nunito text-[25.3px] font-bold leading-[27.83px] tracking-[-0.02em]">
              Your Savings Overview
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                <Text 
                  className="block mb-2 font-lato text-[16px] font-semibold leading-[29.12px] text-center"
                >
                  Time Savings (Hours/Month)
                </Text>
                <Title 
                  level={3}
                  className="text-center font-nunito text-[21.62px] font-semibold leading-[29.49px]"
                >
                  {results.timeSavings}
                </Title>
              </div>

              <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                <Text 
                  className="block mb-2 font-lato text-[16px] font-semibold leading-[29.12px] text-center"
                >
                  Cost Savings (USD/Month)
                </Text>
                <Title 
                  level={3}
                  className="text-center font-nunito text-[21.62px] font-semibold leading-[29.49px]"
                >
                  {results.costSavings}
                </Title>
              </div>

              <div className="bg-gray-50 p-4 rounded-[12.65px] border border-[#DDDCE0]">
                <Text 
                  className="block mb-2 font-lato text-[16px] font-semibold leading-[29.12px] text-center"
                >
                  Annual Savings (USD)
                </Text>
                <Title 
                  level={3}
                  className="text-center font-nunito text-[21.62px] font-semibold leading-[29.49px]"
                >
                  {results.annualSavings}
                </Title>
              </div>

              <Button
                type="primary"
                className="w-full h-[61px] mt-4 rounded-[12.65px] border border-[#DDDCE0] bg-[#016EC6]"
              >
                Let Us Design Your Solution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
