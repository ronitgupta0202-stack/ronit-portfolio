import React from 'react';
import { Award, CheckCircle2, ShieldCheck, BarChart3, Leaf, Cpu } from 'lucide-react';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  const getCertIcon = (category) => {
    if (category.includes('Software')) return <Cpu className="w-5 h-5 text-emerald-400" />;
    if (category.includes('Cyber')) return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    if (category.includes('Analytics')) return <BarChart3 className="w-5 h-5 text-indigo-400" />;
    return <Leaf className="w-5 h-5 text-green-400" />;
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-28 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Practical job simulations and professional certifications from leading industry organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 sm:p-7 glass-card flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3.5 sm:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      {getCertIcon(cert.category)}
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[10px] sm:text-[11px] shrink-0">
                    {cert.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  {cert.date}
                </span>

                <span className="text-cyan-400/90 font-medium">
                  {cert.category}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
