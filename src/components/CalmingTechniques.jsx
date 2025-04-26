import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FlippableCard from './FlippableCard';

const techniques = [
  {
    title: "Mindful Tea Moments",
    description: "Sip slowly. Feel the warmth. Let every moment ground you.",
    icon: "☕",
    color: "bg-[#E3F2FD]",
    hoverColor: "hover:bg-[#BBDEFB]",
    image: process.env.PUBLIC_URL + '/tea.png',
    imageDescription: "A serene moment with a cup of calming tea"
  },
  {
    title: "Prayer & Connection",
    description: "Whisper your worries. Find strength and serenity in connection.",
    icon: "🙏",
    color: "bg-[#F3E5F5]",
    hoverColor: "hover:bg-[#E1BEE7]",
    image: process.env.PUBLIC_URL + '/prayer.png',
    imageDescription: "A peaceful moment of spiritual connection"
  },
  {
    title: "Gentle Movement",
    description: "Flow softly. Stretch stress away, one breath at a time.",
    icon: "🧘",
    color: "bg-[#E8F5E9]",
    hoverColor: "hover:bg-[#C8E6C9]",
    image: process.env.PUBLIC_URL + '/movement.png',
    imageDescription: "Stretch and flow"
  },
  {
    title: "Positive Visualization",
    description: "Picture your happiest place — and believe it's real.",
    icon: "🌈",
    color: "bg-[#FFF3E0]",
    hoverColor: "hover:bg-[#FFE0B2]",
    image: process.env.PUBLIC_URL + '/visualization.png',
    imageDescription: "Imagine your happy place"
  },
  {
    title: "Soothing Sounds",
    description: "Let soothing melodies cradle your mind into calmness.",
    icon: "🎶",
    color: "bg-[#E0F7FA]",
    hoverColor: "hover:bg-[#B2EBF2]",
    image: process.env.PUBLIC_URL + '/sounds.png',
    imageDescription: "Relax with melodies"
  },
  {
    title: "Deep Breathing",
    description: "Inhale peace, exhale tension. Feel your body relax naturally.",
    icon: "🌬️",
    color: "bg-[#F3E5F5]",
    hoverColor: "hover:bg-[#E1BEE7]",
    image: process.env.PUBLIC_URL + '/breathing.png',
    imageDescription: "Breathe deeply"
  },
  {
    title: "Mindful Meditation",
    description: "Pause the world. Embrace the stillness within you.",
    icon: "🧘‍♂️",
    color: "bg-[#E0F2F1]",
    hoverColor: "hover:bg-[#B2DFDB]",
    image: process.env.PUBLIC_URL + '/meditation.png',
    imageDescription: "Find stillness"
  }
];

function CalmingTechniques() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4 font-['Lora']">
            Find Your Calm: Simple Techniques for a Peaceful Mind
          </h2>
          <p className="text-[#607D8B] text-lg max-w-2xl mx-auto font-['Quicksand']">
            Discover gentle ways to nurture your inner peace, one moment at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techniques.map((technique, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: idx * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <FlippableCard technique={technique} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/resources"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#2C7A61]/10 rounded-full
                     text-[#2C7A61] hover:bg-[#2C7A61]/20 transition-all duration-300 
                     font-medium text-lg font-['Poppins'] group"
          >
            <span>Explore More Calming Practices</span>
            <svg 
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CalmingTechniques;
