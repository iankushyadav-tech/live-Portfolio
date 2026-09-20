import React from 'react';
import { 
  LineChart, 
  PieChart, 
  LayoutDashboard, 
  Globe, 
  Database, 
  Check, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LineChart': return LineChart;
      case 'PieChart': return PieChart;
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Globe': return Globe;
      case 'Database': return Database;
      default: return Briefcase;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            <span>Offerings & Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Services & Expertise
          </h2>
          <div className="w-12 h-1 bg-indigo-600 rounded-full mt-3 mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Targeted technical competencies offered for internships, collaborative research, and real-world project engagements.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 hover:border-indigo-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all shadow-xs mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-200/70">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 font-mono">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          
          {/* Quick CTA Box */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-3xl p-7 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Need Custom Data Support?
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                Whether you need data extraction, Power BI visualization, or cleaning messy spreadsheets, I am ready to collaborate on innovative projects.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-indigo-600 bg-white hover:bg-indigo-50 transition-colors shadow-xs"
              >
                <span>Discuss Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
