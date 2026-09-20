import React from 'react';
import { Linkedin, Mail, Phone, ArrowUp, Database, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  userPhoto?: string | null;
}

export const Footer: React.FC<FooterProps> = ({ userPhoto }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5 text-white font-display font-bold text-lg">
              {userPhoto ? (
                <img 
                  src={userPhoto} 
                  alt="Ankush Yadav" 
                  className="w-8 h-8 rounded-lg object-cover object-center border border-slate-700 shadow-xs"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                  AY
                </span>
              )}
              <span>{PERSONAL_INFO.name}</span>
            </a>
            <p className="text-xs text-slate-400 mt-1.5 max-w-sm">
              Aspiring Data Analyst • 2nd-Year B.Tech CSE Student • Primary Aim: Data Analytics with SQL, Python & Power BI.
            </p>
          </div>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
              aria-label="Call Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all ml-2"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Tagline */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 Ankush Yadav. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Designed for Data Analytics & Technology Impact</span>
            <span>•</span>
            <span className="text-indigo-400">Bareilly / Azamgarh, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
