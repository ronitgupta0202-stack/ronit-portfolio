import React from 'react';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo, education, experience, projects, skillCategories, certifications, languages } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden glass-panel">
        
        {/* Modal Top Actions Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
              Ronit_Gupta_Resume.pdf
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold transition-colors shadow-sm"
              title="Print Resume or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0 text-left">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl font-extrabold text-white print:text-black">{personalInfo.name}</h1>
            <p className="text-cyan-400 font-semibold text-base mt-1 print:text-gray-800">{personalInfo.headline}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3 print:text-gray-600">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black" /> {personalInfo.location}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400 print:text-black" /> +91 {personalInfo.phone}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><GithubIcon className="w-3.5 h-3.5 text-cyan-400 print:text-black" /> GitHub: {personalInfo.githubUsername}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 print:text-black border-b border-slate-800 print:border-black pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-900">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 print:text-black border-b border-slate-800 print:border-black pb-1">
              EDUCATION
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline font-bold text-sm text-slate-100 print:text-black">
                  <span>{edu.degree}</span>
                  <span className="text-xs font-mono text-cyan-400 print:text-gray-700">{edu.period}</span>
                </div>
                <p className="text-xs text-slate-400 print:text-gray-700">{edu.institution} — {edu.location}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 print:text-black border-b border-slate-800 print:border-black pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-baseline font-bold text-sm text-slate-100 print:text-black">
                    <span>{exp.role} <span className="font-normal text-slate-400 print:text-gray-600">| {exp.company}</span></span>
                    <span className="text-xs font-mono text-cyan-400 print:text-gray-700">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-900">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 print:text-black border-b border-slate-800 print:border-black pb-1">
              KEY PROJECTS
            </h2>
            <div className="space-y-5">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-baseline font-bold text-sm text-slate-100 print:text-black">
                    <span>{proj.title} <span className="font-normal text-xs text-cyan-400 print:text-gray-700">– {proj.tagline}</span></span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-900">{proj.description}</p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-400 print:text-gray-800">
                    {proj.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 print:text-black border-b border-slate-800 print:border-black pb-1">
              SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx}>
                  <span className="font-bold text-slate-200 print:text-black block mb-1">{cat.category}:</span>
                  <span className="text-slate-400 print:text-gray-800">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 print:text-black border-b border-slate-800 print:border-black pb-1">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-900">
              {certifications.map((c, idx) => (
                <li key={idx}>
                  <span className="font-bold text-slate-200 print:text-black">{c.title}</span> ({c.subtitle}) — {c.issuer}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 print:text-black border-b border-slate-800 print:border-black pb-1">
              LANGUAGES
            </h2>
            <div className="flex gap-4 text-xs text-slate-300 print:text-gray-900">
              {languages.map((l, idx) => (
                <span key={idx}>
                  <strong>{l.name}:</strong> {l.proficiency}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
