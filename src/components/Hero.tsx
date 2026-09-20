import React, { useRef } from 'react';
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Database, 
  BarChart2, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  TrendingUp,
  Cpu,
  Camera,
  Upload,
  Trash2,
  Image as ImageIcon
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  userPhoto: string | null;
  onSetPhoto: (photo: string) => void;
  onRemovePhoto: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResume, 
  userPhoto, 
  onSetPhoto, 
  onRemovePhoto 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onSetPhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
    e.target.value = '';
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Tech Grid & Subtle Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)'
          }}
        />
        {/* Subtle data grid line overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status & Career Aim Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-xs">
                <TrendingUp className="w-3.5 h-3.5 text-indigo-200" />
                <span>Primary Aim: Data Analytics</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Aspiring Data Analyst</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-medium">Bareilly & Azamgarh, India</span>
              </div>
            </div>

            {/* Main Hero Headings */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Hi, I'm <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Ankush Yadav</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 font-display flex items-center gap-2 flex-wrap">
                <span className="text-indigo-600">Aspiring Data Analyst</span>
                <span className="text-slate-300 font-light">|</span>
                <span className="text-slate-700 font-semibold text-lg sm:text-xl">2nd-Year B.Tech CSE Student</span>
              </p>
            </div>

            {/* Short Professional Introduction */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              <strong className="text-slate-900 font-semibold">Data Analytics is my primary aim.</strong> As an aspiring Data Analyst, I am dedicated to exploring complex datasets, authoring optimized <span className="text-slate-900 font-semibold">SQL</span> queries, scripting <span className="text-slate-900 font-semibold">Python</span> analytics pipelines (Pandas & NumPy), and constructing interactive <span className="text-slate-900 font-semibold">Power BI</span> dashboards to deliver high-impact business insights.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-indigo-600 active:scale-95 transition-all shadow-md hover:shadow-indigo-500/20"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0077b5] bg-[#0077b5]/5 border border-[#0077b5]/20 hover:bg-[#0077b5]/10 active:scale-95 transition-all"
                aria-label="Ankush Yadav on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Micro Data Indicators / Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-slate-200/70 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl text-indigo-600">Data Analytics</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">Primary Career Aim</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-4">
                <span className="font-display font-bold text-xl sm:text-2xl text-slate-900">SQL & Python</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">Core Analytics Stack</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-4">
                <span className="font-display font-bold text-xl sm:text-2xl text-emerald-600">Power BI</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">BI Dashboards</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Photo & Clean Identity Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Profile Card Frame */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-3.5 sm:p-4">
                
                {/* Hidden File Input for Setting Photo */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />

                {userPhoto ? (
                  /* User's Set Photo with Clean Controls */
                  <div>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs">
                      <img
                        src={userPhoto}
                        alt="Ankush Yadav - Aspiring Data Analyst & 2nd-Year B.Tech CSE Student"
                        className="w-full h-auto object-cover block"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Change / Remove Photo Buttons */}
                    <div className="flex items-center justify-between gap-2 mt-3 pt-2">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Change Photo</span>
                      </button>
                      <button
                        onClick={onRemovePhoto}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-medium border border-rose-200/80 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove Photo</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Photo Removed / Empty State: Set Photo Box */
                  <div className="rounded-2xl border-2 border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50/70 p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-colors">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-3 shadow-xs">
                      <Camera className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-slate-800 text-base">
                      No Photo Set
                    </h3>
                    <p className="text-xs text-slate-500 max-w-[240px] mt-1 mb-4 leading-relaxed">
                      Photo has been removed. Click below to choose and set your photo.
                    </p>

                    <button
                      onClick={() => fileInputRef.current?.click()}
                      type="button"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all hover:scale-102"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Set Photo</span>
                    </button>

                    <button
                      onClick={() => onSetPhoto('/profile.jpg')}
                      type="button"
                      className="text-[11px] text-slate-400 hover:text-indigo-600 underline mt-3 transition-colors"
                    >
                      Or load uploaded profile.jpg
                    </button>
                  </div>
                )}

                {/* Identity & Status Information (Positioned cleanly below the photo, never covering it) */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold font-display text-slate-900 flex items-center gap-1.5">
                        <span>Ankush Yadav</span>
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 inline" />
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        Aspiring Data Analyst • 2nd Year B.Tech CSE
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Active</span>
                    </div>
                  </div>

                  {/* Key Skills Tags Below Photo */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-md border border-indigo-100">
                      Data Analytics
                    </span>
                    <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                      SQL
                    </span>
                    <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                      Python
                    </span>
                    <span className="text-[11px] font-semibold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-md border border-amber-200/80">
                      Power BI
                    </span>
                  </div>
                </div>

              </div>

              {/* Verified Meta Subtext */}
              <div className="mt-3.5 flex items-center justify-between px-3 text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  Bareilly / Azamgarh, UP
                </span>
                <span>Batch 2024–2028</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
