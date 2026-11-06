import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../../data/projects.ts';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isFeatured = project.isFeatured;

  return (
    <motion.article
      whileHover={{ y: -3, boxShadow: '0 12px 28px -6px rgba(0, 0, 0, 0.35)' }}
      transition={{ duration: 0.2 }}
      className={`group bg-[#1a1969] border border-white/15 rounded-lg overflow-hidden flex flex-col justify-between transition-colors hover:border-[#1685F7] ${
        isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
      }`}
    >
      <div className={isFeatured ? 'grid grid-cols-1 lg:grid-cols-12 items-center' : 'flex flex-col'}>
        {/* Flat Minimalist CSS Thumbnail */}
        <div
          className={`p-4 sm:p-6 bg-[#131252] border-b lg:border-b-0 ${
            isFeatured ? 'lg:col-span-7 lg:border-r border-white/10' : 'border-white/10'
          }`}
        >
          {/* Browser Window Frame */}
          <div className="bg-white rounded-md shadow-xs overflow-hidden border border-slate-200">
            {/* Browser Window Top Bar */}
            <div className="bg-slate-100 border-b border-slate-200 px-3 py-1.5 flex items-center gap-2">
              <div className="flex items-center gap-1" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
              <div className="flex-1 bg-white rounded px-2 py-0.5 text-[10px] text-slate-500 font-mono flex items-center gap-1 truncate">
                <Globe size={9} className="text-slate-400" />
                <span>preview.wecrafty.digital/{project.id}</span>
              </div>
            </div>

            {/* Flat CSS Mockup Content */}
            <div
              className={`p-5 text-[#17165E] flex flex-col justify-between ${
                isFeatured ? 'min-h-[220px] sm:min-h-[260px]' : 'min-h-[190px]'
              }`}
              style={{ backgroundColor: project.previewLayout.palette[1] }}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 border-b border-slate-200/80 pb-2 mb-3">
                  <span className="font-display font-bold tracking-tight text-slate-800">
                    {project.name.split(' ')[0]}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {project.previewLayout.heroTitle}
                </h4>
                <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                  {project.previewLayout.heroSubtitle}
                </p>
              </div>

              {/* Wireframe blocks mimicking structured web design */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 grid grid-cols-3 gap-2" aria-hidden="true">
                <div className="h-8 bg-slate-200/70 rounded-xs flex items-center justify-center text-[9px] text-slate-500 font-mono">
                  Identity
                </div>
                <div className="h-8 bg-slate-200/70 rounded-xs flex items-center justify-center text-[9px] text-slate-500 font-mono">
                  Catalog
                </div>
                <div
                  className="h-8 rounded-xs flex items-center justify-center text-[9px] text-white font-mono font-medium"
                  style={{ backgroundColor: project.previewLayout.accentColor }}
                >
                  Action
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Metadata & Descriptions */}
        <div className={`p-6 sm:p-8 flex flex-col justify-between ${isFeatured ? 'lg:col-span-5' : 'flex-1'}`}>
          <div>
            {/* Quiet Unboxed Metadata (Zero Pill Badge) */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/70 mb-2">
              <span className="text-[#36C99A] font-semibold">{project.badgeLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.name}
            </h3>

            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              {project.description}
            </p>

            {/* Design Highlights for featured card */}
            {isFeatured && (
              <ul className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs text-white/75">
                {project.designHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1685F7] mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            {/* Tech Tags */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-white/60">
              {project.techTags.map((tech, index) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {index < project.techTags.length - 1 && <span aria-hidden="true">/</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Action to view details */}
            {onSelect && (
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1685F7] hover:text-white transition-colors cursor-pointer py-1 focus-visible:outline-2 focus-visible:outline-[#1685F7]"
              >
                <span>{t.portfolio.viewDetails}</span>
                <ExternalLink size={13} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
