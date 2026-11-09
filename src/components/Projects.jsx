import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  Cpu, 
  Eye, 
  Tv, 
  X,
  Code,
  Workflow,
  Star
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch(id) {
      case 'ecobatch-ai':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'attendance-face-detection':
        return <Eye className="w-5 h-5 text-emerald-400" />;
      case 'cinema-ticket-booking':
        return <Tv className="w-5 h-5 text-blue-400" />;
      case 'industrial-approval-workflow':
        return <Workflow className="w-5 h-5 text-purple-400" />;
      case 'revunivo-ai':
        return <Star className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative bg-slate-950/70 border-t border-slate-900">
      
      {/* Background Accent Mesh */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Engineering <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Software solutions across AI optimization, real-time computer vision face detection, Java OOP application logic, and industrial workflow automation.
          </p>
        </div>

        {/* Premium Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {projects.map((project) => {
            const hasRepo = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

            return (
              <div
                key={project.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 sm:p-7 glass-card flex flex-col justify-between group transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Header: Icon, Badge, & Title */}
                  <div className="flex items-center justify-between gap-2.5 mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] sm:text-[11px] font-mono text-cyan-300 font-semibold truncate">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 sm:mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono text-cyan-400/90 mb-3.5 sm:mb-4">
                    {project.tagline}
                  </p>

                  {/* Short Overview */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="mb-5 sm:mb-6">
                    <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 sm:py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[11px] sm:text-xs font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Checklist Highlights */}
                  <div className="space-y-2 mb-5 sm:mb-6 pt-3.5 sm:pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Key Features
                    </div>
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-3.5 sm:pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                  {hasRepo ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white text-xs font-mono font-medium transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>View Code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800/80 text-[10px] sm:text-[11px] font-mono text-slate-400">
                      <Code className="w-3.5 h-3.5 text-cyan-400/70 shrink-0" />
                      <span>Featured Project</span>
                    </span>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-all cursor-pointer p-1"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[88vh] overflow-y-auto glass-panel text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3 sm:mb-4 pr-8">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                {getProjectIcon(selectedProject.id)}
              </div>
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {selectedProject.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">{selectedProject.title}</h3>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs font-mono text-cyan-400 mb-4">{selectedProject.tagline}</p>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-5 sm:mb-6">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 sm:mb-3">
                Full Key Capabilities:
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5 sm:mb-6">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5 sm:mb-3">
                Supported Technologies:
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] sm:text-xs font-mono text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
              {selectedProject.githubUrl && selectedProject.githubUrl.trim().length > 0 ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <GithubIcon className="w-4 h-4 shrink-0" />
                  <span>View Code on GitHub</span>
                </a>
              ) : (
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span>Repository: Private / Configurable</span>
                </span>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono font-medium hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
