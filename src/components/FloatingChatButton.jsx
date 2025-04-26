import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function FloatingChatButton() {
  const location = useLocation();
  const isVisible = location.pathname !== '/chatbot';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/chatbot"
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#2C7A61] rounded-full 
                     shadow-lg hover:bg-[#276954] transition-colors"
            aria-label="Open chat"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
              />
            </svg>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingChatButton;
