import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-md shadow-black/20 py-3' 
          : 'bg-zinc-950/60 backdrop-blur-sm border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Identifier */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 group-hover:border-zinc-500 flex items-center justify-center text-zinc-100 font-mono font-semibold text-xs sm:text-sm transition-colors shrink-0">
            RG
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-zinc-100 text-sm sm:text-base tracking-tight group-hover:text-white transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
              Developer Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav 
          aria-label="Main navigation" 
          className="hidden md:flex items-center gap-1 bg-zinc-900/70 p-1 rounded-full border border-zinc-800"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Ronit-Gupta-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 text-xs font-medium transition-all shadow-sm focus:outline-none"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-800" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            download="Ronit-Gupta-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-medium min-h-[40px]"
            aria-label="Download Resume"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-300" />
            <span className="font-mono text-[11px]">Resume</span>
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-zinc-100" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-zinc-800 text-zinc-100 border border-zinc-700/60'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800">
            <a
              href="/resume.pdf"
              download="Ronit-Gupta-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-xs tracking-wide transition-colors"
            >
              <FileText className="w-4 h-4 text-zinc-800" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
