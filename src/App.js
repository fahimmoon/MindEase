import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import FloatingChatButton from './components/FloatingChatButton';
import LoadingIntro from './components/LoadingIntro';
import DevelopmentNotice from './components/DevelopmentNotice';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDevNotice, setShowDevNotice] = useState(false);

  useEffect(() => {
    if (isLoading || showDevNotice) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [isLoading, showDevNotice]);

  const handleIntroComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
      setShowDevNotice(true);
    }, 2800);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingIntro key="loading" onComplete={handleIntroComplete} />
      ) : (
        <>
          <div className="min-h-screen flex flex-col animate-fade-in">
            <Navbar />
            <main className="flex-grow pt-[70px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <FloatingChatButton />
            <Footer />
          </div>
          <AnimatePresence>
            {showDevNotice && (
              <DevelopmentNotice 
                key="dev-notice"
                onClose={() => setShowDevNotice(false)} 
              />
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
