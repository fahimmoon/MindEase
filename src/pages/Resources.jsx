import { motion, AnimatePresence } from 'framer-motion';

function Resources() {
  const resources = [
    {
      title: "Crisis Support",
      description: "24/7 emergency mental health support",
      icon: "🆘",
      links: [
        { name: "Rozan Counseling Helpline", url: "tel:0800-22444" },
        { name: "Pakistan Mental Health Helpline", url: "tel:0317-4288666" },
        { name: "Talk2Me Pakistan", url: "https://talk2me.pk" }
      ]
    },
    {
      title: "Self-Care Resources",
      description: "Tools and guides for daily mental wellness",
      icon: "🧘‍♀️",
      links: [
        { name: "Meditation Basics", url: "/resources/meditation" },
        { name: "Anxiety Management", url: "/resources/anxiety" },
        { name: "Sleep Improvement Tips", url: "/resources/sleep" }
      ]
    },
    {
      title: "Professional Help",
      description: "Find licensed mental health professionals",
      icon: "👨‍⚕️",
      links: [
        { name: "Find a Therapist", url: "https://www.psychologytoday.com/us/therapists" },
        { name: "Online Counseling", url: "https://www.betterhelp.com/" },
        { name: "Support Groups", url: "/resources/groups" }
      ]
    },
    {
      title: "Educational Content",
      description: "Learn about mental health and wellness",
      icon: "📚",
      links: [
        { name: "Mental Health Basics", url: "/resources/basics" },
        { name: "Stress Management Guide", url: "/resources/stress" },
        { name: "Self-Help Library", url: "/resources/library" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { opacity: 0 }
  };

  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-[#E0F7FA] relative overflow-hidden"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="absolute inset-0 z-0">
          {/* Multiple wave layers for parallax effect */}
          <motion.svg 
            className="absolute w-full h-64 opacity-5" 
            viewBox="0 0 1440 320"
            variants={waveVariants}
            animate="animate"
          >
            <path 
              fill="#9575CD" 
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </motion.svg>
          <motion.svg 
            className="absolute w-full h-64 opacity-5" 
            viewBox="0 0 1440 320"
            variants={waveVariants}
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <path 
              fill="#81C784" 
              d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </motion.svg>
        </div>

        <div className="max-w-6xl mx-auto p-8 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-[#0A2342]">
              Mental Health Resources
            </h1>
            <p className="text-[#607D8B] text-xl max-w-2xl mx-auto">
              Supporting your journey to better mental health with carefully curated resources and tools.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {resources.map((resource, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 10 
                  }
                }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{resource.icon}</span>
                  <div>
                    <h2 className="text-2xl font-semibold text-[#0A2342]">{resource.title}</h2>
                    <p className="text-[#607D8B]">{resource.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {resource.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href={link.url}
                        className="text-[#388E3C] hover:text-[#2E7D32] flex items-center"
                      >
                        <span className="mr-2">→</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 p-6 bg-[#9575CD] rounded-xl text-white text-center backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Need Immediate Help?</h3>
            <p className="mb-4">If you're in crisis, please reach out. Help is available 24/7.</p>
            <motion.a 
              href="tel:988"
              className="inline-block bg-white text-[#9575CD] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Call 988 Now
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Resources;
