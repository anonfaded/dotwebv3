"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FC } from 'react';
import { CSSProperties } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const DUMMY_RESPONSES = [
  "That's an excellent question! Automation can significantly reduce operational costs by streamlining repetitive tasks.",
  "AI-powered solutions can help optimize your workflow, potentially reducing team size while maintaining or even improving productivity.",
  "At DOTWEB, we offer comprehensive automation tools tailored to your specific business needs and challenges.",
  "Our solutions are designed with reliability and performance in mind, ensuring consistent and dependable results for your business."
];

export default function ChatBox() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isInitialView, setIsInitialView] = useState(true);
  const [selectedPrePrompt, setSelectedPrePrompt] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      // Always scroll to the bottom when messages change
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current && !isInitialView) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [isInitialView]);

  const handlePrePromptClick = (prompt: string) => {
    setSelectedPrePrompt(prompt);
    setInputText(prompt);
  };

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user'
    };

    // Update messages state
    setMessages(prevMessages => [...prevMessages, newUserMessage]);

    // Simulate bot response
    const randomResponse = DUMMY_RESPONSES[Math.floor(Math.random() * DUMMY_RESPONSES.length)];
    const botMessage: Message = {
      id: Date.now() + 1,
      text: randomResponse,
      sender: 'bot'
    };

    // Add bot response after a short delay
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, botMessage]);
      
      // Ensure initial view is set to false
      if (isInitialView) {
        setIsInitialView(false);
      }
    }, 500);

    // Reset input and pre-prompt
    setInputText('');
    setSelectedPrePrompt(null);
  };

  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg relative min-w-[320px] h-[868px]">
      {/* Content */}
      <div className="h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-center px-[clamp(20px,3vw,24px)] sm:px-[clamp(20px,3vw,26px)] lg:px-[clamp(24px,3.2vw,28px)] py-[clamp(18px,2.5vw,20px)] lg:py-[clamp(20px,2.5vw,22px)] bg-[#0B0B0B] rounded-t-lg">
          <div className="space-y-2 px-[clamp(5px,1vw,10px)] py-[clamp(3px,0.5vw,6px)] ">
            <h3 className="font-nunito text-[clamp(14px,2vw,21.38px)] font-bold leading-tight text-white">
              Ask About Smarter Automation Solutions 
            </h3>
            <p className="font-lato text-[clamp(12px,1.8vw,17.81px)] font-normal leading-relaxed text-[#E8E8E8]">
              Instant insights on workflows, cost savings, and efficiency.
            </p>
          </div>
          <Image
            src="/help.png"
            alt="Help"
            width={29}
            height={48.39}
            priority
            unoptimized
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-[clamp(6px,1.5vw,10px)] sm:px-[clamp(6px,1.5vw,12px)] lg:px-[clamp(8px,2vw,14px)] bg-white rounded-b-lg flex flex-col h-full overflow-hidden">
          {/* Chat Messages */}
          <div 
            ref={chatContainerRef}
            className="flex-grow overflow-y-auto scroll-smooth"
            style={{ 
              height: 'calc(100% - 90px)', 
              maxHeight: 'calc(100% - 90px)'
            }}
          >
            {isInitialView ? (
              <div className="flex flex-col items-center justify-center h-full overflow-hidden">
                <div className="w-[clamp(35px,3.8vw,45.42px)] h-[clamp(35px,3.8vw,45.42px)] mb-6 lg:mb-8">
                  <Image
                    src="/brain.png"
                    alt="Brain"
                    width={45.42}
                    height={45.42}
                    priority
                    unoptimized
                  />
                </div>
                <p className="font-nunito text-[clamp(14px,2.4vw,23.16px)] font-bold leading-relaxed text-[#2A2A2A] text-center max-w-[600px] mb-[clamp(16px,3.2vw,24px)]">
                  What do you want to know about automation today?
                </p>

                {/* Pre-prompt Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2 mb-[clamp(8px,1.4vw,10px)] lg:mb-[clamp(10px,1.8vw,12px)] w-full max-w-[1008px] mx-auto overflow-hidden">
                  {[
                    {
                      title: "How can automation save us money?",
                      description: "Discover how to cut costs and improve efficiency."
                    },
                    {
                      title: "Can I reduce my team size with AI?",
                      description: "Achieve more with fewer resources."
                    },
                    {
                      title: "What services does DOTWEB offer?",
                      description: "Explore tailored solutions for your business."
                    },
                    {
                      title: "How reliable are your solutions?",
                      description: "Learn about performance and dependability."
                    }
                  ].map((prompt, index) => (
                    <div 
                      key={index} 
                      className={`bg-white border border-[#D9D9D9] rounded-[10.01px] p-[clamp(4px,0.8vw,8px)] h-[clamp(65px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex flex-col justify-center group ${selectedPrePrompt === prompt.title ? 'bg-gray-200' : ''}`}
                      onClick={() => handlePrePromptClick(prompt.title)}
                    >
                      <h4 className="font-nunito-sans text-[clamp(12px,1.2vw,16.02px)] font-bold leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-0.5 pt-3 pl-2">
                        {prompt.title}
                      </h4>
                      <p className="font-lato text-[clamp(10px,1.0vw,14.02px)] font-normal leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-0.5 pl-2">
                        {prompt.description}
                      </p>
                      <Image
                        src="/send.png"
                        alt="Send"
                        width={39.05}
                        height={39.05}
                        priority
                        unoptimized
                        className={`absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-300 
                          ${selectedPrePrompt === prompt.title ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          sendMessage();
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full overflow-hidden">
                <div className="space-y-2 py-4 px-4 h-full max-h-full overflow-y-auto">
                  {messages.map((message, index) => (
                    <div 
                      key={message.id} 
                      ref={index === messages.length - 1 ? (el) => {
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                      } : null}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`
                          max-w-[70%] p-2 rounded-lg 
                          ${message.sender === 'user' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-black'}
                        `}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <div className="relative mb-[clamp(6px,1.2vw,8px)] lg:mb-[clamp(6px,1.2vw,10px)]">
            <div className="flex items-center border border-[#E5E5E5] rounded-[8.91px] h-[clamp(40px,3.2vw,48px)] mx-auto w-full max-w-[1008px] bg-white">
              <input
                type="text"
                placeholder="Ask anything about automation here..."
                className="flex-1 px-4 lg:px-6 font-nunito text-[clamp(10px,1.1vw,15.14px)] font-normal leading-normal placeholder-gray-400 focus:outline-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <div className="flex items-center gap-2 pr-4">
                {inputText.trim() === '' ? (
                  <Image
                    src="/send3.png"
                    alt="Send Alternative"
                    width={32.06}
                    height={32.06}
                    priority
                    unoptimized
                    className="cursor-pointer"
                  />
                ) : (
                  <Image
                    src="/send2.png"
                    alt="Send"
                    width={32.06}
                    height={32.06}
                    priority
                    unoptimized
                    className="cursor-pointer"
                    onClick={sendMessage}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Powered By Logo */}
          <div className="flex justify-center mt-[clamp(10px,2vw,16px)] pb-[clamp(10px,2vw,14px)]">
            <Image
              src="/poweredby.png"
              alt="Powered by Dotweb"
              width={173.33}
              height={24.42}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}