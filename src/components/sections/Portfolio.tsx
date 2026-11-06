import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { getProjectsData, ProjectItem } from '../../data/projects.ts';
import { ProjectCard } from '../ui/ProjectCard.tsx';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const Portfolio: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const projects = getProjectsData(lang);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="scroll-section bg-[#17165E] text-white py-20 md:py-28 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-wide text-[#1685F7] uppercase mb-2">
            {t.portfolio.kicker}
          </p>
          <h2
            id="portfolio-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
          >
            {t.portfolio.title}
          </h2>
          <p className="mt-4 text-base text-white/80 leading-relaxed">
            {t.portfolio.description}
          </p>
          <p className="mt-2 text-xs text-white/55">
            {t.portfolio.disclaimer}
          </p>
        </div>

        {/* Portfolio Grid: 1 Featured (12 cols) + 2 Smaller (6 cols each) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="animate-modal-in bg-white text-[#17165E] rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-xl relative border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#17165E] rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#0F6FD9] cursor-pointer"
              aria-label={t.portfolio.closeModal}
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1">
                <span className="text-[#0F6FD9] font-semibold">{selectedProject.badgeLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.category}</span>
              </div>
              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-[#17165E]">
                {selectedProject.name}
              </h3>
            </div>

            <p className="mt-4 text-base text-[#17165E]/85 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Architecture & Highlights */}
            <div className="mt-6 pt-5 border-t border-slate-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17165E]/70 mb-3">
                {t.portfolio.craftDetails}
              </h4>
              <ul className="space-y-2.5 text-sm text-[#17165E]/85">
                {selectedProject.designHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#0F6FD9] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Strip */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
                {selectedProject.techTags.map((tech) => (
                  <span key={tech} className="bg-[#F6F8FC] border border-slate-200 px-2.5 py-1 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0F6FD9] hover:bg-[#0d61be] rounded-md transition-colors cursor-pointer"
              >
                {t.portfolio.discussSimilar}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
