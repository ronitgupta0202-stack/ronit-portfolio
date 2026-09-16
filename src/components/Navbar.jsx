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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3' 
        : 'bg-slate-950/40 backdrop-blur-sm py-4 md:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-base sm:text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
            RG
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-wider">
              PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Ronit-Gupta-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:border-slate-600"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            download="Ronit-Gupta-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-medium"
            aria-label="Download Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">CV</span>
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80">
            <a
              href="/resume.pdf"
              download="Ronit-Gupta-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs font-mono shadow-md shadow-cyan-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
