import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  Compass, 
  ArrowUpRight,
  ShieldCheck,
  PiggyBank
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-indigo-600 rounded-full mt-3 mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real-world software and analytical solutions designed to solve concrete problems in student personal finance and intelligent tourism.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={project.id}
                className="bg-[#fafbfd] rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image Showcase with Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-xs">
                        {project.category}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-center">
                        {isFirst ? <PiggyBank className="w-4 h-4 text-emerald-400" /> : <Compass className="w-4 h-4 text-cyan-400" />}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  {/* Project Content Body */}
                  <div className="p-6 sm:p-8">
                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <h3 className="font-display font-bold text-2xl text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>
                      <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key Features Grid */}
                    <div className="mb-6 bg-white rounded-2xl p-4 border border-slate-200/70">
                      <p className="text-xs font-bold text-slate-800 font-display uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        Core System Features
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                            <span className="truncate">{feat.split(':')[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-medium text-slate-700 bg-slate-100/90 px-2.5 py-1 rounded-lg border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-white border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 shadow-xs group/btn"
                  >
                    <span>View Project Details</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
