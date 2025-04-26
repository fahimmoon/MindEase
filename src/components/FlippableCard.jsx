import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FlippableCard({ technique }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleImageError = (e) => {
    console.error(`Error loading image: ${technique.image}`);
    setImageError(true);
    setIsImageLoaded(false);
  };

  const cardVariants = {
    front: {
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    back: {
      rotateY: 180,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] perspective-1000"
         onClick={handleFlip}
         onKeyPress={(e) => e.key === 'Enter' && handleFlip()}
         role="button"
         tabIndex={0}>
      <AnimatePresence initial={false} mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            variants={cardVariants}
            initial="back"
            animate="front"
            exit="back"
            className={`absolute inset-0 p-4 sm:p-6 rounded-xl ${technique.color} 
                       transform-style-3d cursor-pointer select-none
                       hover:shadow-lg transition-shadow duration-300
                       ${technique.hoverColor} backdrop-blur-sm border border-white/50`}
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <span className="text-3xl sm:text-4xl transform-gpu transition-transform duration-300 
                             group-hover:scale-110 flex-shrink-0">
                {technique.icon}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] mb-1 sm:mb-2 
                             font-['Poppins'] line-clamp-1">
                  {technique.title}
                </h3>
                <p className="text-sm sm:text-base text-[#546E7A] font-['Quicksand'] 
                          leading-relaxed line-clamp-3">
                  {technique.description}
                </p>
              </div>
            </div>
            <motion.div
              className="absolute bottom-2 right-2 text-[#2C3E50]/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Tap to explore
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            variants={cardVariants}
            initial="back"
            animate="front"
            exit="back"
            className="absolute inset-0 rounded-xl overflow-hidden transform-style-3d
                     cursor-pointer select-none shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isImageLoaded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img
                src={technique.image}
                alt={technique.title}
                onLoad={() => setIsImageLoaded(true)}
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                  Image not found
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20
                           flex items-center justify-center p-4">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-center">
                  <span className="text-lg sm:text-xl font-['Poppins'] font-medium block mb-2">
                    {technique.title}
                  </span>
                  <span className="text-sm sm:text-base font-['Quicksand'] opacity-90">
                    {technique.imageDescription}
                  </span>
                </motion.p>
              </div>
            </motion.div>
            {!isImageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FlippableCard;
