import React from 'react';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const Process: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-section bg-white py-20 md:py-24 border-b border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-wide text-[#0F6FD9] uppercase mb-2">
            {t.process.kicker}
          </p>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17165E] tracking-tight leading-tight"
          >
            {t.process.title}
          </h2>
          <p className="mt-4 text-base text-[#17165E]/80 leading-relaxed">
            {t.process.description}
          </p>
        </div>

        {/* Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-slate-200 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {t.process.steps.map((step) => (
              <div
                key={step.number}
                tabIndex={0}
                className="group flex flex-col items-start pt-2 border-l-2 lg:border-l-0 lg:border-t-2 border-[#1685F7]/30 lg:border-slate-200 hover:border-[#0F6FD9] lg:hover:border-[#0F6FD9] transition-all duration-200 pl-4 lg:pl-0 focus-visible:outline-2 focus-visible:outline-[#0F6FD9] rounded-xs"
              >
                {/* Step Number in Display Font */}
                <span className="font-display font-bold text-3xl sm:text-4xl text-[#0F6FD9] group-hover:text-[#1685F7] transition-colors duration-150 tabular-nums mb-3 block">
                  {step.number}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#17165E] group-hover:text-[#0F6FD9] transition-colors duration-150 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#17165E]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
