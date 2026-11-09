import React from 'react';
import { CheckCircle2, ShieldCheck, BarChart3, Leaf, Cpu } from 'lucide-react';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  const getCertIcon = (category) => {
    if (category.includes('Software')) return <Cpu className="w-5 h-5 text-zinc-300" />;
    if (category.includes('Cyber')) return <ShieldCheck className="w-5 h-5 text-zinc-300" />;
    if (category.includes('Analytics')) return <BarChart3 className="w-5 h-5 text-zinc-300" />;
    return <Leaf className="w-5 h-5 text-zinc-300" />;
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-28 relative bg-zinc-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 mb-3">
            05 / Credentials
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Industry Certifications & Job Simulations
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Practical enterprise simulations and professional certifications from recognized industry organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="surface-card rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      {getCertIcon(cert.category)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 block uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-100">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-[11px] shrink-0">
                    {cert.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {cert.date}
                </span>

                <span className="text-zinc-400">
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
