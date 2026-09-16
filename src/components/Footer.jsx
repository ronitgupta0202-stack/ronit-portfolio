import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import SocialButton from './SocialButton';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm">
                RG
              </div>
              <span className="font-bold text-slate-100 tracking-tight text-base sm:text-lg">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-[11px] sm:text-xs font-mono text-slate-400">
              {personalInfo.headline} • University of Mumbai
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <SocialButton
              type="github"
              url={personalInfo.githubUrl}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center justify-center"
            />
            <SocialButton
              type="linkedin"
              url={personalInfo.linkedinUrl}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center justify-center"
            />
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Email Direct"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 transition-colors ml-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Ronit Gupta. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
