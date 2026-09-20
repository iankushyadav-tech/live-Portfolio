import React from 'react';
import { X, CheckCircle, Cpu, Layers, Sparkles, ExternalLink, ShieldCheck, PieChart } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
              {project.category}
            </span>
            <h2 className="font-display font-bold text-xl text-slate-900 mt-1">
              {project.title} <span className="text-slate-400 font-normal text-sm">| {project.subtitle}</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Project Banner Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Complete Feature Breakdown */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-display mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Complete Architecture & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => {
                const [title, desc] = feat.split(':');
                return (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
                    <p className="text-xs font-bold text-slate-900 font-display">
                      {title}
                    </p>
                    {desc && (
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        {desc.trim()}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-indigo-900 font-display">Real-World Practical Impact</p>
              <p className="text-xs text-indigo-800 mt-0.5 leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Designed & Implemented by Ankush Yadav
          </span>
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
