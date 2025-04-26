import { motion } from 'framer-motion';

function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F7FA] to-white relative overflow-hidden">
      {/* Animated background waves */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background: "url(\"data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%239C92AC' fill-opacity='0.05' d='M-200 0h1000v1000h-1000z'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto p-8 relative z-10">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-[#0A2342] text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About MindEase
        </motion.h1>

        <motion.div 
          className="prose lg:prose-xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <motion.p 
            variants={fadeIn} 
            className="mb-6 text-[#607D8B]"
          >
            MindEase is dedicated to making mental health support accessible to everyone through
            technology and compassionate care.
          </motion.p>
          
          <motion.h2 
            variants={fadeIn}
            className="text-2xl font-semibold mb-4 text-[#0A2342]"
          >
            Our Mission
          </motion.h2>
          <motion.p 
            variants={fadeIn} 
            className="mb-6 text-[#607D8B]"
          >
            To provide immediate, accessible mental health support through innovative AI
            technology while maintaining a human-centered approach to wellness.
          </motion.p>
          
          <motion.h2 
            variants={fadeIn}
            className="text-2xl font-semibold mb-4 text-[#0A2342]"
          >
            Our Values
          </motion.h2>
          <motion.ul 
            variants={fadeIn} 
            className="list-disc pl-6 mb-6 text-[#607D8B]"
          >
            <li>Accessibility</li>
            <li>Compassion</li>
            <li>Innovation</li>
            <li>Privacy</li>
          </motion.ul>
          
          <motion.button
            className="mt-8 bg-[#388E3C] text-white px-6 py-3 rounded-full hover:bg-[#2E7D32] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
