import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween' }}
        className="fixed right-0 top-0 h-full w-64 bg-[#1a202c] shadow-lg z-50"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4">
          <button onClick={onClose} className="float-right text-2xl text-white">&times;</button>
          <nav className="mt-8">
            <ul className="space-y-4">
              {['Home', 'About', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={onClose} 
                    className="block py-2 text-gray-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/chatbot" 
                  onClick={onClose}
                  className="inline-block px-6 py-2 bg-[#38a081] text-white rounded-full
                           hover:bg-[#2C7A61] transition-colors"
                >
                  Start Chatting
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MobileMenu;
