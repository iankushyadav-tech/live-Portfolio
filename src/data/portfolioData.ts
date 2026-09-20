import { SkillItem, ProjectItem, ServiceItem, LearningItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ankush Yadav',
  role: 'Aspiring Data Analyst | 2nd-Year B.Tech CSE',
  title: 'Aspiring Data Analyst & 2nd-Year B.Tech CSE Student',
  aim: 'Data Analytics',
  aimStatement: 'Data Analytics is my primary aim and career aspiration.',
  collegeYear: '2nd Year',
  degree: 'B.Tech – Computer Science Engineering',
  currentLocation: 'Bareilly, Uttar Pradesh, India',
  permanentLocation: 'Azamgarh, Uttar Pradesh, India',
  displayLocation: 'India (Bareilly / Azamgarh)',
  email: 'ankushyadav9580@gmail.com',
  phone: '+91 95803 76241',
  linkedin: 'https://www.linkedin.com/in/hey-ankush-yadav-09b691368/',
  heroBio: 'Data analytics is my ultimate career aim. As an aspiring Data Analyst and 2nd-year B.Tech CSE student, I focus on SQL querying, Python data analytics (Pandas, NumPy), and interactive Power BI dashboards to turn complex datasets into actionable business intelligence.',
  aboutBio: 'Data analytics is my primary aim and passion. As a 2nd-year B.Tech Computer Science Engineering student, I am dedicated to mastering exploratory data analysis (EDA), relational database management (SQL), Python scripting, and executive-ready Power BI reporting. I love digging into datasets to uncover trends, optimize query performance, and build analytics dashboards that power data-backed decisions.',
  careerGoal: 'Data Analytics is my primary aim. Aspiring to contribute as a Data Analyst / Business Intelligence Intern, creating scalable analytics pipelines, automated reporting workflows, and insight-driven decision systems.'
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    level: 82,
    experienceLevel: 'Intermediate',
    icon: 'Terminal',
    description: 'Data manipulation, automation scripting, Pandas, NumPy, and logic implementation.',
    tags: ['Pandas', 'NumPy', 'OOP', 'Data Cleaning']
  },
  {
    name: 'SQL',
    category: 'Programming',
    level: 85,
    experienceLevel: 'Proficient',
    icon: 'Database',
    description: 'Complex queries, multi-table joins, subqueries, aggregations, window functions, and database design.',
    tags: ['PostgreSQL', 'MySQL', 'Joins', 'Aggregations', 'Indexes']
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    level: 75,
    experienceLevel: 'Intermediate',
    icon: 'Code2',
    description: 'Modern ES6+ syntax, asynchronous programming, DOM interactions, and dynamic web interfaces.',
    tags: ['ES6+', 'Async/Await', 'DOM APIs', 'Event Handling']
  },

  // Data Analytics
  {
    name: 'Data Analytics',
    category: 'Data Analytics',
    level: 84,
    experienceLevel: 'Proficient',
    icon: 'TrendingUp',
    description: 'Exploratory data analysis (EDA), anomaly detection, correlation analysis, and business metrics.',
    tags: ['EDA', 'Pattern Recognition', 'Hypothesis Testing', 'Data Hygiene']
  },
  {
    name: 'Excel',
    category: 'Data Analytics',
    level: 88,
    experienceLevel: 'Proficient',
    icon: 'FileSpreadsheet',
    description: 'Advanced lookup formulas (XLOOKUP, VLOOKUP), pivot tables, data modeling, and conditional logic.',
    tags: ['Pivot Tables', 'XLOOKUP', 'Data Cleaning', 'Formula Auditing']
  },

  // Data Visualization
  {
    name: 'Power BI',
    category: 'Data Visualization',
    level: 80,
    experienceLevel: 'Intermediate',
    icon: 'BarChart3',
    description: 'Interactive dashboard creation, KPI cards, DAX calculation measures, and data relationships.',
    tags: ['DAX', 'Data Modeling', 'KPI Cards', 'Visual Storytelling']
  },
  {
    name: 'Data Visualization',
    category: 'Data Visualization',
    level: 85,
    experienceLevel: 'Proficient',
    icon: 'PieChart',
    description: 'Designing intuitive chart hierarchies, visual clarity, color psychology, and audience-tailored metrics.',
    tags: ['Chart Archetypes', 'Information Hierarchy', 'Visual Polish']
  },

  // Web Technologies
  {
    name: 'HTML',
    category: 'Web Technologies',
    level: 90,
    experienceLevel: 'Proficient',
    icon: 'FileCode',
    description: 'Semantic markup, accessibility fundamentals, clean DOM structure, and SEO standards.',
    tags: ['Semantic HTML5', 'Accessibility', 'Meta Standards']
  },
  {
    name: 'CSS',
    category: 'Web Technologies',
    level: 85,
    experienceLevel: 'Proficient',
    icon: 'Palette',
    description: 'Flexbox, CSS Grid layouts, responsive typography, media queries, and Tailwind CSS utility styling.',
    tags: ['Flexbox', 'CSS Grid', 'Tailwind CSS', 'Responsive UI']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'smartfin',
    title: 'SmartFin',
    subtitle: 'Student Finance Management System',
    category: 'FinTech & Analytics',
    description: 'A FinTech dashboard designed to help students track income, expenses, savings, financial goals and affordability.',
    image: '/projects/smartfin.jpg',
    features: [
      'Expense Tracking: Real-time logging and categorization of student daily expenditures.',
      'Spending Analysis: Automated visual breakdown identifying major outflow clusters.',
      'Financial Goals: Target-based milestone tracker with progress indicators.',
      'Affordability Checker: Dynamic calculation engine assessing budget feasibility before purchases.',
      'Interactive Dashboard: Centralized financial overview featuring metric cards and trend curves.',
      'Detailed Reports: Monthly spending summaries and exportable analytical statements.'
    ],
    technologies: ['Python', 'SQL', 'Data Analytics', 'Power BI / React', 'Tailwind CSS'],
    highlights: [
      'Optimized query structure for instant monthly aggregations',
      'Categorical expense clustering algorithms',
      'Tailored for student monthly allowances and irregular income streams'
    ],
    impact: 'Helps students maintain fiscal discipline and identify non-essential spending leaks with zero friction.'
  },
  {
    id: 'yatratech',
    title: 'YatraTech',
    subtitle: 'AI-Powered Smart Tourism Ecosystem',
    category: 'Smart Tourism & Platform Ecosystem',
    description: 'A smart tourism platform designed to improve travel planning and provide services such as trip planning, hotels, travel, tourist guidance, safety and local businesses.',
    image: '/projects/yatratech.jpg',
    features: [
      'Trip Planner: Intelligent multi-day itinerary generation customized to traveler preferences.',
      'Hotel & Travel: Integrated discovery and comparison engine for accommodations and transit routes.',
      'Tourist Guide: Curated cultural heritage, local secrets, and landmark navigational tips.',
      'Tourist Safety: Emergency hotlines, verified local authorities, and real-time safe zone markers.',
      'Budget Planning: Expense forecaster tailored to regional travel costs and seasonal shifts.',
      'Reviews & Ratings: Verified community feedback and authentic local business showcases.'
    ],
    technologies: ['Python', 'Web Development', 'SQL Database', 'REST APIs', 'Data Modeling'],
    highlights: [
      'Multi-variable destination matching algorithm',
      'Integrated tourist safety alerts and verification checks',
      'Local business onboarding framework promoting regional tourism'
    ],
    impact: 'Elevates regional tourism by bridging travelers with vetted local businesses while ensuring seamless safety.'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    shortDesc: 'Uncovering meaningful business insights, trend identification, and pattern recognition from raw relational datasets.',
    icon: 'LineChart',
    deliverables: [
      'Exploratory Data Analysis (EDA)',
      'Data cleaning and anomaly identification',
      'Statistical summaries & key driver analysis',
      'Actionable recommendations based on empirical findings'
    ]
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    shortDesc: 'Transforming complex data points into intuitive, executive-ready charts and visual stories that drive decision-making.',
    icon: 'PieChart',
    deliverables: [
      'Clear, high-contrast visual hierarchies',
      'Audience-specific reporting visuals',
      'Interactive chart widgets & drill-downs',
      'Consistent design standards for enterprise metrics'
    ]
  },
  {
    id: 'dashboard-development',
    title: 'Dashboard Development',
    shortDesc: 'Designing end-to-end interactive dashboards using Power BI and modern web UI frameworks for automated KPI tracking.',
    icon: 'LayoutDashboard',
    deliverables: [
      'Interactive Power BI report architecture',
      'Dynamic DAX measures & customized KPI tiles',
      'Automated refresh workflows & filter controls',
      'Mobile-responsive dashboard views'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Crafting responsive, clean, and accessible web interfaces using semantic HTML, modern CSS, and JavaScript.',
    icon: 'Globe',
    deliverables: [
      'Responsive layouts across mobile, tablet, and desktop',
      'Modern UI/UX implementation with Tailwind CSS',
      'Clean component structure and performance optimization',
      'Seamless client-side state handling and interactivity'
    ]
  },
  {
    id: 'sql-data-management',
    title: 'SQL Data Management',
    shortDesc: 'Structuring relational schemas, writing efficient queries, and managing tabular datasets for reliable extraction.',
    icon: 'Database',
    deliverables: [
      'Relational database schema modeling',
      'Complex joins, CTEs, and window functions',
      'Query execution optimization and indexing practice',
      'Data extraction, transformation, and load (ETL) routines'
    ]
  }
];

export const LEARNING_DATA: LearningItem[] = [
  {
    id: 'btech-cse',
    title: 'B.Tech Computer Science Engineering',
    period: '2024 – Present (2nd Year)',
    status: 'In Progress',
    category: 'Undergraduate Academic Degree',
    summary: 'Enrolled in 2nd Year Computer Science Engineering. Actively mastering core subjects including Data Structures & Algorithms, Database Management Systems (DBMS), Discrete Mathematics, and Computer Architecture.',
    skillsAcquired: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'System Design Basics']
  },
  {
    id: 'data-analytics-learning',
    title: 'Data Analytics Learning',
    period: 'Ongoing Specialization',
    status: 'In Progress',
    category: 'Core Career Focus',
    summary: 'Systematically developing end-to-end analytical competencies: framing business hypotheses, performing exploratory analysis, cleaning messy datasets, and deriving actionable statistical interpretations.',
    skillsAcquired: ['Exploratory Data Analysis', 'Statistical Inference', 'Data Cleaning', 'Feature Insights']
  },
  {
    id: 'sql-database-practice',
    title: 'SQL & Database Practice',
    period: 'Active Practical Regimen',
    status: 'Active Practice',
    category: 'Relational Databases',
    summary: 'Daily hands-on practice solving real-world query challenges involving multi-table joins, grouped aggregations, window functions, conditional CASE statements, and schema normalization.',
    skillsAcquired: ['PostgreSQL', 'MySQL', 'Subqueries', 'Window Functions', 'Schema Normalization']
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    period: 'Foundational & Applied',
    status: 'Active Practice',
    category: 'Programming & Automation',
    summary: 'Leveraging Python for automated data parsing, algorithmic problem solving, and exploratory analysis using Pandas and NumPy libraries for tabular manipulation.',
    skillsAcquired: ['Python 3', 'Pandas', 'NumPy', 'File I/O', 'Data Transformation Scripts']
  },
  {
    id: 'powerbi-dashboard',
    title: 'Power BI Dashboard Development',
    period: 'Applied Project Work',
    status: 'In Progress',
    category: 'Business Intelligence',
    summary: 'Building interactive reports from scratch: setting up data relationships (star schema), authoring custom DAX calculated measures, and optimizing canvas layouts for effortless user exploration.',
    skillsAcquired: ['Power BI Desktop', 'DAX Measures', 'Relationship Modeling', 'Report Distribution']
  },
  {
    id: 'hackathon-projects',
    title: 'Hackathon & Project Development',
    period: 'Continuous Practical Application',
    status: 'Active Practice',
    category: 'Applied Innovation',
    summary: 'Applying engineering theory into working prototypes like SmartFin and YatraTech. Collaborating on problem statements, refining user stories, and iterating on clean user interfaces.',
    skillsAcquired: ['Full-stack Prototyping', 'Rapid Problem Solving', 'Product Thinking', 'Team Collaboration']
  }
];
