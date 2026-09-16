import React from 'react';
import { 
  Code2, 
  Coffee, 
  FileCode, 
  Layout, 
  Palette, 
  FileJson, 
  Sparkles, 
  Eye, 
  PenTool, 
  Users, 
  Wrench,
  Check
} from 'lucide-react';
import { skillCategories } from '../data/resumeData';

export default function Skills() {
  const renderSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'Coffee': return <Coffee className="w-4 h-4 text-amber-400" />;
      case 'FileCode': return <FileCode className="w-4 h-4 text-yellow-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-orange-400" />;
      case 'Palette': return <Palette className="w-4 h-4 text-pink-400" />;
      case 'FileJson': return <FileJson className="w-4 h-4 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-emerald-400" />;
      case 'Eye': return <Eye className="w-4 h-4 text-sky-400" />;
      case 'PenTool': return <PenTool className="w-4 h-4 text-purple-400" />;
      case 'Users': return <Users className="w-4 h-4 text-teal-400" />;
      default: return <Wrench className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Structured skill sets backed strictly by verified coursework, internships, and project development.
          </p>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-8 glass-card flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>{cat.category}</span>
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 bg-slate-950 px-2 sm:px-2.5 py-1 rounded-md border border-slate-800 shrink-0">
                    {cat.skills.length} Skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 sm:mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform shrink-0">
                          {renderSkillIcon(skill.icon)}
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
