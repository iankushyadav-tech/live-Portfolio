import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(() => {
    return localStorage.getItem('ankush_portfolio_photo');
  });

  const handleSetPhoto = (newPhoto: string) => {
    setUserPhoto(newPhoto);
    try {
      localStorage.setItem('ankush_portfolio_photo', newPhoto);
    } catch (e) {
      console.warn('Could not persist photo to localStorage', e);
    }
  };

  const handleRemovePhoto = () => {
    setUserPhoto(null);
    try {
      localStorage.removeItem('ankush_portfolio_photo');
    } catch (e) {
      console.warn('Could not remove photo from localStorage', e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd] text-slate-800 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        userPhoto={userPhoto}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          userPhoto={userPhoto}
          onSetPhoto={handleSetPhoto}
          onRemovePhoto={handleRemovePhoto}
        />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Learning Journey / Experience Section */}
        <LearningJourney />

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer userPhoto={userPhoto} />

      {/* Curriculum Vitae / Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
