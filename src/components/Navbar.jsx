import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-30 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#1a202c]/95' 
          : 'bg-[#1a202c]/80'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center h-[65px] md:h-[75px] px-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 relative">
                <img 
                  src={process.env.PUBLIC_URL + '/favicon.svg'} 
                  alt="MindEase"
                  className="w-full h-full transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <span className="font-['Lora'] text-white text-xl md:text-2xl font-semibold">
                MindEase
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <div className="flex space-x-3 lg:space-x-6">
                {['Home', 'About', 'Resources', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/90 hover:text-white relative py-2 group transition-colors
                             font-['Quicksand'] text-sm lg:text-base font-medium"
                  >
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/80 origin-left
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                  </Link>
                ))}
              </div>
              
              <Link 
                to="/chatbot"
                className="bg-white/10 hover:bg-white/20 text-white px-5 lg:px-6 py-2 lg:py-2.5 
                         rounded-full font-['Poppins'] text-sm lg:text-base font-medium
                         transition-all duration-300 border border-white/20
                         hover:border-white/40 shadow-sm hover:shadow-white/10
                         flex items-center space-x-2"
              >
                <span>Start Chatting</span>
                <motion.span
                  animate={{ 
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.span>
              </Link>
            </div>

            <button 
              className="md:hidden text-white/90 hover:text-white transition-colors
                       w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
