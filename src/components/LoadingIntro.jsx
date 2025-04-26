import { motion } from 'framer-motion';

function LoadingIntro({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#E0F7FA] z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1, 1.1, 1],
            opacity: 1
          }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <span className="text-6xl md:text-7xl">🌿</span>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-[#2C7A61] mb-4 font-['Lora']"
        >
          Welcome to MindEase
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-[#2C7A61]/80 font-['Quicksand'] max-w-md mx-auto"
        >
          Your journey to mental wellness begins here
        </motion.p>

        <div className="mt-8">
          <motion.div
            className="w-48 h-1.5 bg-[#2C7A61]/20 rounded-full mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full bg-[#2C7A61]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                delay: 1.2,
                duration: 1.5,
                ease: "easeInOut",
                onComplete: onComplete
              }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingIntro;
