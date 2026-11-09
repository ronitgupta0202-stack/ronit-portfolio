import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import SocialButton from './SocialButton';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 py-10 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          
          {/* Brand & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5 mb-1.5 focus:outline-none">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-zinc-100 font-mono font-semibold text-xs">
                RG
              </div>
              <span className="font-semibold text-zinc-100 text-base">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-xs font-mono text-zinc-400">
              Computer Engineering • University of Mumbai
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-mono text-zinc-400">
            <a href="#about" className="hover:text-zinc-200 transition-colors">About</a>
            <a href="#experience" className="hover:text-zinc-200 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-zinc-200 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-zinc-200 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-zinc-200 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-zinc-200 transition-colors">Contact</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2">
            <SocialButton
              type="github"
              url={personalInfo.githubUrl}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors flex items-center justify-center"
            />
            <SocialButton
              type="linkedin"
              url={personalInfo.linkedinUrl}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors flex items-center justify-center"
            />
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
              title="Email Direct"
              aria-label="Email Ronit Gupta"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors ml-1 cursor-pointer"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Ronit Gupta. All rights reserved.</p>
          <p>
            Built with React, Vite & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
