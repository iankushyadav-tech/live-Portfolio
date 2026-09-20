import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  TrendingUp, 
  MapPin, 
  Database, 
  FileSpreadsheet, 
  Code2, 
  LineChart,
  Compass,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const infoCards = [
    {
      label: 'Education',
      value: PERSONAL_INFO.degree,
      detail: 'Computer Science & Engineering',
      icon: GraduationCap,
      color: 'from-blue-500/10 to-indigo-500/10 text-indigo-600 border-indigo-100'
    },
    {
      label: 'Current Level',
      value: '2nd Year',
      detail: 'Undergraduate Program',
      icon: Calendar,
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-100'
    },
    {
      label: 'Primary Aim',
      value: 'Data Analytics',
      detail: 'Aspiring Data Analyst • SQL, Python, Power BI',
      icon: TrendingUp,
      color: 'from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-100'
    },
    {
      label: 'Location',
      value: 'India',
      detail: 'Bareilly (Current) • Azamgarh (Permanent)',
      icon: MapPin,
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-100'
    }
  ];

  const focusPillars = [
    {
      title: 'Analytical Mindset',
      desc: 'Approaching data not as static rows, but as narratives of user behavior, business operations, and optimization opportunities.',
      icon: LineChart
    },
    {
      title: 'Database Precision',
      desc: 'Formulating clean, relational queries, structured schemas, and performant aggregations that empower reliable reporting.',
      icon: Database
    },
    {
      title: 'Visual Storytelling',
      desc: 'Crafting intuitive Power BI dashboards that communicate immediate clarity to both technical and executive stakeholders.',
      icon: Layers
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 rounded-full mt-3 mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Data Analytics is my primary aim.</strong> As an aspiring Data Analyst and 2nd-year B.Tech Computer Science Engineering student, I combine core engineering fundamentals with focused competencies in SQL querying, Python analytics, and Power BI dashboards to transform data into meaningful business intelligence.
          </p>
        </div>

        {/* 4 Information Cards (Requested in Prompt) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {card.label}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border bg-gradient-to-br ${card.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">
                    {card.value}
                  </h3>
                </div>
                <p className="text-xs font-medium text-slate-500 mt-3 pt-3 border-t border-slate-200/60">
                  {card.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Narrative & Philosophy Breakdown */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                My Core Aim: Data Analytics
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Aspiring to Turn Complex Data into Strategic Business Decisions
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Data Analytics is my true professional destination. By combining rigorous Computer Science coursework in databases, algorithms, and logic with applied statistical workflows in Python (Pandas/NumPy), SQL data querying, and Power BI modeling, I focus on turning raw datasets into high-clarity narratives.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                As an aspiring Data Analyst, my immediate objective is to contribute to data analytics and business intelligence internships, building automated pipelines, optimizing metric calculation, and delivering insightful stakeholder reports.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {focusPillars.map((pillar, pIdx) => {
                const PIcon = pillar.icon;
                return (
                  <div 
                    key={pIdx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                        <PIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white font-display mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
