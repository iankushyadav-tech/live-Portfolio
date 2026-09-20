import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, LEARNING_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">• Ankush Yadav (2nd Year B.Tech CSE)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-600" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:space-y-6 text-slate-800 font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-indigo-600 mt-1">
              {PERSONAL_INFO.role}
            </p>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.displayLocation}
              </span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-indigo-600">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </a>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.phone}
              </span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-indigo-600">
                <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                linkedin.com/in/hey-ankush-yadav
              </a>
            </div>
          </div>

          {/* Professional Objective */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-2.5 font-display">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Aspiring Data Analyst</strong> with a dedicated career aim in Data Analytics and Business Intelligence. Second-year Computer Science Engineering undergraduate combining relational database expertise (SQL), Python analytical scripting (Pandas, NumPy), and interactive Power BI dashboard modeling. Eager to contribute to data analytics internships and projects to unlock actionable insights, build robust reporting workflows, and support data-backed decision-making.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3 font-display">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Bachelor of Technology (B.Tech) – Computer Science Engineering
                </h3>
                <p className="text-xs text-slate-600">
                  Affiliated Technical University • Bareilly, Uttar Pradesh, India
                </p>
              </div>
              <div className="text-xs font-mono font-medium text-indigo-600 sm:text-right">
                2024 – 2028 (Currently in 2nd Year)
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Relevant Coursework: Database Management Systems (DBMS), Data Structures & Algorithms, Object-Oriented Programming, Computer Organization, Mathematics for Computing.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3 font-display">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-slate-800">Programming Languages:</span>{' '}
                <span className="text-slate-600">Python, SQL, JavaScript (ES6+)</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800">Data Analytics:</span>{' '}
                <span className="text-slate-600">Exploratory Data Analysis (EDA), Advanced Excel (XLOOKUP, Pivots)</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800">Business Intelligence:</span>{' '}
                <span className="text-slate-600">Power BI, DAX Measures, KPI Modeling, Data Storytelling</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800">Web Technologies:</span>{' '}
                <span className="text-slate-600">HTML5, CSS3, Tailwind CSS, Responsive Web Design</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3 font-display">
              Key Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="text-sm font-bold text-slate-900">
                      {proj.title} <span className="font-normal text-slate-500 text-xs">| {proj.subtitle}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{proj.technologies.join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside text-xs text-slate-600 pl-1 space-y-0.5">
                    {proj.features.slice(0, 3).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Learning & Academic Practice */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3 font-display">
              Learning & Development Journey
            </h2>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>SQL & Database Practice:</strong> Formulating multi-table joins, subqueries, grouping aggregations, and schema normalizations on MySQL/PostgreSQL environments.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Python for Analytics:</strong> Authoring cleaning and parsing scripts with Pandas and NumPy for tabular and irregular data distributions.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>Power BI Visual Modeling:</strong> Designing executive dashboards, implementing star schemas, and writing dynamic DAX calculated measures.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Ankush Yadav • B.Tech CSE Portfolio Resume</span>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-indigo-600 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
