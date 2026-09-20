import React, { useState } from 'react';
import { 
  Database, 
  Terminal, 
  Code2, 
  TrendingUp, 
  FileSpreadsheet, 
  BarChart3, 
  PieChart, 
  FileCode, 
  Palette, 
  Check, 
  Sparkles,
  Search,
  Filter,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSnippetTab, setActiveSnippetTab] = useState<'sql' | 'python' | 'dax'>('sql');

  const categories = ['All', 'Programming', 'Data Analytics', 'Data Visualization', 'Web Technologies'];

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Database': return Database;
      case 'Code2': return Code2;
      case 'TrendingUp': return TrendingUp;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'BarChart3': return BarChart3;
      case 'PieChart': return PieChart;
      case 'FileCode': return FileCode;
      case 'Palette': return Palette;
      default: return Database;
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'Programming':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Data Analytics':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Data Visualization':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Web Technologies':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#fafbfd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Skills & Competencies
          </h2>
          <div className="w-12 h-1 bg-indigo-600 rounded-full mt-3 mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            With <strong className="text-slate-900 font-semibold">Data Analytics as my primary aim</strong>, my technical competencies are centered around structured SQL query optimization, Python data analytics (Pandas & NumPy), exploratory analysis (EDA), and interactive Power BI business intelligence dashboards.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIcon(skill.icon);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getCategoryBadgeColor(skill.category)}`}>
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name & Experience Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 font-mono">
                      {skill.experienceLevel}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Progress Indicator */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-slate-500">Proficiency Level</span>
                      <span className="font-semibold text-slate-700">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium text-slate-600 bg-slate-100/80 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Data Analyst In-Action Interactive Snippet Box */}
        <div className="bg-slate-900 text-slate-200 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Data Analyst Code & Query Practice
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                Practical Query & Script Execution
              </h3>
            </div>

            {/* Tab Switches */}
            <div className="inline-flex bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 self-start sm:self-auto">
              <button
                onClick={() => setActiveSnippetTab('sql')}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeSnippetTab === 'sql'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SQL Analytics Query
              </button>
              <button
                onClick={() => setActiveSnippetTab('python')}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeSnippetTab === 'python'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Python (Pandas)
              </button>
              <button
                onClick={() => setActiveSnippetTab('dax')}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeSnippetTab === 'dax'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Power BI (DAX Measure)
              </button>
            </div>
          </div>

          {/* Snippet Display */}
          <div className="bg-slate-950/70 rounded-2xl p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800/80">
            {activeSnippetTab === 'sql' && (
              <pre className="text-emerald-400">
                <code>{`-- Student Monthly Expense Cohort Analysis
SELECT 
    DATE_TRUNC('month', transaction_date) AS billing_cycle,
    category,
    COUNT(transaction_id) AS total_transactions,
    ROUND(SUM(amount), 2) AS total_spent,
    ROUND(AVG(amount), 2) AS avg_ticket_size,
    ROUND(SUM(amount) * 100.0 / SUM(SUM(amount)) OVER (PARTITION BY DATE_TRUNC('month', transaction_date)), 2) AS pct_of_budget
FROM student_expenses
WHERE status = 'settled'
GROUP BY 1, 2
HAVING SUM(amount) > 0
ORDER BY billing_cycle DESC, total_spent DESC;`}</code>
              </pre>
            )}

            {activeSnippetTab === 'python' && (
              <pre className="text-blue-300">
                <code>{`import pandas as pd
import numpy as np

# Load and sanitize transaction feed
df = pd.read_csv('travel_tourism_metrics.csv')

# Calculate destination affordability rating & safety index
def evaluate_destination(row):
    budget_score = np.clip(100 - (row['avg_daily_cost'] / 50.0), 0, 100)
    safety_weight = row['verified_safety_index'] * 0.4
    return (budget_score * 0.6) + safety_weight

df['recommendation_score'] = df.apply(evaluate_destination, axis=1)
top_destinations = df.sort_values(by='recommendation_score', ascending=False).head(5)
print(top_destinations[['destination', 'city', 'recommendation_score']])`}</code>
              </pre>
            )}

            {activeSnippetTab === 'dax' && (
              <pre className="text-amber-300">
                <code>{`// Power BI DAX: Monthly Savings Target Adherence Rate
Monthly Savings Adherence % = 
VAR TotalTarget = SUM(FinancialGoals[TargetAmount])
VAR TotalSaved = CALCULATE(
    SUM(StudentSavings[Amount]),
    USERELATIONSHIP(Calendar[Date], StudentSavings[DepositDate])
)
RETURN
    IF(
        TotalTarget > 0,
        DIVIDE(TotalSaved, TotalTarget, 0) * 100,
        0
    )`}</code>
              </pre>
            )}
          </div>
          
          <p className="text-[11px] text-slate-400 font-mono mt-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Verified syntax and structure applied in SmartFin & YatraTech project workflows.
          </p>
        </div>

      </div>
    </section>
  );
};
