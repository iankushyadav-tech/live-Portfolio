import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Database, 
  Terminal, 
  BarChart3, 
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { LEARNING_DATA } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'btech-cse': return GraduationCap;
      case 'data-analytics-learning': return BookOpen;
      case 'sql-database-practice': return Database;
      case 'python-programming': return Terminal;
      case 'powerbi-dashboard': return BarChart3;
      case 'hackathon-projects': return Award;
      default: return BookOpen;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#fafbfd] border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
            <span>Academic & Skill Progression</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Learning & Development
          </h2>
          <div className="w-12 h-1 bg-indigo-600 rounded-full mt-3 mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent chronicle of my undergraduate engineering journey, hands-on data practice, and applied project milestones.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine line on md+ screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {LEARNING_DATA.map((item, index) => {
              const IconComponent = getIcon(item.id);
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Milestone Node Icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 w-10 h-10 rounded-full bg-white border-2 border-indigo-600 text-indigo-600 items-center justify-center shadow-xs z-10">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Card Content */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${isEven ? 'md:pl-0 md:pr-4' : 'md:pr-0 md:pl-4'}`}>
                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all group">
                      
                      {/* Mobile Node Header */}
                      <div className="flex md:hidden items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono font-medium text-indigo-600">
                          {item.period}
                        </span>
                      </div>

                      {/* Header row for desktop */}
                      <div className="hidden md:flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {item.category}
                        </span>
                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Competencies Acquired */}
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                          Key Practice & Competencies
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skillsAcquired.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
