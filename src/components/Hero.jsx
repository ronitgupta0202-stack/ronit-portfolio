import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  CheckCircle2
} from 'lucide-react';
import SocialButton from './SocialButton';
import { personalInfo } from '../data/resumeData';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 bg-grid-subtle overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Intro & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono w-fit max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="truncate">Available for Software Engineering & AI Roles</span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-tight">
                Hi, I'm <span className="text-white">{personalInfo.name}</span>
              </h1>
              <p className="mt-2 text-lg sm:text-2xl font-medium text-zinc-400">
                {personalInfo.headline}
              </p>
            </div>

            {/* Recruiter-focused summary */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Computer Engineering student at University of Mumbai with hands-on experience through two internships in <span className="text-zinc-100 font-medium">AI Content Curation</span> and <span className="text-zinc-100 font-medium">CAD & Web Development</span>. Experienced in Python, Java, OpenCV, and Generative AI to build practical, production-ready software solutions.
            </p>

            {/* Verified Meta Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3 py-1.5 rounded-lg border border-zinc-800">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                <span>BE Comp Engg • 2027</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3 py-1.5 rounded-lg border border-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3 py-1.5 rounded-lg border border-zinc-800">
                <Briefcase className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                <span>2 Internships</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3 py-1.5 rounded-lg border border-zinc-800">
                <FolderGit2 className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                <span>5 Projects</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-all shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Ronit-Gupta-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 font-medium text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/80">
              <div className="flex items-center gap-2">
                <SocialButton 
                  type="github" 
                  url={personalInfo.githubUrl} 
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center justify-center"
                />
                <SocialButton 
                  type="linkedin" 
                  url={personalInfo.linkedinUrl} 
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center justify-center"
                />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
                  title={`Email: ${personalInfo.email}`}
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
                  title={`Call: ${personalInfo.phone}`}
                  aria-label="Call phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {personalInfo.email}
              </span>
            </div>

          </div>

          {/* Right Column - High-Signal Developer Snapshot Card */}
          <div className="lg:col-span-5 w-full">
            <div className="surface-card rounded-xl p-5 sm:p-6 shadow-xl text-left space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-zinc-300" />
                  <span className="font-mono text-xs font-semibold text-zinc-200 tracking-wider uppercase">
                    Developer Snapshot
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Track</span>
                </div>
              </div>

              {/* Education / University Snapshot */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                  Academic Foundation
                </span>
                <p className="text-sm font-semibold text-zinc-100">
                  University of Mumbai
                </p>
                <p className="text-xs text-zinc-400">
                  Bachelor of Engineering (BE) in Computer Engineering • 2023–2027
                </p>
              </div>

              {/* Core Technical Stack */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Java', 'JavaScript', 'Generative AI', 'OpenCV', 'HTML5 / CSS3', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Experience Quick List */}
              <div className="pt-3 border-t border-zinc-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Recent Work History
                </span>
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2 text-xs">
                    <div>
                      <p className="font-medium text-zinc-200">CAD & Web Development Intern</p>
                      <p className="text-zinc-400">Engineering Solutions</p>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400 shrink-0">Feb 2026</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 text-xs">
                    <div>
                      <p className="font-medium text-zinc-200">AI Content Curator Intern</p>
                      <p className="text-zinc-400">Nextleap</p>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400 shrink-0">Jun 2025</span>
                  </div>
                </div>
              </div>

              {/* Key Implementations Summary */}
              <div className="pt-3 border-t border-zinc-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Featured Solutions
                </span>
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="truncate"><strong className="text-zinc-200">EcoBatch AI:</strong> Batch Optimization Platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="truncate"><strong className="text-zinc-200">Attendance System:</strong> OpenCV Face Detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="truncate"><strong className="text-zinc-200">RevunivoAI:</strong> Google Review Generator</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
