import React from 'react';
import { 
  GraduationCap, 
  Globe2, 
  BookOpen, 
  CheckCircle2,
  Calendar,
  MapPin,
  Trophy,
  Cpu,
  Layers
} from 'lucide-react';
import { personalInfo, education, languages, learningMindset } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative bg-zinc-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 mb-3">
            01 / Background
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Academic Foundation & Engineering Mindset
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Passionate about bridging core Computer Engineering theory with practical AI model curation and full-stack software development.
          </p>
        </div>

        {/* Top Grid: Summary Card & Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-10">
          
          {/* Professional Introduction Card */}
          <div className="lg:col-span-7 surface-card rounded-xl p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100">Professional Summary</h3>
                  <p className="text-xs font-mono text-zinc-400">Software Engineering & AI Focus</p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-6">
                {personalInfo.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-200">Algorithmic Problem Solving</h4>
                    <p className="text-xs text-zinc-400">Strong fundamentals in Python and Java core programming.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-200">AI Model & Data Curation</h4>
                    <p className="text-xs text-zinc-400">Dataset validation, content curation, and prompt engineering.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-xs text-zinc-400 font-mono gap-2">
              <span>Location: {personalInfo.location}</span>
              <span className="text-zinc-300">University of Mumbai</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 surface-card rounded-xl p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100">Education</h3>
                  <p className="text-xs font-mono text-zinc-400">Degree & Specialization</p>
                </div>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold text-zinc-100">{edu.degree}</h4>
                    <p className="text-sm font-medium text-zinc-300 mt-0.5">{edu.institution}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 py-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-zinc-300 pt-3 border-t border-zinc-800">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Language Proficiency */}
            <div className="mt-6 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2.5">
                <Globe2 className="w-3.5 h-3.5 text-zinc-400" />
                <span>Spoken Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, lIdx) => (
                  <div 
                    key={lIdx}
                    className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    <span className="text-zinc-100 font-medium">{lang.name}:</span> {lang.proficiency}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Grid: Learning Mindset & Continuous Development */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {learningMindset.map((item, idx) => (
            <div 
              key={idx}
              className="surface-card rounded-xl p-5 sm:p-6"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-3.5">
                {idx === 0 ? <Trophy className="w-4 h-4" /> : idx === 1 ? <Cpu className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
              </div>
              <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">{item.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
