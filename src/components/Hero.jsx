import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Cpu,
  GraduationCap
} from 'lucide-react';
import SocialButton from './SocialButton';
import { personalInfo } from '../data/resumeData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="home" className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-blue-600/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column - Main Intro & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] sm:text-xs font-mono w-fit max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="truncate">BE Computer Engineering • Exp. May 2027</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <h2 className="mt-1.5 sm:mt-2 text-lg sm:text-2xl font-semibold text-slate-300 flex items-center gap-2.5">
                <span>{personalInfo.headline}</span>
              </h2>
            </div>

            {/* Short recruiter-focused summary */}
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl font-normal">
              Computer Science student at University of Mumbai with hands-on experience in <span className="text-cyan-300 font-medium">AI Content Curation</span> and <span className="text-cyan-300 font-medium">CAD & Web Development</span>. Passionate about applying Python, Java, OpenCV, and Generative AI to build impactful software solutions.
            </p>

            {/* Quick Facts Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Mumbai University</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>2 Internships</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-4">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="/resume.pdf"
                download="Ronit-Gupta-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <SocialButton 
                  type="github" 
                  url={personalInfo.githubUrl} 
                  className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
                />
                <SocialButton 
                  type="linkedin" 
                  url={personalInfo.linkedinUrl} 
                  className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
                />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title={`Email: ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  title={`Call: ${personalInfo.phone}`}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 truncate w-full sm:w-auto">
                roniitgupta0202@gmail.com
              </span>
            </div>

          </div>

          {/* Right Column - Developer/AI Interactive Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden glass-card">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-1.5 font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-1.5 truncate">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    ronit-developer-env
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 border border-slate-800">
                  <span>v2026.09</span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/40 font-mono text-[11px] sm:text-xs">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3.5 py-2 flex items-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === 'overview'
                      ? 'border-cyan-400 text-cyan-300 bg-slate-900/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>profile.py</span>
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-3.5 py-2 flex items-center gap-1.5 border-b-2 transition-colors ${
                    activeTab === 'projects'
                      ? 'border-cyan-400 text-cyan-300 bg-slate-900/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>projects.json</span>
                </button>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-300 min-h-[260px] sm:min-h-[300px] overflow-x-auto space-y-2.5 sm:space-y-3 bg-slate-950/60">
                {activeTab === 'overview' ? (
                  <>
                    <div className="text-slate-500"># Ronit Gupta - Developer Profile Matrix</div>
                    <div>
                      <span className="text-purple-400">class</span> <span className="text-yellow-300">SoftwareEngineer</span>:
                    </div>
                    <div className="pl-3 sm:pl-4 space-y-1">
                      <div>
                        <span className="text-cyan-400">name</span> = <span className="text-emerald-300">"{personalInfo.name}"</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">education</span> = <span className="text-emerald-300">"BE Computer Engg, MU"</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">graduation</span> = <span className="text-emerald-300">"May 2027"</span>
                      </div>
                      <div>
                        <span className="text-cyan-400">core_skills</span> = [
                        <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"OpenCV"</span>, <span className="text-amber-300">"Generative AI"</span>
                        ]
                      </div>
                      <div>
                        <span className="text-cyan-400">internships</span> = [
                        <span className="text-sky-300">"AI Content Curator"</span>,
                        <span className="text-sky-300">"CAD & Web Dev"</span>
                        ]
                      </div>
                    </div>
                    <div className="pt-1.5 text-slate-500">
                      $ python -m ronit.status
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>System Ready. Open for roles.</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-slate-500">// Featured Engineering Projects</div>
                    <div className="text-cyan-300 font-bold">1. EcoBatch AI</div>
                    <div className="pl-2 sm:pl-3 text-slate-400 text-[10px] sm:text-[11px]">
                      AI-Based Batch Optimization Platform for eco-friendly manufacturing.
                    </div>
                    <div className="pt-1 text-cyan-300 font-bold">2. Attendance System via Face Detection</div>
                    <div className="pl-2 sm:pl-3 text-slate-400 text-[10px] sm:text-[11px]">
                      Real-time OpenCV facial recognition attendance logging.
                    </div>
                    <div className="pt-1 text-cyan-300 font-bold">3. Cinema Ticket Booking System</div>
                    <div className="pl-2 sm:pl-3 text-slate-400 text-[10px] sm:text-[11px]">
                      Java OOP application automating movie schedules & seat booking.
                    </div>
                  </>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Terminal
                </span>
                <span>UTF-8</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
