import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your MindEase companion. How are you feeling today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = [
    "I hear you. Could you tell me more about that?",
    "That sounds challenging. How does it make you feel?",
    "You're not alone in this. I'm here to listen.",
    "Take a deep breath. What's on your mind?",
    "I understand this might be difficult. What support do you need right now?",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    // Simulate bot thinking and response
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] bg-gradient-to-b from-[#E0F7FA] to-white p-4"
    >
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Chat Header */}
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="bg-white rounded-t-xl p-4 shadow-lg"
        >
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🌿</span>
            <div>
              <h1 className="text-xl font-semibold text-[#2C7A61]">MindEase Companion</h1>
              <p className="text-sm text-gray-500">Here to listen and support you</p>
            </div>
          </div>
        </motion.div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#F8FAFC] rounded-b-xl shadow-lg">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-[#2C7A61] text-white rounded-br-none' 
                    : 'bg-white shadow-md rounded-bl-none'
                }`}>
                  <p className="text-sm md:text-base">{msg.text}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-4 rounded-2xl shadow-md rounded-bl-none">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-2 h-2 bg-[#2C7A61] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                        className="w-2 h-2 bg-[#2C7A61] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                        className="w-2 h-2 bg-[#2C7A61] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Input Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="mt-4 flex gap-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 p-3 rounded-xl border-2 border-[#2C7A61]/20 focus:border-[#2C7A61] 
                     outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm
                     placeholder:text-gray-400 text-gray-600"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-[#2C7A61] text-white rounded-xl hover:bg-[#276954] 
                     transition-colors duration-300 flex items-center justify-center
                     shadow-lg hover:shadow-xl flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.form>

        {/* Supportive Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-4"
        >
          Remember, you're in a safe space. Share what's on your mind.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Chatbot;
