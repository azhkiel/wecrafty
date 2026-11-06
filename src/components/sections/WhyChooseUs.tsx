import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext.tsx';
import { translations } from '../../data/translations.ts';

export const WhyChooseUs: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="scroll-section bg-white py-20 md:py-24 border-b border-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Large Heading & Context with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-wide text-[#0F6FD9] uppercase mb-2">
              {t.whyUs.kicker}
            </p>
            <h2
              id="why-us-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17165E] tracking-tight leading-tight"
            >
              {t.whyUs.title}
            </h2>
            <p className="mt-4 text-base text-[#17165E]/80 leading-relaxed max-w-md">
              {t.whyUs.description}
            </p>

            <div className="mt-8 flex items-center gap-2" aria-hidden="true">
              <span className="w-2.5 h-2.5 bg-[#1685F7] rounded-xs" />
              <span className="w-2.5 h-2.5 bg-[#8739E8] rounded-xs" />
              <span className="w-2.5 h-2.5 bg-[#36C99A] rounded-xs" />
            </div>
          </motion.div>

          {/* Right Column (7 cols): List with Hairline Dividers (NO cards) with Motion */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {t.whyUs.principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="py-6 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6 group"
              >
                <span className="font-display font-bold text-xl sm:text-2xl text-[#0F6FD9] group-hover:text-[#1685F7] transition-colors duration-150 tabular-nums shrink-0 mt-0.5">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#17165E] group-hover:text-[#0F6FD9] transition-colors duration-150">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#17165E]/80 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
