import React from 'react';
import { 
  GraduationCap, 
  Lightbulb, 
  Globe2, 
  Award, 
  BookOpen, 
  Sparkles, 
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';
import { personalInfo, education, languages, learningMindset } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <UserIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Learning Mindset</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            Passionate about bridging theoretical Computer Engineering principles with real-world AI and web software engineering.
          </p>
        </div>

        {/* Top Grid: Summary Card & Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Professional Introduction Card */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 glass-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Professional Summary</h3>
                  <p className="text-xs font-mono text-slate-400">Computer Science & AI Focus</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                {personalInfo.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Problem Solving</h4>
                    <p className="text-xs text-slate-400">Algorithmic thinking in Python & Java</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Generative AI Curation</h4>
                    <p className="text-xs text-slate-400">Dataset validation & model alignment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Location: {personalInfo.location}</span>
              <span className="text-cyan-400">BE Computer Engineering</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 glass-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-xs font-mono text-slate-400">Degree & Institution</p>
                </div>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-slate-100">{edu.degree}</h4>
                    <div className="text-cyan-400 font-semibold text-sm flex items-center gap-2">
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 py-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Language Proficiency Sub-block */}
            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Spoken Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, lIdx) => (
                  <div 
                    key={lIdx}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5"
                  >
                    <span className="text-white font-semibold">{lang.name}:</span>
                    <span className="text-cyan-400 text-[11px]">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Grid: Learning Mindset & Community Engagement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningMindset.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 glass-card hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                {idx === 0 ? <Sparkles className="w-4 h-4" /> : idx === 1 ? <Award className="w-4 h-4" /> : <Lightbulb className="w-4 h-4" />}
              </div>
              <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function UserIcon(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
