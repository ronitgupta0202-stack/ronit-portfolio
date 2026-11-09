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
  Wrench
} from 'lucide-react';
import { skillCategories } from '../data/resumeData';

export default function Skills() {
  const renderSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-zinc-300" />;
      case 'Coffee': return <Coffee className="w-4 h-4 text-zinc-300" />;
      case 'FileCode': return <FileCode className="w-4 h-4 text-zinc-300" />;
      case 'Layout': return <Layout className="w-4 h-4 text-zinc-300" />;
      case 'Palette': return <Palette className="w-4 h-4 text-zinc-300" />;
      case 'FileJson': return <FileJson className="w-4 h-4 text-zinc-300" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-zinc-300" />;
      case 'Eye': return <Eye className="w-4 h-4 text-zinc-300" />;
      case 'PenTool': return <PenTool className="w-4 h-4 text-zinc-300" />;
      case 'Users': return <Users className="w-4 h-4 text-zinc-300" />;
      default: return <Wrench className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 relative bg-zinc-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 mb-3">
            04 / Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Categorized Technical Skills
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Structured competency matrix backed strictly by verified academic coursework, production internships, and project code.
          </p>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="surface-card rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-100">
                    {cat.category}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {cat.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-1.5 rounded bg-zinc-800/60 border border-zinc-700/60 shrink-0">
                          {renderSkillIcon(skill.icon)}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-zinc-200 truncate">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 shrink-0 ml-2">
                        {skill.level}
                      </span>
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
