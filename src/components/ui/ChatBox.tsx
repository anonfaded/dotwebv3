"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';


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

  // Dummy usage to avoid ESLint warning
  console.log(selectedPrePrompt); // or just use `selectedPrePrompt` in a harmless way

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


    
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1200px] bg-gray-900 rounded-lg shadow-lg relative h-[868px]">

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
                    {/* Card 1 */}
                    <div
                      className="pre-prompt-card block bg-white border border-[#D9D9D9] rounded-[10.01px] p-[clamp(4px,0.8vw,8px)] h-[clamp(65px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex-col justify-center group"
                      onClick={() => handlePrePromptClick("How can automation save us money?")}
                    >
                      <h4 className="font-nunito-sans text-[clamp(12px,1.2vw,16.02px)] font-bold leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-0.5 pt-3 pl-2">
                        How can automation save us money?
                      </h4>
                      <p className="font-lato text-[clamp(10px,1.0vw,14.02px)] font-normal leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-0.5 pl-2">
                        Discover how to cut costs and improve efficiency.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div
                      className="pre-prompt-card block bg-white border border-[#D9D9D9] rounded-[10.01px] p-[clamp(4px,0.8vw,8px)] h-[clamp(65px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex-col justify-center group"
                      onClick={() => handlePrePromptClick("Can I reduce my team size with AI?")}
                    >
                      <h4 className="font-nunito-sans text-[clamp(12px,1.2vw,16.02px)] font-bold leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-0.5 pt-3 pl-2">
                        Can I reduce my team size with AI?
                      </h4>
                      <p className="font-lato text-[clamp(10px,1.0vw,14.02px)] font-normal leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-0.5 pl-2">
                        Achieve more with fewer resources.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div
                      className="pre-prompt-card hidden md:block bg-white border border-[#D9D9D9] rounded-[10.01px] p-[clamp(4px,0.8vw,8px)] h-[clamp(65px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex-col justify-center group"
                      onClick={() => handlePrePromptClick("What services does DOTWEB offer?")}
                    >
                      <h4 className="font-nunito-sans text-[clamp(12px,1.2vw,16.02px)] font-bold leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-0.5 pt-3 pl-2">
                        What services does DOTWEB offer?
                      </h4>
                      <p className="font-lato text-[clamp(10px,1.0vw,14.02px)] font-normal leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-0.5 pl-2">
                        Explore tailored solutions for your business.
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div
                      className="pre-prompt-card hidden md:block bg-white border border-[#D9D9D9] rounded-[10.01px] p-[clamp(4px,0.8vw,8px)] h-[clamp(65px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex-col justify-center group"
                      onClick={() => handlePrePromptClick("How reliable are your solutions?")}
                    >
                      <h4 className="font-nunito-sans text-[clamp(12px,1.2vw,16.02px)] font-bold leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-0.5 pt-3 pl-2">
                        How reliable are your solutions?
                      </h4>
                      <p className="font-lato text-[clamp(10px,1.0vw,14.02px)] font-normal leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-0.5 pl-2">
                        Learn about performance and dependability.
                      </p>
                    </div>
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
    </div>
  );
}