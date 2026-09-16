import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Tag } from 'lucide-react';
import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Work History</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Practical engineering and technology roles focused on AI dataset curation and web application development.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line on Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-slate-800" />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center group">
                  
                  {/* Timeline Center Badge Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-500 items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-200">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    
                    <div className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 sm:p-8 glass-card transition-all duration-300 shadow-xl">
                      
                      {/* Top Header inside Card */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3 sm:mb-4">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-2">
                            {exp.type}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-slate-300 font-semibold text-xs sm:text-sm mt-1">
                            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Meta information: Date & Location */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-slate-400 pb-3.5 sm:pb-4 mb-4 border-b border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities List */}
                      <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                        <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies/Skills Tags */}
                      <div className="pt-3.5 sm:pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <Tag className="w-3.5 h-3.5 text-slate-400 mr-1 shrink-0" />
                        {exp.skillsUsed.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] sm:text-[11px] font-mono text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
