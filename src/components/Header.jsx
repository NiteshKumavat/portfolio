import React, { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-md text-white font-mono px-8 py-6 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-sm tracking-widest uppercase">
          NK<span className="text-gray-400">.DEV</span>
        </div>

        <nav className="flex items-center space-x-12 text-xs tracking-widest uppercase font-medium">
          <a href="#work" className="text-gray-400 hover:text-white transition-colors">
            WORK
          </a>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
            CONTACT
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <a
            href="../libs/White_Minimalist_Resume.pdf"
            download="NK_Resume.pdf"
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-[#00ff87] border border-gray-800 hover:border-[#00ff87]/50 rounded-full px-4 py-1.5 transition-all duration-200"
          >
            <span>RESUME</span>
            {/* Download Icon */}
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 16L7 11H10V4H14V11H17L12 16ZM5 18V20H19V18H5Z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;