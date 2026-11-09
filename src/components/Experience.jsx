import React from 'react';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 relative bg-zinc-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 mb-3">
            02 / Work History
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Internship & Practical Experience
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Hands-on technical roles focusing on generative AI content validation and full-stack web engineering.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-4xl mx-auto text-left">
          {experience.map((exp, idx) => (
            <div 
              key={idx}
              className="surface-card rounded-xl p-6 sm:p-8"
            >
              {/* Header inside Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="pt-5 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                  Key Responsibilities & Contributions:
                </span>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Used Chips */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-zinc-400 mr-1">Skills:</span>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
