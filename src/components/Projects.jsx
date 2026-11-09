import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  Cpu, 
  Eye, 
  Tv, 
  X,
  Code,
  Workflow,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const getProjectIcon = (id) => {
    switch(id) {
      case 'ecobatch-ai':
        return <Sparkles className="w-5 h-5 text-zinc-200" />;
      case 'attendance-face-detection':
        return <Eye className="w-5 h-5 text-zinc-200" />;
      case 'cinema-ticket-booking':
        return <Tv className="w-5 h-5 text-zinc-200" />;
      case 'industrial-approval-workflow':
        return <Workflow className="w-5 h-5 text-zinc-200" />;
      case 'revunivo-ai':
        return <Cpu className="w-5 h-5 text-zinc-200" />;
      default:
        return <Code className="w-5 h-5 text-zinc-200" />;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative bg-zinc-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800 mb-3">
            03 / Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Real software systems spanning artificial intelligence process optimization, computer vision facial recognition, Java object-oriented design, and industrial workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch text-left">
          {projects.map((project) => {
            const hasRepo = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

            return (
              <div
                key={project.id}
                className="surface-card rounded-xl p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 font-medium">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-white transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-zinc-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                      Key Highlights
                    </span>
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                  {hasRepo ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-mono font-medium transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                      <span>View Code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      <Code className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Featured Solution</span>
                    </span>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer py-1"
                  >
                    <span>Full Specs</span>
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
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-zinc-900 border border-zinc-700/80 rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4 pr-10">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-200 shrink-0">
                {getProjectIcon(selectedProject.id)}
              </div>
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {selectedProject.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-1">{selectedProject.title}</h3>
              </div>
            </div>

            <p className="text-xs font-mono text-zinc-400 mb-4">{selectedProject.tagline}</p>
            
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold mb-3">
                Key Features & Capabilities:
              </span>
              <ul className="space-y-2.5">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold mb-3">
                Supported Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-zinc-800 flex items-center justify-between flex-wrap gap-3">
              {selectedProject.githubUrl && selectedProject.githubUrl.trim().length > 0 ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs font-mono transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-zinc-400" />
                  <span>Repository Configurable</span>
                </span>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono transition-colors"
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
