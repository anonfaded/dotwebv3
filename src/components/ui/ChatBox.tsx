"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const DUMMY_RESPONSES = [
  "That's an excellent question! Automation can significantly reduce operational costs by streamlining repetitive tasks.",
  "AI-powered solutions can help optimize your workflow, potentially reducing team size while maintaining or even improving productivity.",
  "At DOTWEB, we offer comprehensive automation tools tailored to your specific business needs and challenges.",
  "Our solutions are designed with reliability and performance in mind, ensuring consistent and dependable results for your business."
];

// FAQ data for help overlay
const FAQ_DATA: FAQItem[] = [
  {
    question: "How do I start a conversation?",
    answer: "Simply type your question in the input field at the bottom of the chat or select one of the suggested questions to begin.",
    isOpen: false
  },
  {
    question: "What kind of questions can I ask?",
    answer: "You can ask about automation solutions, cost savings, team efficiency, DOTWEB services, or any other business automation related questions.",
    isOpen: false
  },
  {
    question: "How accurate are the responses?",
    answer: "Our AI provides helpful information based on common automation questions. For detailed business solutions, we recommend scheduling a consultation with our team.",
    isOpen: false
  },
  {
    question: "Can I save or share my conversation?",
    answer: "Currently, conversations cannot be saved or shared. We recommend taking screenshots if you need to save important information.",
    isOpen: false
  },
  {
    question: "How do I contact a human representative?",
    answer: "To speak with our team directly, please visit our website at dotweb.com or email us at support@dotweb.com.",
    isOpen: false
  }
];

export default function ChatBox() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isInitialView, setIsInitialView] = useState(true);
  const [selectedPrePrompt, setSelectedPrePrompt] = useState<string | null>(null);
  const [showHelpOverlay, setShowHelpOverlay] = useState(false);
  const [faqItems, setFaqItems] = useState<FAQItem[]>(FAQ_DATA);
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

  const toggleFAQ = (index: number) => {
    setFaqItems(prevItems =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false // Close others when opening new one
      }))
    );
  };

  // Close overlay when clicking outside or on close button
  const closeOverlay = () => {
    setShowHelpOverlay(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-0 sm:px-4 -m-6 ">
      {/* Removed padding on mobile to use full width */}
      <div className="w-full sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1200px] bg-gray-900 rounded-lg shadow-lg relative h-[95vh] sm:h-[868px]">
        {/* Increased height to 95vh on mobile */}

        {/* Content */}
        <div className="h-full flex flex-col">
          {/* Header Section - Adjusted padding for mobile */}
          <div className="flex justify-between items-center px-4 sm:px-[clamp(20px,3vw,26px)] lg:px-[clamp(24px,3.2vw,28px)] py-4 lg:py-[clamp(20px,2.5vw,22px)] bg-[#0B0B0B] rounded-t-lg">
            <div className="space-y-1 sm:space-y-2 px-1 sm:px-[clamp(4px,1vw,10px)] py-1 sm:py-[clamp(3px,0.5vw,6px)]">
              <h3 className="font-nunito text-lg sm:text-[clamp(16px,2vw,21.38px)] font-bold leading-tight text-white">
                <span className="sm:hidden">Ask About Automation</span>
                <span className="hidden sm:inline">Ask About Smarter Automation Solutions</span>
              </h3>
              <p className="font-lato text-base sm:text-[clamp(14px,1.8vw,17.81px)] font-normal leading-relaxed text-[#E8E8E8]">
                <span className="sm:hidden">Get insights on efficiency & costs</span>
                <span className="hidden sm:inline">Instant insights on workflows, cost savings, and efficiency.</span>
              </p>
            </div>
            <div
              onClick={() => setShowHelpOverlay(true)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                src="/help.png"
                alt="Help"
                width={29}
                height={48.39}
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Main Content - Adjusted padding for mobile */}
          <div className="flex-1 px-3 sm:px-[clamp(6px,1.5vw,12px)] lg:px-[clamp(8px,2vw,14px)] bg-white rounded-b-lg flex flex-col h-full overflow-hidden">
            {/* Increased padding on mobile */}
            {/* Chat Messages */}
            {/* Gap/Bottom margin below the message and above the input section */}
            <div
              ref={chatContainerRef}
              className="flex-grow overflow-y-auto scroll-smooth mb-4"
              style={{
                height: 'calc(100% - 90px)',
                maxHeight: 'calc(100% - 90px)'
              }}
            >
              {isInitialView ? (
                <div className="flex flex-col items-center justify-center h-full overflow-hidden">
                  <div className="w-12 h-12 sm:w-[clamp(35px,3.8vw,45.42px)] sm:h-[clamp(35px,3.8vw,45.42px)] mb-4 sm:mb-6 lg:mb-8">
                    {/* Increased size for mobile */}
                    <Image
                      src="/brain.png"
                      alt="Brain"
                      width={45.42}
                      height={45.42}
                      priority
                      unoptimized
                    />
                  </div>
                  <p className="font-nunito text-xl sm:text-[clamp(16px,2.4vw,23.16px)] font-bold leading-relaxed text-[#2A2A2A] text-center max-w-[95%] sm:max-w-[600px] mb-6 sm:mb-[clamp(16px,3.2vw,24px)] px-2">
                    {/* Increased text size and max-width for mobile */}
                    What do you want to know about automation today?
                  </p>

                  {/* Pre-prompt Cards - Show only 2 on mobile */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-4 mb-4 sm:mb-[clamp(10px,1.8vw,12px)] w-full max-w-full sm:max-w-[1008px] mx-auto overflow-hidden px-4 sm:px-4">
                    {/* Increased spacing and width for mobile */}

                    {/* Card 1 - Increased height and padding for mobile */}
                    <div
                      className="pre-prompt-card block bg-white border border-[#D9D9D9] rounded-[10.01px] p-4 sm:p-[clamp(4px,0.8vw,8px)] h-auto min-h-[95px] sm:h-[clamp(75px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex-col justify-center group"
                      onClick={() => handlePrePromptClick("How can automation save us money?")}
                    >
                      <h4 className="font-nunito-sans text-base sm:text-[clamp(14px,1.2vw,16.02px)] font-bold leading-normal sm:leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-2 pt-1 sm:pt-3 pl-1 sm:pl-2">
                        {/* Increased font size and margin for mobile */}
                        How can automation save us money?
                      </h4>
                      <p className="font-lato text-sm sm:text-[clamp(12px,1.0vw,14.02px)] font-normal leading-tight sm:leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-1 pl-1 sm:pl-2">
                        {/* Increased font size for mobile */}
                        Discover how to cut costs and improve efficiency.
                      </p>
                    </div>

                    {/* Card 2 - Increased height and padding for mobile */}
                    <div
                      className="pre-prompt-card block bg-white border border-[#D9D9D9] rounded-[10.01px] p-4 sm:p-[clamp(4px,0.8vw,8px)] h-auto min-h-[95px] sm:h-[clamp(75px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex-col justify-center group"
                      onClick={() => handlePrePromptClick("Can I reduce my team size with AI?")}
                    >
                      <h4 className="font-nunito-sans text-base sm:text-[clamp(14px,1.2vw,16.02px)] font-bold leading-normal sm:leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-2 pt-1 sm:pt-3 pl-1 sm:pl-2">
                        {/* Increased font size and margin for mobile */}
                        Can I reduce my team size with AI?
                      </h4>
                      <p className="font-lato text-sm sm:text-[clamp(12px,1.0vw,14.02px)] font-normal leading-tight sm:leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-1 pl-1 sm:pl-2">
                        {/* Increased font size for mobile */}
                        Achieve more with fewer resources.
                      </p>
                    </div>

                    {/* Card 3 - Hidden on mobile, visible on larger screens */}
                    <div
                      className="pre-prompt-card hidden lg:block bg-white border border-[#D9D9D9] rounded-[10.01px] p-4 sm:p-[clamp(4px,0.8vw,8px)] h-auto min-h-[95px] sm:h-[clamp(75px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex-col justify-center group"
                      onClick={() => handlePrePromptClick("What services does DOTWEB offer?")}
                    >
                      <h4 className="font-nunito-sans text-base sm:text-[clamp(14px,1.2vw,16.02px)] font-bold leading-normal sm:leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-2 pt-1 sm:pt-3 pl-1 sm:pl-2">
                        What services does DOTWEB offer?
                      </h4>
                      <p className="font-lato text-sm sm:text-[clamp(12px,1.0vw,14.02px)] font-normal leading-tight sm:leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-1 pl-1 sm:pl-2">
                        Explore tailored solutions for your business.
                      </p>
                    </div>

                    {/* Card 4 - Hidden on mobile, visible on larger screens */}
                    <div
                      className="pre-prompt-card hidden lg:block bg-white border border-[#D9D9D9] rounded-[10.01px] p-4 sm:p-[clamp(4px,0.8vw,8px)] h-auto min-h-[95px] sm:h-[clamp(75px,5.6vw,85px)] w-full relative transition-all duration-300 hover:border-gray-400 hover:shadow-md cursor-pointer flex-col justify-center group"
                      onClick={() => handlePrePromptClick("How reliable are your solutions?")}
                    >
                      <h4 className="font-nunito-sans text-base sm:text-[clamp(14px,1.2vw,16.02px)] font-bold leading-normal sm:leading-[clamp(18px,1.4vw,24.03px)] text-[#0E0E0E] mb-2 pt-1 sm:pt-3 pl-1 sm:pl-2">
                        How reliable are your solutions?
                      </h4>
                      <p className="font-lato text-sm sm:text-[clamp(12px,1.0vw,14.02px)] font-normal leading-tight sm:leading-[clamp(16px,1.2vw,21.03px)] text-[#8C8C8C] mt-1 pl-1 sm:pl-2">
                        Learn about performance and dependability.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full overflow-hidden">
                  <div className="space-y-3 py-4 px-3 sm:px-4 h-full max-h-full overflow-y-auto">
                    {/* Increased spacing for mobile */}
                    <div className="w-full max-w-full sm:max-w-[1008px] mx-auto">
                      {/* Increased max-width for mobile */}
                      {messages.map((message, index) => (
                        <div
                          key={message.id}
                          ref={index === messages.length - 1 ? (el) => {
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                          } : null}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                        >
                          {/* Increased margin for better spacing */}
                          <div
                            className={`
                            max-w-[85%] sm:max-w-[600px] p-4 rounded-lg text-base sm:text-base
                            ${message.sender === 'user'
                                ? 'bg-[#0b0b0b] text-white'
                                : 'bg-gray-200 text-black'}
                          `}
                          >
                            {/* Increased width, padding and font size for mobile */}
                            {message.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Field - Improved for mobile */}
            <div className="relative mb-3 sm:mb-[clamp(6px,1.2vw,10px)] px-2 sm:px-4">
              {/* Increased margin for mobile */}
              <div className="flex items-center border border-[#E5E5E5] rounded-[8.91px] h-14 sm:h-[clamp(40px,3.2vw,48px)] mx-auto w-full max-w-full sm:max-w-[1008px] bg-white">
                {/* Increased height and width for mobile */}
                <input
                  type="text"
                  placeholder="Ask anything about automation here..."
                  className="flex-1 px-4 lg:px-6 font-nunito text-base sm:text-[clamp(12px,1.1vw,15.14px)] font-normal leading-normal placeholder-gray-400 focus:outline-none"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <div className="flex items-center pr-2"> {/* Reduced from pr-4 to pr-2 */}
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
            <div className="flex justify-center mt-2 sm:mt-[clamp(10px,2vw,16px)] pb-3 sm:pb-[clamp(10px,2vw,14px)]">
              {/* Increased padding for mobile */}
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

        {/* Help Overlay - Improved for mobile */}
        {showHelpOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col rounded-lg overflow-hidden">
            {/* Help Center Header - Matched with main header */}
            <div className="bg-[#0B0B0B] px-4 sm:px-[clamp(20px,3vw,26px)] lg:px-[clamp(24px,3.2vw,28px)] py-4 lg:py-[clamp(20px,2.5vw,22px)] flex justify-between items-center">
              <div className="space-y-1 sm:space-y-2 px-1 sm:px-[clamp(4px,1vw,10px)] py-1 sm:py-[clamp(3px,0.5vw,6px)]">
                <h3 className="font-nunito text-lg sm:text-[clamp(16px,2vw,21.38px)] font-bold leading-tight text-white">
                  Help Center
                </h3>
                <p className="font-lato text-base sm:text-[clamp(14px,1.8vw,17.81px)] font-normal leading-relaxed text-[#E8E8E8]">
                  Find answers to your questions
                </p>
              </div>
              <div 
                onClick={closeOverlay}
                className="cursor-pointer hover:opacity-80 transition-opacity w-[29px] h-[48.39px] flex items-center justify-center"
              >
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 7L7 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7L22 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="flex-1 bg-white p-5 sm:p-6 overflow-y-auto">
              <div className="max-w-full sm:max-w-[800px] mx-auto">
                {/* Increased max-width for mobile */}
                <div className="mb-5 sm:mb-6">
                  <h4 className="font-nunito text-lg sm:text-[clamp(16px,2vw,20px)] font-bold text-[#0E0E0E] mb-3 sm:mb-4">
                    {/* Increased font size for mobile */}
                    How can we help you?
                  </h4>
                  <p className="font-lato text-base sm:text-[clamp(14px,1.6vw,16px)] text-gray-600 mb-3 sm:mb-4">
                    {/* Changed apostrophe to HTML entity */}
                    Find answers to common questions about our automation chatbot below.
                    Click on a question to see its answer.
                  </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <div
                        className="flex justify-between items-center p-4 sm:p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => toggleFAQ(index)}
                      >
                        <h5 className="font-nunito-sans text-base sm:text-[clamp(14px,1.6vw,16px)] font-bold text-[#0E0E0E]">
                          {/* Increased font size for mobile */}
                          {item.question}
                        </h5>
                        <motion.div
                          animate={{ rotate: item.isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {item.isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="p-4 sm:p-4 bg-white">
                              <motion.p
                                initial={{ y: -10 }}
                                animate={{ y: 0 }}
                                exit={{ y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="font-lato text-base sm:text-[clamp(12px,1.4vw,15px)] text-gray-700"
                              >
                                {item.answer}
                              </motion.p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Contact Section */}
                <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-nunito text-lg sm:text-[clamp(14px,1.8vw,18px)] font-bold text-[#0E0E0E] mb-3">
                    {/* Increased font size and margin for mobile */}
                    Still need help?
                  </h4>
                  <p className="font-lato text-base sm:text-[clamp(12px,1.4vw,15px)] text-gray-700 mb-4">
                    {/* Increased font size for mobile */}
                    {`If you couldn't find the answer to your question, feel free to contact our support team.`}
                  </p>
                  <a 
                    href="mailto:support@dotweb.agency"
                    className="inline-block bg-[#0B0B0B] text-white px-5 py-3 rounded-md font-nunito-sans text-base sm:text-[clamp(12px,1.4vw,14px)] font-medium hover:bg-gray-800 transition-colors"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}