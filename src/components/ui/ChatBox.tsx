import Image from 'next/image';
import { motion } from 'framer-motion';

const ChatBox = () => {
  const prePrompts = [
    { title: "How can automation save us money?", desc: "Discover how to cut costs and improve efficiency." },
    { title: "Can I reduce my team size with AI?", desc: "Achieve more with fewer resources." },
    { title: "What services does DOTWEB offer?", desc: "Explore tailored solutions for your business." },
    { title: "How reliable are your solutions?", desc: "Learn about performance and dependability." }
  ];

  return (
    <motion.div 
      className="w-full max-w-[800px] mx-auto bg-white rounded-2xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium">Ask About Smarter Automation Solutions</span>
        </div>
        <button className="text-white/80 hover:text-white">
          <span className="sr-only">Help</span>
          Help
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {/* Clock Icon Placeholder */}
            <div className="w-8 h-8 bg-gray-100 rounded-full" />
          </div>
          <h2 className="text-xl font-medium mb-2">
            What do you want to know about automation today?
          </h2>
        </div>

        {/* Pre-prompts Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {prePrompts.map((prompt, index) => (
            <button
              key={index}
              className="text-left p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
            >
              <h3 className="font-medium mb-1">{prompt.title}</h3>
              <p className="text-sm text-gray-600">{prompt.desc}</p>
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex gap-2 border border-gray-200 rounded-xl p-2">
          <input
            type="text"
            placeholder="Ask anything about automation here..."
            className="flex-1 px-3 py-2 focus:outline-none"
          />
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Send
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBox;
