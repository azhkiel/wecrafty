import React from 'react';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-section bg-[#F6F8FC] py-20 md:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols): Narrow Text Column */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wide text-[#0F6FD9] uppercase mb-2">
              {t.about.kicker}
            </p>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17165E] tracking-tight leading-tight"
            >
              {t.about.title}
            </h2>

            <div className="mt-6 text-base sm:text-lg text-[#17165E]/85 leading-relaxed max-w-prose">
              <p>
                {t.about.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-4">
              <span className="text-xs uppercase font-mono tracking-wider text-[#17165E]/60">
                {t.about.coreTaglineLabel}
              </span>
              <span className="text-sm font-semibold text-[#17165E]">
                {t.about.tagline}
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Values as a Plain Typographic List */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
            <h3 className="text-xs uppercase tracking-wider text-[#0F6FD9] font-bold mb-5">
              {t.about.guidingValues}
            </h3>
            <ul className="divide-y divide-slate-100">
              {t.about.values.map((val, index) => (
                <li
                  key={val}
                  className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between text-sm sm:text-base font-semibold text-[#17165E]"
                >
                  <span>{val}</span>
                  <span className="text-xs font-mono text-slate-400">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
