import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CalmingTechniques from '../components/CalmingTechniques';

function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#CDE8F9]">
        {/* Background Image with adjusted opacity */}
        <div className="absolute inset-0 z-0">
          <img 
            src={process.env.PUBLIC_URL + '/meditation-boy.png'} 
            alt="Peaceful meditation illustration"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#CDE8F9]/40 via-[#CDE8F9]/60 to-[#CDE8F9]/80"></div>
        </div>

        {/* Content with responsive typography */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-heading-mobile md:text-heading-desktop font-normal mb-4 md:mb-6 
                     text-[#163C65] font-['Lora'] leading-tight"
          >
            Welcome to <span className="font-semibold">MindEase</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-subheading-mobile md:text-subheading-desktop mb-8 md:mb-10 
                     text-[#163C65]/80 font-['Quicksand'] font-light tracking-wide leading-relaxed"
          >
            Your companion for mental wellness and support
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/chatbot"
              className="bg-[#2C7A61] text-white px-8 py-3 rounded-full font-semibold 
                       hover:bg-[#2D8275] transition-all duration-300 shadow-lg 
                       hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#CDE8F9] to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
      </section>

      {/* Features Section with responsive spacing */}
      <section className="py-10 md:py-16 bg-[#CDE8F9]/30">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "24/7 Support", desc: "Access our AI chatbot anytime for immediate support and guidance" },
            { title: "Resources", desc: "Explore our curated collection of mental health resources" },
            { title: "Community", desc: "Join our supportive community for shared experiences" }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl bg-white/90 backdrop-blur-sm
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add Calming Techniques Section */}
      <CalmingTechniques />
    </div>
  );
}

export default Home;
