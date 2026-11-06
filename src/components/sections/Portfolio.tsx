import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
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
        </motion.div>

        {/* Portfolio Grid: 1 Featured (12 cols) + 2 Smaller (6 cols each) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className={project.isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'}
            >
              <ProjectCard
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Accessible Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white text-[#17165E] rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-xl relative border border-slate-200"
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

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0F6FD9] hover:bg-[#0d61be] rounded-md transition-colors cursor-pointer"
                >
                  {t.portfolio.discussSimilar}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
