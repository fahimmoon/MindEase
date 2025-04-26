import { Link } from 'react-router-dom';

function Footer() {
  const socialLinks = [
    { name: 'Portfolio', url: 'https://fahimmoon.github.io/portfolio-website-main/', icon: 'portfolio' },
    { name: 'GitHub', url: 'https://github.com/fahimmoon', icon: 'github' },
    { name: 'Email', url: 'mailto:moonhunzai83@gmail.com', icon: 'email' },
  ];

  const renderIcon = (icon) => {
    switch (icon) {
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'email':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        );
      case 'portfolio':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2C7A61] via-[#38a081] to-[#2C7A61]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌿</span>
              <h3 className="text-xl font-bold font-['Lora']">MindEase</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-['Quicksand']">
              Supporting your mental wellness journey with compassion and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Poppins']">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Resources', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    <span className="ml-2">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Poppins']">Emergency Support</h4>
            <div className="space-y-3">
              <p className="text-gray-300">24/7 Crisis Hotline:</p>
              <a 
                href="tel:080022444" 
                className="text-[#38a081] text-2xl font-bold hover:text-[#2C7A61] transition-colors duration-200 flex items-center group"
              >
                <span className="transform group-hover:scale-110 transition-transform duration-200">0800-22444</span>
                <span className="ml-2 text-sm text-gray-400">(Rozan Helpline)</span>
              </a>
            </div>
          </div>

          {/* Developer Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-['Poppins']">Developer</h4>
            <div className="space-y-4">
              <p className="text-gray-300">
                Developed with ♥ in Karachi, Pakistan by{' '}
                <a 
                  href="https://fahimmoon.github.io/portfolio-website-main/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38a081] hover:text-[#2C7A61] transition-colors duration-200"
                >
                  Fahim Ahmad
                </a>
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  >
                    {renderIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MindEase. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Created by{' '}
              <a 
                href="https://github.com/fahimmoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38a081] hover:text-[#2C7A61] transition-colors duration-200"
              >
                Fahim Ahmad
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
